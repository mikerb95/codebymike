import type { Metadata } from 'next'
import HomeContent from '@/components/HomeContent'

export const metadata: Metadata = {
  title: 'CodeByMike | Senior Software Engineer',
  description: 'Ingeniería de software con propósito. Especializado en arquitectura escalable y experiencia de usuario.',
}

export default function HomePage() {
  return <HomeContent />
}
