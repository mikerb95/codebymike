import projectsData from './projects.json'

export interface ProjectDetail {
  slug: string
  title: string
  tagline: string
  description: string
  hero: { image: string; alt: string; theme?: 'light' | 'dark' }
  roles: string[]
  stack: string[]
  metrics: { label: string; value: string }[]

  // New "Case Study" fields
  challenge: string
  architecture: string
  impact: string
  techDecisions: { title: string; description: string }[]

  sections: { id: string; heading: string; content: string }[]
  gallery: { image: string; alt: string; caption?: string }[]

  repo?: {
    owner: string
    name: string
    url: string
    stars?: number
    forks?: number
  }
}

// Mock data for Senior Portfolio (in a real app this might come from a DB or CMS)
// We cast projectsData carefully or use a hardcoded enhanced list for now since we are changing schema
export const projects: ProjectDetail[] = [
  {
    slug: 'saas-analytics-dashboard',
    title: 'Nexus Analytics',
    tagline: 'Escala 10x en procesamiento de datos para Fintech',
    description: 'Plataforma de análisis financiero en tiempo real que procesa millones de transacciones diarias con latencia sub-100ms.',
    hero: { image: '/images/nexus-hero.jpg', alt: 'Nexus Analytics Dashboard', theme: 'dark' },
    roles: ['Lead Architect', 'Frontend Engineer'],
    stack: ['Next.js', 'ClickHouse', 'AWS Lambda', 'D3.js'],
    metrics: [
      { label: 'Datos procesados', value: '50TB+' },
      { label: 'Reducción de latencia', value: '-85%' },
      { label: 'Uptime', value: '99.99%' },
    ],
    challenge: 'El cliente enfrentaba cuellos de botella severos con su solución anterior basada en PostgreSQL, donde las consultas tardaban más de 30 segundos. Necesitaban un dashboard interactivo que pudiera agregar millones de filas en milisegundos.',
    architecture: 'Diseñé una arquitectura híbrida utilizando ClickHouse para agregaciones OLAP rápidas y PostgreSQL para datos transaccionales. El frontend consume una API optimizada en Edge Functions que cachea resultados frecuentes.',
    impact: 'La nueva plataforma permitió al cliente cerrar contratos con 3 bancos Tier-1 gracias a la capacidad de auditoría en tiempo real. Los costos de infraestructura se redujeron un 40% al optimizar el almacenamiento.',
    techDecisions: [
      { title: 'ClickHouse vs Snowflake', description: 'Elegimos ClickHouse por su rendimiento superior en consultas de baja latencia y menor costo para cargas de trabajo de escritura constante.' },
      { title: 'Turborepo', description: 'Implementamos monorepo para compartir tipado entre backend y frontend, reduciendo bugs de integración en un 60%.' }
    ],
    sections: [],
    gallery: [],
    repo: { owner: 'codebymike', name: 'nexus-analytics-demo', url: 'https://github.com/codebymike' }
  },
  {
    slug: 'healthcare-app',
    title: 'MediCore',
    tagline: 'Telemedicina segura compatible con HIPAA',
    description: 'Sistema integral de gestión de pacientes y videoconsultas encriptadas end-to-end.',
    hero: { image: '/images/medicore.jpg', alt: 'MediCore App', theme: 'light' },
    roles: ['Senior Full Stack'],
    stack: ['React Native', 'Node.js', 'WebRTC', 'Redis'],
    metrics: [
      { label: 'Usuarios activos', value: '15k' },
      { label: 'Consultas/mes', value: '4500' },
    ],
    challenge: 'Crear una experiencia de video fluida en redes móviles inestables manteniendo estricto cumplimiento de privacidad.',
    architecture: 'Implementamos SFU (Selective Forwarding Unit) customizado sobre mediasoup para adaptar la calidad del video dinámicamente. Toda la data en reposo usa encriptación a nivel de campo.',
    impact: 'Reducción del 30% en ausentismo de pacientes gracias a recordatorios inteligentes y facilidad de uso.',
    techDecisions: [
      { title: 'WebRTC Custom SFU', description: 'Evitamos soluciones CPaaS costosas para tener control total sobre la latencia y calidad.' }
    ],
    sections: [],
    gallery: []
  }
]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}

