import type { Metadata } from 'next'
import MaintenanceContent from '@/components/MaintenanceContent'

export const metadata: Metadata = {
  title: 'En mantenimiento | CodeByMike',
  description: 'Estamos ajustando los últimos detalles. Volvemos enseguida.'
}

export default function MantenimientoPage() {
  return <MaintenanceContent />
}
