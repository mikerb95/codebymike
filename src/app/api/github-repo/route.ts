import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const repoParam = searchParams.get('repo')
  if (!repoParam || !repoParam.includes('/')) {
    return NextResponse.json({ error: 'Formato repo inválido (owner/name)' }, { status: 400 })
  }
  const [owner, name] = repoParam.split('/')
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github+json'
    }
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
    }
    const [repoRes, languagesRes] = await Promise.all([
      fetch(`https://api.github.com/repos/${owner}/${name}`, { headers, next: { revalidate: 300 } }),
      fetch(`https://api.github.com/repos/${owner}/${name}/languages`, { headers, next: { revalidate: 300 } })
    ])
    if (!repoRes.ok) {
      return NextResponse.json({ error: 'Repo no encontrado' }, { status: 404 })
    }
    const repo = await repoRes.json()
    const languages = await languagesRes.json()
    return NextResponse.json({
      owner,
      name,
      url: repo.html_url,
      description: repo.description,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      topics: repo.topics || [],
      primaryLanguage: repo.language,
      languages: Object.keys(languages),
      lastPushedAt: repo.pushed_at
    })
  } catch (e) {
    return NextResponse.json({ error: 'Error consultando GitHub' }, { status: 500 })
  }
}
