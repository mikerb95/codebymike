"use server"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export interface AuthState {
  ok?: boolean
  error?: string | null
}

const COOKIE_NAME = 'admin_auth'

export async function login(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const password = formData.get('password')?.toString() || ''
  const expected = process.env.ADMIN_PASSWORD || 'admin123'
  if (!password) return { ok: false, error: 'Contraseña requerida' }
  if (password !== expected) return { ok: false, error: 'Credenciales inválidas' }
  cookies().set(COOKIE_NAME, '1', { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 8 })
  redirect('/panel/proyectos')
}

export async function logout(): Promise<void> {
  cookies().delete(COOKIE_NAME)
  redirect('/panel/login')
}

export async function isAuthenticated(): Promise<boolean> {
  return cookies().get(COOKIE_NAME)?.value === '1'
}
