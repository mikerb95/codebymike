'use client'
import { useState, useEffect } from 'react'
import { Download, Linkedin, Github, Mail, MessageCircle } from 'lucide-react'

const PDF_PATH = '/docs/cv.pdf' // Replace with actual uploaded PDF name

export default function CVPage() {
  const [pdfAvailable, setPdfAvailable] = useState(false)
  useEffect(() => {
    fetch(PDF_PATH, { method: 'HEAD' })
      .then((res) => setPdfAvailable(res.ok))
      .catch(() => setPdfAvailable(false))
  }, [])

  return (
    <div className="min-h-dvh pt-28 pb-32 px-6 mx-auto max-w-7xl">
      <header className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Currículum</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl text-sm md:text-base">
          Visualización embebida del CV. Usa las acciones laterales para descargar o contactar.
        </p>
      </header>
      <div className="grid gap-10 lg:grid-cols-12">
        {/* Viewer */}
        <div className="lg:col-span-8">
          <div className="relative rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-[#12161d]/70 backdrop-blur shadow-sm overflow-hidden min-h-[70vh] flex items-center justify-center">
            {pdfAvailable ? (
              <iframe
                title="CV PDF"
                src={`${PDF_PATH}#view=FitH&toolbar=0`}
                className="w-full h-full"
                loading="lazy"
              />
            ) : (
              <div className="p-10 text-center text-sm text-slate-500 dark:text-slate-400">
                Sube tu archivo PDF a <code className="font-mono">public/docs/cv.pdf</code> para mostrarlo aquí.
              </div>
            )}
          </div>
        </div>
        {/* Sidebar actions */}
        <aside className="lg:col-span-4 space-y-6 order-first lg:order-none">
          <div className="rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-[#141a22]/60 backdrop-blur p-6 shadow-sm">
            <h2 className="text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400 mb-4 uppercase">
              Acciones
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href={PDF_PATH}
                  download
                  className="group flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors"
                >
                  <Download size={16} className="text-brand-600 group-hover:scale-110 transition-transform" />
                  Descargar PDF
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors"
                >
                  <Linkedin size={16} className="text-brand-600 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors"
                >
                  <Github size={16} className="text-brand-600 group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@tudominio.com"
                  className="group flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors"
                >
                  <Mail size={16} className="text-brand-600 group-hover:scale-110 transition-transform" />
                  Escríbeme un correo
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/0000000000"
                  className="group flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors"
                >
                  <MessageCircle size={16} className="text-brand-600 group-hover:scale-110 transition-transform" />
                  Escríbeme por WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-dashed border-slate-300/70 dark:border-slate-700/70 p-5 text-xs text-slate-500 dark:text-slate-400">
            Personaliza enlaces y correos en <code className="font-mono">src/app/cv/page.tsx</code>.
          </div>
        </aside>
      </div>
    </div>
  )
}
