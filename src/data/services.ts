export interface ServiceCategory {
  title: string
  items: { label: string; description: string; href?: string }[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Frontend',
    items: [
      { label: 'Aplicaciones Next.js', description: 'SSR, SSG, edge y server actions optimizadas.' },
      { label: 'Design Systems / UI Kits', description: 'Componentes escalables y accesibles.' },
      { label: 'Optimización de Rendimiento', description: 'Core Web Vitals, profiling, bundle split.' }
    ]
  },
  {
    title: 'Backend & APIs',
    items: [
      { label: 'APIs Serverless', description: 'Lambdas y edge functions eficientes.' },
      { label: 'Integraciones / Webhooks', description: 'Stripe, Slack, GitHub, CRM, etc.' },
      { label: 'GraphQL / REST', description: 'Modelado, caching y federación.' }
    ]
  },
  {
    title: 'Experiencias Avanzadas',
    items: [
      { label: 'Animaciones & Motion', description: 'Microinteracciones, transitions fluidas.' },
      { label: 'WebGL / 3D', description: 'Experiencias visuales con Three.js.' },
      { label: 'Microfrontends', description: 'Arquitecturas modulares escalables.' }
    ]
  },
  {
    title: 'Auditoría & Calidad',
    items: [
      { label: 'Auditoría de Performance', description: 'Informe accionable y plan de mejora.' },
      { label: 'Accesibilidad (A11y)', description: 'WCAG, testing y remediación.' },
      { label: 'Revisión de Código', description: 'Mejora mantenibilidad y estándares.' }
    ]
  },
  {
    title: 'E-commerce',
    items: [
      { label: 'Headless Commerce', description: 'Integración Shopify / Medusa / Saleor.' },
      { label: 'Checkout & Pagos', description: 'Stripe, UX de conversión optimizada.' },
      { label: 'Carritos Personalizados', description: 'State management y persistencia.' }
    ]
  },
  {
    title: 'Consultoría',
    items: [
      { label: 'Arquitectura', description: 'Diseño escalable, event-driven, clean.' },
      { label: 'Escalabilidad', description: 'Caching, colas, resiliencia.' },
      { label: 'Mentoring Técnico', description: 'Upskilling equipos y prácticas modernas.' }
    ]
  }
]
