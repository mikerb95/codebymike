import Link from 'next/link'
import { Github } from 'lucide-react'

const GITHUB_PROFILE = 'https://github.com/mikerb95' // Asumido a partir del owner del repo. Cambia si es distinto.

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-slate-200/60 dark:border-slate-800/60 bg-white/40 dark:bg-[#0f1419]/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3 lg:grid-cols-5 text-sm">
        {/* Brand */}
        <div className="md:col-span-2 space-y-4">
          <div>
            <span className="text-lg font-semibold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900/70 dark:from-white dark:via-slate-200 dark:to-white/70 bg-clip-text text-transparent">
              CodeByMike
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-md text-[13px]">
            Ingeniería frontend enfocada en rendimiento, DX y experiencias de usuario con valor tangible. Diseño
            técnico, arquitectura y microinteracciones que generan impacto real.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <Link
              href={GITHUB_PROFILE}
              aria-label="GitHub"
              target="_blank"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/70 dark:bg-slate-900/40 hover:border-brand-500/50 hover:text-brand-600 transition-colors"
            >
              <Github size={18} />
            </Link>
          </div>
        </div>

        {/* Navegación */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Sitio</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li><Link className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors" href="/">Inicio</Link></li>
            <li><Link className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors" href="/proyectos">Proyectos</Link></li>
            <li><Link className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors" href="/contacto">Contacto</Link></li>
            <li><Link className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors" href="/mision">Misión</Link></li>
            <li><Link className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors" href="/vision">Visión</Link></li>
          </ul>
        </div>

        {/* Enfoque */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Enfoque</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-[13px] leading-relaxed">
            <li>Arquitectura escalable</li>
            <li>Rendimiento percibido</li>
            <li>Accesibilidad pragmática</li>
            <li>DX & automatización</li>
            <li>UI animada & micro UX</li>
          </ul>
        </div>

        {/* Estado / Meta */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Meta</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-[13px] leading-relaxed">
            <li>Iterando continuamente</li>
            <li>Más estudios de caso pronto</li>
            <li>Abierto a colaboración</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200/60 dark:border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 py-6 text-[12px] flex flex-col md:flex-row items-center gap-4 justify-between text-slate-500 dark:text-slate-500">
          <span>© {new Date().getFullYear()} CodeByMike. Algunos derechos reservados.</span>
          <span className="text-[11px]">Construido con Next.js, Tailwind CSS & Framer Motion.</span>
        </div>
      </div>
    </footer>
  )
}

