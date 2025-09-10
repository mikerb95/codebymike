'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Project {
  title: string
  description: string
  stack: string[]
  href?: string
}

const projects: Project[] = [
  {
    title: 'Plataforma E-commerce Headless',
    description: 'Integración headless con rendimiento extremo y checkout optimizado.',
    stack: ['Next.js', 'Edge Functions', 'Stripe', 'GraphQL']
  },
  {
    title: 'Design System Multi-brand',
    description: 'Sistema de componentes escalable con tokens y theming dinámico.',
    stack: ['TypeScript', 'Storybook', 'Tailwind', 'Figma API']
  },
  {
    title: 'Real-time Dashboard',
    description: 'Visualización de métricas y alertas en tiempo real con sockets.',
    stack: ['Next.js', 'Socket.io', 'PostgreSQL', 'Redis']
  },
  {
    title: 'Motion Experience',
    description: 'Microinteracciones y transiciones fluidas para mejorar retención.',
    stack: ['Framer Motion', 'React 18', 'Rive']
  }
]

export default function ProyectosPage() {
  return (
    <div className="min-h-dvh pt-28 pb-24 px-6 mx-auto max-w-6xl">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold tracking-tight"
      >
        Proyectos Seleccionados
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl"
      >
        Una muestra de iniciativas centradas en rendimiento, escalabilidad y experiencia de usuario.
      </motion.p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * idx, duration: 0.5 }}
            className="group relative flex flex-col rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-[#12161d]/70 backdrop-blur-md p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <h3 className="font-semibold text-lg leading-tight text-slate-800 dark:text-slate-100">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 flex-1">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 text-[11px] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.href && (
              <Link
                href={p.href}
                className="mt-4 inline-flex text-xs font-medium text-brand-600 hover:underline"
              >
                Ver más →
              </Link>
            )}
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-brand-500/30 transition-colors" />
          </motion.article>
        ))}
      </div>
    </div>
  )
}
