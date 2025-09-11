"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-32 text-center bg-gradient-to-br from-white via-slate-50 to-white dark:from-[#0b0f14] dark:via-[#0e1319] dark:to-[#0b0f14]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_45%,rgba(0,0,0,0.04),transparent_70%)] dark:bg-[radial-gradient(circle_at_40%_45%,rgba(255,255,255,0.05),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 0.8, rotate: 8, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14, mass: 0.6, delay: 0.05 }}
            className="mb-10 flex h-28 w-28 items-center justify-center rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-[#141a22]/60 backdrop-blur-xl shadow-inner"
        >
          <Compass className="h-12 w-12 text-brand-600 dark:text-brand-400" />
        </motion.div>
        <h1 className="bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900/80 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent dark:from-white dark:via-slate-200 dark:to-white/80">
          404
        </h1>
        <p className="mt-6 max-w-xl text-balance text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          La página que buscas no existe, fue movida o está en construcción. Revisa la URL o vuelve al inicio.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/70 dark:bg-slate-900/40 px-5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 backdrop-blur hover:border-brand-500/60 hover:text-slate-900 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Volver al inicio
          </Link>
          <Link
            href="/proyectos"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:from-brand-600 hover:to-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
          >
            Ver proyectos
          </Link>
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-2 rounded-lg border border-transparent bg-slate-900/90 dark:bg-white/10 px-5 py-2.5 text-sm font-medium text-white dark:text-slate-100 shadow hover:bg-slate-900 dark:hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
          >
            Contacto
          </Link>
        </div>
      </motion.div>

  {/* Single subtle overlay retained; removed extra bars */}
    </main>
  )
}
