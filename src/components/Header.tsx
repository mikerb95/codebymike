'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { useActiveSection } from '@/hooks/useActiveSection'
import MobileMenu from './MobileMenu'
import { motion } from 'framer-motion'
import { useState, useCallback } from 'react'
import MegaMenu from './MegaMenu'
import ProjectsMenu from './ProjectsMenu'

const NAV_ITEMS = [
  { label: 'Inicio', href: '#top', id: 'top' },
  { label: 'Servicios', href: '/servicios', id: 'servicios' },
  { label: 'Proyectos', href: '/proyectos', id: 'proyectos' },
  { label: 'Contacto', href: '/contacto', id: 'contacto' }
]

export default function Header() {
  const active = useActiveSection({ ids: NAV_ITEMS.map((i) => i.id!) })
  const [megaOpen, setMegaOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const toggleMega = useCallback(() => setMegaOpen((o) => !o), [])
  const closeMega = useCallback(() => setMegaOpen(false), [])
  const toggleProjects = useCallback(() => setProjectsOpen(o => !o), [])
  const closeProjects = useCallback(() => setProjectsOpen(false), [])
  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
      className="pointer-events-none fixed top-3 left-0 right-0 z-50 px-4 md:px-6"
      aria-label="Barra de navegación"
    >
      {/* Anchor top target */}
      <span id="top" className="absolute -top-24" aria-hidden />
      <div
        className="relative mx-auto max-w-7xl flex h-16 items-center justify-between rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/80 dark:bg-[#0c0e12]/80 backdrop-blur-xl shadow-[0_4px_16px_-4px_rgb(0_0_0/0.12)] ring-1 ring-slate-900/5 dark:ring-white/5 px-5 md:px-8 pointer-events-auto"
      >
        <Link
          href="/"
          className="font-semibold tracking-tight text-lg flex items-center gap-2 select-none"
        >
          {/* Placeholder logo mark */}
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-brand-400 to-brand-600 text-white font-bold text-sm shadow-inner">
            C
          </span>
          <span className="hidden sm:inline">CodeByMike</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm relative h-full">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id || (item.id === 'top' && active === '')
            const isServicios = item.label === 'Servicios'
            const isProyectos = item.label === 'Proyectos'
            return (
              <a
                key={item.href}
                href={item.href}
                onMouseEnter={isServicios ? () => { setMegaOpen(true); closeProjects() } : isProyectos ? () => { setProjectsOpen(true); closeMega() } : undefined}
                onFocus={isServicios ? () => { setMegaOpen(true); closeProjects() } : isProyectos ? () => { setProjectsOpen(true); closeMega() } : undefined}
                onClick={isProyectos ? (e) => { e.preventDefault(); toggleProjects(); } : isServicios ? (e) => { e.preventDefault(); toggleMega(); } : undefined}
                className={`relative rounded-md px-3 py-2 font-medium transition-colors hover:text-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                  isActive || (isServicios && megaOpen) || (isProyectos && projectsOpen)
                    ? 'text-brand-600 dark:text-brand-400'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {item.label}
                {(isActive || (isServicios && megaOpen) || (isProyectos && projectsOpen)) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-2 right-2 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-brand-400 to-brand-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
          <div className="h-6 w-px mx-2 bg-slate-300/60 dark:bg-slate-700/60" />
          <ThemeToggle />
          <a
            href="/contacto"
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-brand-500 to-brand-600 text-white px-4 py-2 font-medium hover:from-brand-600 hover:to-brand-700 text-xs tracking-wide shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Contáctame
          </a>
        </nav>
        {/* Mega menu container overlay area */}
        <div className="absolute left-0 right-0 top-full" onMouseLeave={() => { closeMega(); closeProjects() }}>
          <MegaMenu open={megaOpen} onClose={closeMega} />
          <ProjectsMenu open={projectsOpen} onClose={closeProjects} githubUrl="https://github.com/mikerb95" />
        </div>
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <MobileMenu items={NAV_ITEMS} />
        </div>
      </div>
    </motion.header>
  )
}
