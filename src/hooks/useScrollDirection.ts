'use client'
import { useEffect, useState } from 'react'

export function useScrollDirection(threshold = 8) {
  const [direction, setDirection] = useState<'up' | 'down' | 'none'>('none')
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      const delta = y - lastY
      if (Math.abs(delta) > threshold) {
        const dir = delta > 0 ? 'down' : 'up'
        setDirection(dir)
        setHidden(dir === 'down' && y > 120)
        lastY = y
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return { direction, hidden }
}
