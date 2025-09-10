import { promises as fs } from 'fs'
import path from 'path'
import type { ProjectDetail } from '@/data/projects'

const DATA_PATH = path.join(process.cwd(), 'src', 'data', 'projects.json')

async function ensureFile() {
  try {
    await fs.access(DATA_PATH)
  } catch {
    await fs.writeFile(DATA_PATH, '[]', 'utf8')
  }
}

export async function readProjects(): Promise<ProjectDetail[]> {
  await ensureFile()
  const raw = await fs.readFile(DATA_PATH, 'utf8')
  try {
    const data = JSON.parse(raw)
    if (Array.isArray(data)) return data as ProjectDetail[]
    return []
  } catch {
    return []
  }
}

export async function writeProjects(all: ProjectDetail[]) {
  await fs.writeFile(DATA_PATH, JSON.stringify(all, null, 2), 'utf8')
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}
