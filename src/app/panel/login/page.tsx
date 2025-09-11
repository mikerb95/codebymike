import { redirect } from 'next/navigation'
import { login, isAuthenticated, type AuthState } from './actions'
import { useFormState, useFormStatus } from 'react-dom'

async function checkAuthAndRedirect() {
  if (await isAuthenticated()) redirect('/panel/proyectos')
}

checkAuthAndRedirect()

function SubmitBtn() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full inline-flex justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow disabled:opacity-60"
    >
      {pending ? 'Accediendo…' : 'Iniciar sesión'}
    </button>
  )
}

export default function AdminLoginPage() {
  const initialState: AuthState = { ok: undefined, error: null }
  const [state, formAction] = useFormState(login, initialState)
  return (
    <div className="min-h-dvh flex items-center justify-center px-6 py-32">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-[#12161d]/70 backdrop-blur p-8 shadow">
          <div className="mb-6 text-center space-y-2">
            <h1 className="text-xl font-bold tracking-tight">Acceso administrador</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">Introduce la contraseña para gestionar proyectos.</p>
          </div>
          <form action={formAction} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wide">Contraseña</label>
              <input
                type="password"
                name="password"
                required
                className="w-full rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm"
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </div>
            <SubmitBtn />
            {state.error && (
              <p className="text-xs font-medium text-red-600 dark:text-red-400">{state.error}</p>
            )}
          </form>
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
