'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { ArrowUpRight } from 'lucide-react'

export default function ProyectosPage() {
  return (
    <div className="min-h-dvh pt-32 pb-24 px-6 mx-auto max-w-7xl font-sans">
      <header className="max-w-3xl mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white font-serif"
        >
          Case Studies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
        >
          Selección de proyectos donde la ingeniería resuelve problemas de negocio complejos.
        </motion.p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((p, idx) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 transition-all hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xl"
          >
            <div className="aspect-video w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
              {/* In a real scenario we would use Next.js Image here, but using a div placeholder for now as mock images might not exist */}
              <div className={`h-full w-full bg-gradient-to-br ${idx % 2 === 0 ? 'from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700' : 'from-brand-100 to-brand-200 dark:from-brand-900/20 dark:to-brand-800/20'}`} />
            </div>

            <div className="flex flex-1 flex-col p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                {p.stack.slice(0, 3).map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                <Link href={`/proyectos/${p.slug}`} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {p.title}
                </Link>
              </h3>

              <p className="mt-3 text-base text-slate-600 dark:text-slate-400 line-clamp-3">
                {p.description}
              </p>

              <div className="mt-auto pt-8 flex items-center text-sm font-medium text-slate-900 dark:text-white gap-2">
                Leer Case Study <ArrowUpRight size={16} className="text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-16 border-t border-slate-200 dark:border-slate-800 pt-8">
        <Link href="/" className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
          ← Volver al inicio
        </Link>
      </div>
    </div>
  )
}
