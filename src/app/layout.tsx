import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import clsx from 'clsx'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'CodeByMike | Senior Software Engineer',
  description: 'Portafolio de desarrollo de software enfocado en arquitectura, rendimiento y experiencia de usuario.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={clsx(inter.variable, playfair.variable)}>
      <body className="bg-white text-slate-900 antialiased dark:bg-[#0b0f14] dark:text-slate-100 flex flex-col min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
