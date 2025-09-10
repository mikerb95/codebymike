"use server"
import { readProjects, writeProjects, slugify } from '@/lib/projectsStore'
import type { ProjectDetail } from '@/data/projects'

export interface AddProjectState { ok?: boolean; error?: string | null }

export async function addProject(_prev: AddProjectState, formData: FormData): Promise<AddProjectState> {
  const title = (formData.get('title') || '').toString().trim()
  const tagline = (formData.get('tagline') || '').toString().trim()
  const description = (formData.get('description') || '').toString().trim()
  const heroImage = (formData.get('heroImage') || '').toString().trim()
  const heroAlt = (formData.get('heroAlt') || '').toString().trim() || title
  const rolesRaw = (formData.get('roles') || '').toString()
  const stackRaw = (formData.get('stack') || '').toString()
  const technologiesRaw = (formData.get('technologies') || '').toString()
  const frameworksRaw = (formData.get('frameworks') || '').toString()
  const designNotes = (formData.get('designNotes') || '').toString()
  const repoOwner = (formData.get('repoOwner') || '').toString().trim()
  const repoName = (formData.get('repoName') || '').toString().trim()

  if (!title || !tagline || !description || !heroImage) {
    return { ok: false, error: 'Campos obligatorios faltantes.' }
  }

  const roles = rolesRaw.split(',').map((r) => r.trim()).filter(Boolean)
  const stack = stackRaw.split(',').map((r) => r.trim()).filter(Boolean)
  const technologies = technologiesRaw.split(',').map((r) => r.trim()).filter(Boolean)
  const frameworks = frameworksRaw.split(',').map((r) => r.trim()).filter(Boolean)

  const slugBase = slugify(title)
  const all = await readProjects()
  let slug = slugBase
  let i = 2
  while (all.some((p) => p.slug === slug)) {
    slug = `${slugBase}-${i++}`
  }

  const project: ProjectDetail = {
    slug,
    title,
    tagline,
    description,
    hero: { image: heroImage, alt: heroAlt },
    roles: roles.length ? roles : ['Desarrollo'],
    stack: stack.length ? stack : technologies,
    metrics: [],
    sections: [
      { id: 'overview', heading: 'Overview', content: description }
    ],
    gallery: [],
    design: designNotes ? { notes: designNotes } : undefined,
    technologies: technologies.length ? technologies : undefined,
    frameworks: frameworks.length ? frameworks : undefined,
    repo: repoOwner && repoName ? { owner: repoOwner, name: repoName, url: `https://github.com/${repoOwner}/${repoName}` } : undefined
  }

  await writeProjects([project, ...all])
  return { ok: true }
}
