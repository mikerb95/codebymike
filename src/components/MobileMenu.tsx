'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

interface NavItem { label: string; href: string; id?: string }

const variants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0 }
}

export default function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="md:hidden">
      <button
        aria-label="Abrir menú"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            key="panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="absolute left-0 right-0 mt-2 origin-top rounded-lg border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0c0e12]/95 backdrop-blur px-4 py-4 shadow-lg"
          >
            <ul className="space-y-2">
              {items.map((item, i) => (
                <motion.li
                  key={item.href}
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.03 * i }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <ThemeToggle />
                <a
                  href="#contacto"
                  className="flex-1 text-center rounded-md bg-brand-600 text-white px-3 py-2 text-sm font-medium hover:bg-brand-700"
                  onClick={() => setOpen(false)}
                >
                  Hablemos
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}
