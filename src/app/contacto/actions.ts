"use server"

export type ContactActionState = {
  ok?: boolean
  error?: string | null
}

export async function sendMessage(_prevState: ContactActionState, formData: FormData): Promise<ContactActionState> {
  const name = (formData.get('name') || '').toString().trim()
  const email = (formData.get('email') || '').toString().trim()
  const message = (formData.get('message') || '').toString().trim()
  const topic = (formData.get('topic') || '').toString().trim()
  const company = (formData.get('company') || '').toString().trim()
  const honeypot = (formData.get('website') || '').toString().trim()

  if (honeypot) {
    return { ok: true } // silently succeed to trap bots
  }

  if (!name || !email || !message || !topic) {
    return { ok: false, error: 'Completa los campos obligatorios.' }
  }

  // TODO: Integrar con un servicio real (Resend / AWS SES / queue) + rate limiting.
  console.log('CONTACT_MESSAGE', { name, email, message, topic, company })
  await new Promise((r) => setTimeout(r, 600))

  return { ok: true }
}
