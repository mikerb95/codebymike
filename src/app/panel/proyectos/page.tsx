"use client"
import { useEffect, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { addProject, type AddProjectState } from './actions'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface RepoData {
  owner: string
  name: string
  url: string
  description?: string
  stars?: number
  forks?: number
  topics?: string[]
  primaryLanguage?: string
  languages?: string[]
  lastPushedAt?: string
}

const initialState: AddProjectState = { ok: undefined, error: null }

function SubmitBtn() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow disabled:opacity-60"
    >
      {pending ? 'Guardando...' : 'Agregar proyecto'}
    </button>
  )
}

export default function PanelProyectosPage() {
  const [state, formAction] = useFormState(addProject, initialState)
  const [repoQuery, setRepoQuery] = useState('')
  const [repoData, setRepoData] = useState<RepoData | null>(null)
  const [loadingRepo, setLoadingRepo] = useState(false)

  useEffect(() => {
    if (state.ok) {
      // refresh simple by reloading (since static import not dynamically updated here)
      // In a production scenario implement SWR to fetch API of projects.
      setTimeout(() => window.location.reload(), 600)
    }
  }, [state.ok])

  async function fetchRepo() {
    if (!repoQuery.includes('/')) return
    setLoadingRepo(true)
    try {
      const res = await fetch(`/api/github-repo?repo=${encodeURIComponent(repoQuery)}`)
      if (res.ok) {
        const json = await res.json()
        setRepoData(json)
      } else {
        setRepoData(null)
      }
    } finally {
      setLoadingRepo(false)
    }
  }

  return (
    <div className="min-h-dvh pt-28 pb-32 px-6 mx-auto max-w-6xl">
      <div className="flex items-start justify-between gap-6 flex-wrap">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Panel Proyectos</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl text-sm md:text-base">
            Añade nuevos proyectos. (Nota: Persistencia basada en archivo local; en Vercel no será permanente. Usa una base de datos para producción.)
          </p>
        </div>
        <Link href="/proyectos" className="text-sm font-medium text-brand-600 hover:underline">← Ver lista pública</Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-12 grid gap-12 lg:grid-cols-12"
      >
        <div className="lg:col-span-7 space-y-10">
          <form action={formAction} className="rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-[#12161d]/70 backdrop-blur p-8 shadow space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wide">Título *</label>
                <input name="title" required defaultValue={repoData?.name ? repoData.name.replace(/-/g, ' ') : ''} className="rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wide">Tagline *</label>
                <input name="tagline" required className="rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wide">Descripción *</label>
                <textarea name="description" required rows={5} defaultValue={repoData?.description || ''} className="rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm resize-y" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wide">Hero Image URL *</label>
                <input name="heroImage" required placeholder="https://..." className="rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wide">Hero Alt</label>
                <input name="heroAlt" className="rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wide">Roles (coma)</label>
                <input name="roles" placeholder="Arquitectura, Frontend" className="rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wide">Stack (coma)</label>
                <input name="stack" placeholder="Next.js, Tailwind CSS" className="rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wide">Frameworks (coma)</label>
                <input name="frameworks" placeholder="React, Astro" className="rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wide">Tecnologías (coma)</label>
                <input name="technologies" placeholder="TypeScript, GraphQL" className="rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wide">Notas de diseño</label>
                <textarea name="designNotes" rows={3} className="rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm" />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Integración GitHub</h2>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <input
                  value={repoQuery}
                  onChange={(e) => setRepoQuery(e.target.value)}
                  placeholder="owner/nombre"
                  className="flex-1 rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-4 py-2 text-sm"
                />
                <button
                  type="button"
                  onClick={fetchRepo}
                  disabled={loadingRepo || !repoQuery.includes('/')}
                  className="mt-2 sm:mt-0 inline-flex items-center rounded-lg bg-slate-900 dark:bg-white/10 text-white dark:text-slate-100 px-4 py-2 text-sm font-medium disabled:opacity-50"
                >
                  {loadingRepo ? 'Cargando...' : 'Cargar'}
                </button>
              </div>
              {repoData && (
                <div className="rounded-lg border border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-900/30 p-4 text-xs space-y-2">
                  <div className="font-medium">{repoData.owner}/{repoData.name}</div>
                  {repoData.description && <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">{repoData.description}</p>}
                  <div className="flex flex-wrap gap-2">
                    {repoData.topics?.slice(0, 8).map(t => <span key={t} className="rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px]">{t}</span>)}
                  </div>
                  <input type="hidden" name="repoOwner" value={repoData.owner} />
                  <input type="hidden" name="repoName" value={repoData.name} />
                </div>
              )}
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              <SubmitBtn />
              {state.ok === false && <p className="text-sm text-red-600 dark:text-red-400 font-medium">{state.error}</p>}
              {state.ok && <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Proyecto agregado.</p>}
            </div>
          </form>
        </div>
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-[#141a22]/60 backdrop-blur p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-4">Indicaciones</h2>
            <ul className="list-disc pl-5 text-xs space-y-2 text-slate-600 dark:text-slate-300">
              <li>Para persistencia real añade una base de datos (Postgres / SQLite / KV) y reemplaza el store.</li>
              <li>Los nuevos proyectos no se generan estáticamente; las páginas detalladas usan render dinámico.</li>
              <li>Usa la integración de GitHub para precargar descripción y topics.</li>
              <li>Puedes extender el formulario con métricas y galería más adelante.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-dashed border-slate-300/70 dark:border-slate-700/70 p-6 text-xs text-slate-500 dark:text-slate-400">
            Próximo: edición inline, reordenar proyectos, adjuntar métricas y galerías desde el panel.
          </div>
        </div>
      </motion.div>
    </div>
  )
}
