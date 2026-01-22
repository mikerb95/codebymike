import { Terminal } from 'lucide-react'

export default function ExpertiseSection() {
    return (
        <section className="py-24 border-t border-slate-100 dark:border-slate-800/50">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Expertise Técnico & Filosofía
                </h2>
                <div className="mt-12 grid gap-12 md:grid-cols-3">
                    <div className="space-y-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-900/20 dark:text-brand-400">
                            <Terminal size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Arquitectura Escalable</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Diseño sistemas distribuidos y modulares pensados para crecer. Monorepos, microservicios (cuando tienen sentido) y patrones de diseño sólidos.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Performance First</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            La velocidad es una feature. Optimizo Core Web Vitals, tiempos de respuesta de API y eficiencia en bases de datos.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Calidad de Código</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Testing riguroso (Unit, E2E), tipado estático estricto y documentación clara. Código mantenible es código rentable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
