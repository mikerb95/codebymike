'use client'
import { serviceCategories } from '@/data/services'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  open: boolean
  onClose: () => void
}

export default function MegaMenu({ open, onClose }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) onClose()
    }
    if (open) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open, onClose])

  useEffect(() => {
    function esc(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', esc)
    return () => document.removeEventListener('keydown', esc)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
          className="absolute left-0 right-0 top-full mt-3 px-2 md:px-4"
        >
          <div
            ref={ref}
            className="mx-auto max-w-6xl rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/90 dark:bg-[#0c0e12]/90 backdrop-blur-xl shadow-lg ring-1 ring-slate-900/5 dark:ring-white/5 p-6 grid gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
          >
            {serviceCategories.map((cat) => (
              <div key={cat.title} className="space-y-3 min-w-[160px]">
                <h4 className="font-semibold text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {cat.title}
                </h4>
                <ul className="space-y-2">
                  {cat.items.map((it) => {
                    const slug = cat.title
                      .toLowerCase()
                      .normalize('NFD')
                      .replace(/[^a-z0-9\s-]/g, '')
                      .trim()
                      .replace(/\s+/g, '-')
                      .replace(/-+/g, '-')
                    const href = `/servicios#${slug}`
                    return (
                      <li key={it.label}>
                        <a
                          href={href}
                          className="group block rounded-md px-2 py-1.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <p className="text-sm font-medium leading-none mb-1 text-slate-700 dark:text-slate-200 group-hover:text-brand-600">
                            {it.label}
                          </p>
                          <p className="text-[11px] leading-tight text-slate-500 dark:text-slate-400">
                            {it.description}
                          </p>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          <div className="md:col-span-3 lg:col-span-4 xl:col-span-6 -mt-2 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex justify-end">
            <a
              href="/servicios"
              className="text-xs font-medium text-brand-600 hover:underline"
              onClick={onClose}
            >
              Ver todos los servicios →
            </a>
          </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
