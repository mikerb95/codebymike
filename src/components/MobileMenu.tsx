'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { serviceCategories } from '@/data/services'
import ThemeToggle from './ThemeToggle'

interface NavItem { label: string; href: string; id?: string }

const variants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0 }
}

export default function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
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
              {items.map((item, i) => {
                if (item.label === 'Servicios') {
                  return (
                    <motion.li
                      key="mobile-servicios"
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.03 * i }}
                      className="border-b border-slate-200 dark:border-slate-800 pb-2"
                    >
                      <button
                        onClick={() => setServicesOpen((o) => !o)}
                        className="w-full flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <span>Servicios</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {servicesOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ type: 'tween', duration: 0.25 }}
                            className="mt-2 space-y-3 pl-4 pr-2"
                          >
                            {serviceCategories.map((cat) => (
                              <li key={cat.title} className="space-y-1">
                                <p className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400 font-semibold">
                                  {cat.title}
                                </p>
                                <ul className="space-y-1">
                                  {cat.items.map((it) => (
                                    <li key={it.label}>
                                      <a
                                        href={it.href || '#'}
                                        onClick={() => setOpen(false)}
                                        className="block rounded-md px-2 py-1 text-[12px] leading-tight text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                                      >
                                        <span className="font-medium mr-1">{it.label}</span>
                                        <span className="text-slate-400 dark:text-slate-500">– {it.description}</span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  )
                }
                return (
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
                )
              })}
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
