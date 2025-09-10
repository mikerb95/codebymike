export interface ProjectDetail {
  slug: string
  title: string
  tagline: string
  description: string
  hero: { image: string; alt: string; theme?: 'light' | 'dark' }
  roles: string[]
  stack: string[]
  metrics: { label: string; value: string }[]
  sections: { id: string; heading: string; content: string }[]
  gallery: { image: string; alt: string; caption?: string }[]
  design?: { notes?: string; principles?: string[] }
  frameworks?: string[]
  technologies?: string[]
  repo?: {
    owner: string
    name: string
    url: string
    stars?: number
    forks?: number
    primaryLanguage?: string
    topics?: string[]
    lastPushedAt?: string
  }
}

// At build time load JSON (non persistent at runtime on serverless deployments after build)
// For runtime modifications use functions in lib/projectsStore via server actions.
// eslint-disable-next-line @typescript-eslint/no-var-requires
export const projects: ProjectDetail[] = require('./projects.json')

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}

