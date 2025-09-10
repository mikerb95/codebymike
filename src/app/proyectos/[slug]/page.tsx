import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getProjectBySlug, projects } from '@/data/projects'
import type { Metadata } from 'next'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const p = getProjectBySlug(params.slug)
  if (!p) return { title: 'Proyecto' }
  return { title: `${p.title} | CodeByMike`, description: p.tagline }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) return notFound()

  return (
    <div className="min-h-dvh pt-24 pb-32">
      {/* Hero */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-800/60 bg-slate-100 dark:bg-slate-900">
            <Image
              src={project.hero.image}
              alt={project.hero.alt}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0" />
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-md">
                  {project.title}
                </h1>
                <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-200 leading-relaxed">
                  {project.tagline}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-[11px] font-medium text-white/90">
                {project.roles.map((r) => (
                  <span
                    key={r}
                    className="rounded-full bg-white/15 backdrop-blur px-3 py-1 border border-white/20"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content layout */}
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12">
          {/* Sticky sidebar */}
            <aside className="lg:col-span-4 space-y-10 order-2 lg:order-1">
              <div className="rounded-xl border border-slate-200/70 dark:border-slate-800/60 bg-white/70 dark:bg-[#12161d]/70 backdrop-blur p-6 shadow-sm sticky top-28">
                <h2 className="font-semibold text-sm tracking-wide text-slate-500 dark:text-slate-400 mb-4">
                  Stack Principal
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <li key={s}>
                      <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-200">
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-slate-200 dark:border-slate-800 pt-6">
                  <h3 className="font-semibold text-sm tracking-wide text-slate-500 dark:text-slate-400 mb-4">
                    Métricas Clave
                  </h3>
                  <dl className="grid grid-cols-2 gap-4">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="flex flex-col">
                        <dt className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          {m.label}
                        </dt>
                        <dd className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                          {m.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="rounded-xl border border-dashed border-slate-300/70 dark:border-slate-700/70 p-6 text-xs text-slate-500 dark:text-slate-400">
                Próximamente: enlaces a repositorio, caso de estudio detallado y demo interactiva.
              </div>
            </aside>
          {/* Main sections */}
          <div className="lg:col-span-8 space-y-24 order-1 lg:order-2">
            {project.sections.map((sec) => (
              <article key={sec.id} id={sec.id} className="scroll-mt-28">
                <header className="mb-6">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {sec.heading}
                  </h2>
                </header>
                <p className="text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {sec.content}
                </p>
              </article>
            ))}

            {/* Gallery */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight mb-6">Galería</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {project.gallery.map((g) => (
                  <figure
                    key={g.image}
                    className="relative overflow-hidden rounded-xl border border-slate-200/70 dark:border-slate-800/60 bg-slate-100 dark:bg-slate-900 group"
                  >
                    <Image
                      src={g.image}
                      alt={g.alt}
                      width={800}
                      height={600}
                      className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    {g.caption && (
                      <figcaption className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur px-4 py-2 text-[11px] text-white">
                        {g.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>

            <div className="pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-6">
              <a
                href="/proyectos"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:underline"
              >
                ← Volver a proyectos
              </a>
              <a
                href="/cv"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-brand-600 hover:underline"
              >
                Ver CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
