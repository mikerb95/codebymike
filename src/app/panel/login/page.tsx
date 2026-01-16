import { redirect } from 'next/navigation'
import { isAuthenticated } from './actions'
import LoginForm from './LoginForm'

export default async function AdminLoginPage() {
  // Server-side redirect
  if (await isAuthenticated()) {
    redirect('/panel/proyectos')
  }

  return (
    <div className="min-h-dvh flex items-center justify-center px-6 py-32">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-[#12161d]/70 backdrop-blur p-8 shadow">
          <div className="mb-6 text-center space-y-2">
            <h1 className="text-xl font-bold tracking-tight">Acceso administrador</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">Introduce la contraseña para gestionar proyectos.</p>
          </div>

          <LoginForm />

          <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
            <p className="text-[10px] leading-relaxed text-slate-500 dark:text-slate-500">
              Ajusta la variable de entorno <span className="font-mono font-semibold">ADMIN_PASSWORD</span> en tu despliegue para cambiar la contraseña.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
