import { isAuthenticated } from '../login/actions'
import { redirect } from 'next/navigation'
import { PanelProyectosClient } from './PanelProyectosClient'

export default async function PanelProyectosPage() {
  if (!(await isAuthenticated())) redirect('/panel/login')
  return <PanelProyectosClient />
}

