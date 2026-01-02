import type { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock3, Mail, Wrench } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'En mantenimiento | CodeByMike',
  description: 'Estamos ajustando los últimos detalles. Volvemos enseguida.'
}

export default function HomePage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="relative flex-1 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white dark:from-[#0b0f14] dark:via-[#0e1319] dark:to-[#0b0f14]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_40%,rgba(15,23,42,0.05),transparent_60%)] dark:bg-[radial-gradient(circle_at_35%_40%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 backdrop-blur-[2px]" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-24 text-center md:gap-10 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center gap-3 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/60 dark:text-slate-200"
          >
            <Clock3 size={18} className="text-brand-600 dark:text-brand-400" />
            Estamos afinando los últimos detalles
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14, mass: 0.7, delay: 0.05 }}
            className="flex h-28 w-28 items-center justify-center rounded-3xl border border-slate-200/70 bg-white/80 shadow-inner backdrop-blur-xl dark:border-slate-800/70 dark:bg-[#141a22]/70"
          >
            <Wrench className="h-12 w-12 text-brand-600 dark:text-brand-400" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6, ease: 'easeOut' }}
            className="space-y-4"
          >
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">En mantenimiento</h1>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
              Estamos mejorando la experiencia y afinando nuevas funcionalidades. En breve volveremos con todo funcionando.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-lg border border-slate-300/70 bg-white/80 px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:border-brand-500/60 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 dark:border-slate-800/70 dark:bg-slate-900/50 dark:text-slate-100"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Volver al inicio
            </Link>
            <Link
              href="mailto:hola@codebymike.com"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 px-4 py-2.5 text-sm font-medium text-white shadow transition hover:from-brand-600 hover:to-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
            >
              <Mail size={16} /> Escríbeme
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
