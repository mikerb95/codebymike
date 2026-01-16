import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Github, Globe, Layers, Zap, CheckCircle2 } from 'lucide-react'
import { getProjectBySlug } from '@/data/projects'
import Footer from '@/components/Footer'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-dvh flex flex-col font-sans bg-white dark:bg-[#0b0f14]">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 p-6">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-slate-800 dark:text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <ArrowLeft size={16} /> Volver a Proyectos
          </Link>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] to-transparent"></div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.roles.map(role => (
                <span key={role} className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
                  {role}
                </span>
              ))}
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold text-white tracking-tight font-serif mb-6">
              {project.title}
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
              {project.tagline}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-slate-800 pt-8">
            {project.metrics.map((metric, i) => (
              <div key={i}>
                <p className="text-3xl lg:text-4xl font-bold text-white mb-1">{metric.value}</p>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1 mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Content (Left) */}
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Zap className="text-brand-600" /> El Desafío
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.challenge || project.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Layers className="text-brand-600" /> Arquitectura & Solución
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                {project.architecture}
              </p>

              {/* Tech Decisions Cards */}
              {project.techDecisions && project.techDecisions.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2">
                  {project.techDecisions.map((decision, i) => (
                    <div key={i} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">{decision.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {decision.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <CheckCircle2 className="text-brand-600" /> Impacto
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.impact}
              </p>
            </section>
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-4 space-y-12 h-fit lg:sticky lg:top-24">
            {/* Links */}
            <div className="flex flex-col gap-4">
              {project.repo && (
                <a
                  href={project.repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  <Github size={18} /> Ver Código Fuente
                </a>
              )}
              <button
                disabled
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-400 cursor-not-allowed dark:border-slate-800 dark:bg-transparent dark:text-slate-600"
              >
                <Globe size={18} /> Demo Live (Privado)
              </button>
            </div>

            {/* Stack List */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
                Tech Stack
              </h3>
              <ul className="space-y-3">
                {project.stack.map(tech => (
                  <li key={tech} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
