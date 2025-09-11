import { isAuthenticated } from '../login/actions'
import { redirect } from 'next/navigation'
import { PanelProyectosClient } from './PanelProyectosClient'

export default function PanelProyectosPage() {
  if (!isAuthenticated()) redirect('/panel/login')
  return <PanelProyectosClient />
}

