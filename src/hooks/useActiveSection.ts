'use client'
import { useEffect, useState } from 'react'

interface Options {
  ids: string[]
  rootMargin?: string
  threshold?: number
}

export function useActiveSection({ ids, rootMargin = '-40% 0px -55% 0px', threshold = 0 }: Options) {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            if (id) setActive(id)
          }
        })
      },
      { root: null, rootMargin, threshold }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, rootMargin, threshold])

  return active
}
