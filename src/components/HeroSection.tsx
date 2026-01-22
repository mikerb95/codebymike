'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-100/20 via-white to-white dark:from-brand-900/20 dark:via-[#0b0f14] dark:to-[#0b0f14]" />

            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-3 py-1 text-sm text-slate-600 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Disponible para nuevos proyectos
                    </div>

                    <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl dark:text-white font-serif">
                        Ingeniería de software con <span className="text-brand-600 dark:text-brand-400">propósito</span>.
                    </h1>

                    <p className="mt-6 text-xl leading-relaxed text-slate-600 md:text-2xl dark:text-slate-300 max-w-2xl">
                        Ayudo a empresas a escalar sus productos digitales mediante arquitectura robusta, rendimiento obsesivo y experiencia de usuario de clase mundial.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/proyectos"
                            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-base font-medium text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                        >
                            Ver Case Studies <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-800 dark:bg-transparent dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                            Hablemos
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
