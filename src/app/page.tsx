'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Moon, Sun } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 pt-24 pb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              CodeByMike
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl"
            >
              Desarrollo de software con clase: rendimiento, UX y animaciones que sorprenden.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-md bg-brand-600 text-white px-5 py-3 text-sm font-medium hover:bg-brand-700 transition-colors"
              >
                Hablemos <ArrowRight size={18} />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 px-5 py-3 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              >
                Ver servicios
              </a>
            </motion.div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Servicios</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Próximamente: desarrollo web, auditoría de rendimiento, UX, animaciones, e-commerce.
          </p>
        </section>

        <section id="contacto" className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="text-2xl md:text-3xl font-semibold">Contacto</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Pronto añadiremos un formulario.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
