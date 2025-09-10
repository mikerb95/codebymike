'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface TechCategory {
  category: string
  items: string[]
  placeholder?: boolean
}

// Placeholder categories; real technologies can be injected later.
const initialCategories: TechCategory[] = [
  { category: 'Frontend / UI', items: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'], placeholder: true },
  { category: 'Backend / APIs', items: ['Node.js', 'Express (planeado)', 'Serverless Functions'], placeholder: true },
  { category: 'Infraestructura & Cloud', items: ['Microsoft Azure (en progreso)', 'Vercel', 'Netlify (comparativa)', 'DNS + Dominio Propio'], placeholder: true },
  { category: 'Bases de Datos', items: ['SQL Server (Labs)', 'PostgreSQL (posible)', 'ORM (a definir)'], placeholder: true },
  { category: 'Seguridad', items: ['HTTPS / SSL', 'bcrypt', 'Middlewares de protección', 'Headers / CSP (próximo)'], placeholder: true },
  { category: 'Automatización / CI', items: ['Deploy continuo en Vercel', 'Netlify preview builds', 'Git Hooks (plan)'], placeholder: true },
  { category: 'Frameworks Adicionales', items: ['Astro (exploración)', 'Express (API dedicada)'], placeholder: true },
  { category: 'Idiomas', items: ['Inglés B1 certificado', 'Objetivo B2 este año'], placeholder: true }
]

export default function ShowcasePage() {
  const [categories] = useState(initialCategories)

  return (
    <div className="min-h-dvh pt-28 pb-28 px-6 mx-auto max-w-7xl">
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Showcase & Learning Path</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
          Esta página presenta el ecosistema tecnológico utilizado y el plan de crecimiento continuo: desde
          infraestructura en la nube y despliegues automatizados, hasta seguridad, frameworks y
          progresión lingüística.
        </p>
      </motion.header>

      <section className="mt-16 space-y-12">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.05 * idx, duration: 0.55 }}
            className="group"
          >
            <header className="flex items-center justify-between mb-4">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                {cat.category}
              </h2>
              {cat.placeholder && (
                <span className="rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-[11px] font-medium px-2 py-1">
                  Placeholder
                </span>
              )}
            </header>
            <ul className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <li key={item}>
                  <span className="inline-flex items-center gap-1 rounded-full border border-slate-200/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 backdrop-blur px-3 py-1 text-[12px] font-medium text-slate-700 dark:text-slate-200 shadow-sm group-hover:border-brand-400/60 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      <section className="mt-24 grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-gradient-to-br from-white/70 to-white/40 dark:from-[#141a22]/70 dark:to-[#141a22]/30 backdrop-blur-xl p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-3">Estrategia de Aprendizaje</h3>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Enfoque iterativo: construir features reales, medir impacto, reforzar fundamentos (performance,
            accesibilidad, arquitectura) y luego adoptar herramientas avanzadas (edge computing, pipelines
            de integración continua, observabilidad). Azure se integra para laboratorios de despliegue y
            servicios gestionados complementarios.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-gradient-to-br from-white/70 to-white/40 dark:from-[#141a22]/70 dark:to-[#141a22]/30 backdrop-blur-xl p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-3">Roadmap Próximo</h3>
          <ol className="text-sm list-decimal ml-4 space-y-1 text-slate-600 dark:text-slate-300">
            <li>Integrar métricas (Core Web Vitals + logging de rendimiento).</li>
            <li>Azure: crear entorno para API Express y base de datos administrada.</li>
            <li>Automatizar pipeline CI/CD multi proveedor (Vercel / Netlify).</li>
            <li>Implementar autenticación segura + hashing con bcrypt y políticas.</li>
            <li>Configurar monitorización (logging estructurado y alertas básicas).</li>
            <li>Refuerzo idioma: sesiones de práctica + simulación técnica en inglés.</li>
          </ol>
        </motion.div>
      </section>

      <section className="mt-24">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-[#12161d]/60 backdrop-blur-xl p-8 shadow flex flex-col md:flex-row gap-8"
        >
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-3">Seguridad & Buenas Prácticas</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              La aplicación adoptará HTTPS estricto, protección de cabeceras (CSP, HSTS, X-Frame-Options),
              sanitización de entrada, hashing de credenciales con <code className="font-mono">bcrypt</code>,
              rate limiting en endpoints críticos y separación de responsabilidades mediante
              middlewares. En fases posteriores: análisis SAST, dependencia y escaneo de vulnerabilidades.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-3">Comunicación & Email</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Integración prevista con un servidor o servicio de correo transaccional para notificaciones,
              confirmaciones y recuperación de cuentas. Se evaluarán proveedores (Resend, Postmark,
              Azure Communication Services) asegurando DKIM, SPF y DMARC correctos.
            </p>
          </div>
        </motion.div>
      </section>

      <footer className="mt-24 text-center text-xs text-slate-500 dark:text-slate-500">
        Página en evolución — contenido técnico y métricas se irán actualizando.
      </footer>
    </div>
  )
}
