"use client"
import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useFormStatus, useFormState } from 'react-dom'
import { CheckCircle2, Send, Loader2, Mail, Phone, Shield, Building2 } from 'lucide-react'
import { sendMessage, type ContactActionState } from './actions'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 px-6 py-3 text-sm font-medium text-white shadow hover:from-brand-600 hover:to-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      <span className="relative flex items-center gap-2">
        {pending ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
        )}
        {pending ? 'Enviando…' : 'Enviar mensaje'}
      </span>
    </button>
  )
}

const initialState: ContactActionState = { ok: undefined, error: null }

export default function ContactoPage() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [state, formAction] = useFormState(sendMessage, initialState)

  // Reset form on success
  useEffect(() => {
    if (state.ok && formRef.current) {
      formRef.current.reset()
    }
  }, [state.ok])

  return (
    <div className="min-h-dvh pt-28 pb-32 px-6 mx-auto max-w-7xl">
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Contacto</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
          ¿Tienes una idea, producto o necesitas auditoría técnica? Completa el formulario y te responderé.
          Se priorizan proyectos con foco en rendimiento, UX avanzada o arquitectura escalable.
        </p>
      </motion.header>

      <div className="mt-16 grid gap-12 lg:grid-cols-12">
        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <form
            ref={formRef}
            action={formAction}
            className="relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-[#12161d]/70 backdrop-blur-xl p-8 shadow"
          >
            <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.5),transparent_70%)]" />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Nombre *</label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Tu nombre"
                  className="rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Empresa / Organización</label>
                <input
                  id="company"
                  name="company"
                  placeholder="Opcional"
                  className="rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="topic" className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Tipo de proyecto *</label>
                <select
                  id="topic"
                  name="topic"
                  required
                  className="rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                  defaultValue=""
                >
                  <option value="" disabled>Selecciona</option>
                  <option value="auditoria">Auditoría / Performance</option>
                  <option value="frontend">Frontend UI / Animaciones</option>
                  <option value="arquitectura">Arquitectura / Refactor</option>
                  <option value="ecommerce">E-commerce Headless</option>
                  <option value="consultoria">Consultoría Técnica</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Describe el reto, objetivos y plazos..."
                  className="resize-none rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 leading-relaxed"
                />
              </div>
              {/* Honeypot */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="mt-10 flex items-center gap-6 flex-wrap">
              <SubmitButton />
              <AnimatePresence>
                {state.ok !== undefined && (
                  <motion.div
                    key={state.ok ? 'ok' : 'err'}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className={`text-sm font-medium flex items-center gap-2 ${state.ok ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
                      }`}
                  >
                    {state.ok ? <CheckCircle2 size={16} /> : null}
                    {state.ok ? 'Mensaje enviado correctamente.' : state.error}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <p className="mt-6 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Al enviar aceptas el procesamiento de datos para responder tu solicitud. No se comparten con terceros.
            </p>
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-brand-500/20 to-brand-600/10 blur-3xl" />
          </form>
        </motion.div>

        {/* Aside info */}
        <motion.aside
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-[#141a22]/60 backdrop-blur p-8 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-5">
              Información directa
            </h2>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex gap-3 items-start">
                <Mail size={16} className="mt-0.5 text-brand-600" /> mike95@duck.com
              </li>
              <li className="flex gap-3 items-start">
                <Phone size={16} className="mt-0.5 text-brand-600" /> +57 310 464 1228
              </li>
              <li className="flex gap-3 items-start">
                <Shield size={16} className="mt-0.5 text-brand-600" /> Datos tratados solo para responder tu
                mensaje.
              </li>
              <li className="flex gap-3 items-start">
                <Building2 size={16} className="mt-0.5 text-brand-600" /> Trabajo remoto / híbrido internacional.
              </li>
            </ul>
          </div>
        </motion.aside>
      </div>
    </div>
  )
}
