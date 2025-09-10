"use client"
import { motion } from 'framer-motion'

export default function MisionPage() {
  return (
    <div className="min-h-dvh pt-28 pb-32 px-6 mx-auto max-w-5xl">
      <motion.header
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Misión</h1>
        <p className="mt-5 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
          Crear experiencias digitales de alto rendimiento que reduzcan fricción, potencien la conversión y
          eleven el estándar de calidad técnica en productos modernos.
        </p>
      </motion.header>

      <div className="mt-16 space-y-20">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-[#12161d]/60 backdrop-blur p-10"
        >
          <h2 className="text-xl font-semibold tracking-tight mb-6">Pilares</h2>
          <ul className="grid gap-6 md:grid-cols-2 text-sm text-slate-600 dark:text-slate-300">
            <li className="rounded-lg bg-slate-100/60 dark:bg-white/5 p-4">Rendimiento como ventaja competitiva.</li>
            <li className="rounded-lg bg-slate-100/60 dark:bg-white/5 p-4">Arquitectura preparada para el cambio.</li>
            <li className="rounded-lg bg-slate-100/60 dark:bg-white/5 p-4">Accesibilidad pragmática y medible.</li>
            <li className="rounded-lg bg-slate-100/60 dark:bg-white/5 p-4">Micro experiencias dirigidas por datos.</li>
            <li className="rounded-lg bg-slate-100/60 dark:bg-white/5 p-4">Automatización para liberar foco creativo.</li>
            <li className="rounded-lg bg-slate-100/60 dark:bg-white/5 p-4">Transparencia técnica y mentoría.</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-[#12161d]/60 backdrop-blur p-10"
        >
          <h2 className="text-xl font-semibold tracking-tight mb-6">Impacto</h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            La misión impulsa decisiones centradas en valor: mejorar métricas Core Web Vitals, reducir deuda
            técnica y habilitar ciclos de entrega más ágiles sin sacrificar estabilidad ni experiencia.
          </p>
        </motion.section>
      </div>
    </div>
  )
}
