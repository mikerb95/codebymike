import type { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Terminal, Mail } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CodeByMike | Senior Software Engineer',
  description: 'Ingeniería de software con propósito. Especializado en arquitectura escalable y experiencia de usuario.',
}

export default function HomePage() {
  return (
    <div className="min-h-dvh flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-100/20 via-white to-white dark:from-brand-900/20 dark:via-[#0b0f14] dark:to-[#0b0f14]" />

          <div className="mx-auto max-w-5xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-3 py-1 text-sm text-slate-600 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Disponible para nuevos proyectos
              </div>

              <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl dark:text-white font-serif">
                Ingeniería de software con <span className="text-brand-600 dark:text-brand-400">propósito</span>.
              </h1>

              <p className="mt-6 text-xl leading-relaxed text-slate-600 md:text-2xl dark:text-slate-300 max-w-2xl">
                Ayudo a empresas a escalar sus productos digitales mediante arquitectura robusta, rendimiento obsesivo y experiencia de usuario de clase mundial.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/proyectos"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-base font-medium text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Ver Case Studies <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-800 dark:bg-transparent dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Hablemos
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-24 border-t border-slate-100 dark:border-slate-800/50">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Expertise Técnico & Filosofía
            </h2>
            <div className="mt-12 grid gap-12 md:grid-cols-3">
              <div className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-900/20 dark:text-brand-400">
                  <Terminal size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Arquitectura Escalable</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Diseño sistemas distribuidos y modulares pensados para crecer. Monorepos, microservicios (cuando tienen sentido) y patrones de diseño sólidos.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Performance First</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  La velocidad es una feature. Optimizo Core Web Vitals, tiempos de respuesta de API y eficiencia en bases de datos.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Calidad de Código</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Testing riguroso (Unit, E2E), tipado estático estricto y documentación clara. Código mantenible es código rentable.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
