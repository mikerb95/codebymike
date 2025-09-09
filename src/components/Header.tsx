'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { useActiveSection } from '@/hooks/useActiveSection'
import MobileMenu from './MobileMenu'
import { motion } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Inicio', href: '#top', id: 'top' },
  { label: 'Servicios', href: '#servicios', id: 'servicios' },
  { label: 'Contacto', href: '#contacto', id: 'contacto' }
]

export default function Header() {
  const active = useActiveSection({ ids: NAV_ITEMS.map((i) => i.id!) })
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 dark:border-slate-800/60 backdrop-blur bg-white/70 dark:bg-[#0c0e12]/70 supports-[backdrop-filter]:bg-white/55 dark:supports-[backdrop-filter]:bg-[#0c0e12]/55">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          CodeByMike
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm relative">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id || (item.id === 'top' && active === '')
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-md px-3 py-2 font-medium transition-colors hover:text-brand-600 ${
                  isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-2 right-2 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-brand-400 to-brand-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
          <div className="h-6 w-px mx-1 bg-slate-300/60 dark:bg-slate-700/60" />
          <ThemeToggle />
          <a
            href="#contacto"
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-brand-600 text-white px-4 py-2 font-medium hover:bg-brand-700 text-xs tracking-wide"
          >
            HABLEMOS
          </a>
        </nav>
        <MobileMenu items={NAV_ITEMS} />
      </div>
    </header>
  )
}
