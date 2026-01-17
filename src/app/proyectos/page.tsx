import type { Metadata } from 'next'
import MaintenanceContent from '@/components/MaintenanceContent'

export const metadata: Metadata = {
  title: 'Case Studies - En mantenimiento | CodeByMike',
  description: 'Estamos actualizando nuestros Case Studies. Volvemos enseguida.'
}

export default function ProyectosPage() {
  return <MaintenanceContent />
}
