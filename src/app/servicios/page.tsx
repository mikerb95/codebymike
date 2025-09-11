"use client"
import { serviceCategories } from '@/data/services'
import { motion } from 'framer-motion'

function slugify(title: string) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export default function ServiciosPage() {
  return (
    <div className="min-h-dvh pt-28 pb-32 px-6 mx-auto max-w-7xl">
      <motion.header
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Servicios</h1>
        <p className="mt-5 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
          Capacidades enfocadas en entregar valor medible: rendimiento, arquitectura escalable, experiencia de
          usuario y procesos de desarrollo eficientes.
        </p>
      </motion.header>

      <div className="mt-16 space-y-28">
        {serviceCategories.map((cat, idx) => {
          const slug = slugify(cat.title)
          return (
            <motion.section
              key={cat.title}
              id={slug}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.6, delay: 0.05 * idx }}
              className="scroll-mt-28"
            >
              <header className="mb-8 flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{cat.title}</h2>
                <a
                  href="#top"
                  className="text-xs font-medium text-slate-500 hover:text-brand-600 transition-colors"
                >
                  ↑ volver arriba
                </a>
              </header>
              <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((it) => (
                  <li
                    key={it.label}
                    className="group relative rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-[#12161d]/70 backdrop-blur p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                  >
                    <h3 className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-200 mb-2">
                      {it.label}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-400">
                      {it.description}
                    </p>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-brand-500/30" />
                  </li>
                ))}
              </ul>
            </motion.section>
          )
        })}
      </div>
    </div>
  )
}
