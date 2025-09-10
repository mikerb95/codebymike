"use client"
import { motion } from 'framer-motion'

export default function VisionPage() {
  return (
    <div className="min-h-dvh pt-28 pb-32 px-6 mx-auto max-w-5xl">
      <motion.header
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Visión</h1>
        <p className="mt-5 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
          Impulsar un ecosistema donde la excelencia técnica y la experiencia de usuario convergen para crear
          productos sostenibles, accesibles y diferenciados.
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
          <h2 className="text-xl font-semibold tracking-tight mb-6">Horizonte</h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            La visión guía una evolución continua: incorporar analítica ética, modelos de rendimiento predictivo,
            y experiencias adaptativas basadas en contexto, manteniendo control humano y calidad consistente.
          </p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-[#12161d]/60 backdrop-blur p-10"
        >
          <h2 className="text-xl font-semibold tracking-tight mb-6">Dirección</h2>
          <ul className="grid gap-6 md:grid-cols-2 text-sm text-slate-600 dark:text-slate-300">
            <li className="rounded-lg bg-slate-100/60 dark:bg-white/5 p-4">UI progresiva y accesible por defecto.</li>
            <li className="rounded-lg bg-slate-100/60 dark:bg-white/5 p-4">Infraestructura edge y observabilidad granular.</li>
            <li className="rounded-lg bg-slate-100/60 dark:bg-white/5 p-4">Sistemas de diseño componibles y tokenizados.</li>
            <li className="rounded-lg bg-slate-100/60 dark:bg-white/5 p-4">Mentoría y transferencia de conocimiento constante.</li>
            <li className="rounded-lg bg-slate-100/60 dark:bg-white/5 p-4">Integraciones AI evaluadas con responsabilidad.</li>
            <li className="rounded-lg bg-slate-100/60 dark:bg-white/5 p-4">Escalabilidad con simplicidad operacional.</li>
          </ul>
        </motion.section>
      </div>
    </div>
  )
}
