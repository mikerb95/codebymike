'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { login, type AuthState } from './actions'

function SubmitBtn() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full inline-flex justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow disabled:opacity-60 transition hover:from-brand-600 hover:to-brand-700"
        >
            {pending ? 'Accediendo…' : 'Iniciar sesión'}
        </button>
    )
}

export default function LoginForm() {
    const initialState: AuthState = { ok: undefined, error: null }
    const [state, formAction] = useFormState(login, initialState)

    return (
        <form action={formAction} className="space-y-5">
            <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wide">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    required
                    className="w-full rounded-lg border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500/50 outline-none transition"
                    placeholder="••••••••"
                    autoComplete="current-password"
                />
            </div>
            <SubmitBtn />
            {state.error && (
                <p className="text-xs font-medium text-red-600 dark:text-red-400 animate-pulse">{state.error}</p>
            )}
        </form>
    )
}
