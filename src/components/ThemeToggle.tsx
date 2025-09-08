'use client'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const current = resolvedTheme ?? theme

  return (
    <button
      aria-label="Cambiar tema"
      className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
      onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
    >
      {mounted && current === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
