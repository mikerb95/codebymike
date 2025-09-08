'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 dark:border-slate-800/60 backdrop-blur bg-white/70 dark:bg-[#0c0e12]/70">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          CodeByMike
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#servicios" className="hover:text-brand-600">Servicios</a>
          <a href="#contacto" className="hover:text-brand-600">Contacto</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
