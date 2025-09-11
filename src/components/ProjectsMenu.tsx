"use client"
import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  open: boolean
  onClose: () => void
  githubUrl: string
}

export default function ProjectsMenu({ open, onClose, githubUrl }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) onClose()
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('mousedown', handleClick)
      document.addEventListener('keydown', handleKey)
    }
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="absolute left-1/2 top-full mt-2 w-52 -translate-x-1/2 px-2"
        >
          <div
            ref={ref}
            className="overflow-hidden rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/90 dark:bg-[#0c0e12]/90 backdrop-blur-xl shadow-lg ring-1 ring-slate-900/5 dark:ring-white/10"
          >
            <ul className="py-2 text-sm">
              <li>
                <a
                  href="/proyectos"
                  onClick={onClose}
                  className="block px-4 py-2.5 font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-slate-800/70 transition-colors"
                >
                  Proyectos Web
                </a>
              </li>
              <li>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="block px-4 py-2.5 font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-slate-800/70 transition-colors"
                >
                  Perfil en GitHub
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
