'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const LOGO_SIZE = 44

interface LogoItem {
  name: string
  url: string
  alt: string
  width?: number
  height?: number
}

const frontend: LogoItem[] = [
  {
    name: 'Next.js',
    url: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png',
    alt: 'Next.js logo'
  },
  {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/_next/static/media/tailwindcss-logotype.dbb2e6a1.svg',
    alt: 'Tailwind CSS logotype'
  },
  {
    name: 'Framer Motion',
    url: 'https://raw.githubusercontent.com/framer/motion/main/.github/assets/logo.png',
    alt: 'Framer Motion logo'
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/icons/icon-48x48.png',
    alt: 'TypeScript logo'
  }
]

const backend: LogoItem[] = [
  { name: 'Node.js', url: 'https://nodejs.org/static/images/logo.svg', alt: 'Node.js logo' },
  { name: 'Express', url: 'https://raw.githubusercontent.com/expressjs/expressjs.com/HEAD/public/images/express-facebook-share.png', alt: 'Express logo' },
  { name: 'Serverless', url: 'https://raw.githubusercontent.com/serverless/artwork/master/framework/illustration-serverless-framework.png', alt: 'Serverless Framework logo' }
]

const infra: LogoItem[] = [
  { name: 'Azure', url: 'https://azure.microsoft.com/svghandler/?width=48&height=48&svg=%2Fmedia%2Fhandler%2Fth%2Fproduct%2Fazure.svg', alt: 'Microsoft Azure logo' },
  { name: 'Vercel', url: 'https://assets.vercel.com/image/upload/front/assets/design/vercel-triangle-black.svg', alt: 'Vercel logo' },
  { name: 'Netlify', url: 'https://www.netlify.com/v3/static/favicon/apple-touch-icon.png', alt: 'Netlify logo' },
  { name: 'DNS', url: 'https://static-00.iconduck.com/assets.00/dns-icon-2048x2048-9q9i3ulr.png', alt: 'DNS icon' }
]

const db: LogoItem[] = [
  { name: 'SQL Server', url: 'https://raw.githubusercontent.com/microsoft/mssql-docker/master/logo/microsoft-sql-server-logo.png', alt: 'Microsoft SQL Server logo' },
  { name: 'PostgreSQL', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', alt: 'PostgreSQL logo' }
]

const security: LogoItem[] = [
  { name: 'SSL', url: 'https://static-00.iconduck.com/assets.00/lock-secure-icon-2048x2048-j0a7xuyq.png', alt: 'Lock SSL icon' },
  { name: 'bcrypt', url: 'https://raw.githubusercontent.com/kelektiv/node.bcrypt.js/master/bcrypt.svg', alt: 'bcrypt logo' }
]

const frameworks: LogoItem[] = [
  { name: 'Astro', url: 'https://raw.githubusercontent.com/withastro/astro/main/.github/assets/astro-logo-dark.png', alt: 'Astro logo' },
  { name: 'Express', url: 'https://raw.githubusercontent.com/expressjs/expressjs.com/HEAD/public/images/express-facebook-share.png', alt: 'Express logo' }
]

const lang: LogoItem[] = [
  { name: 'English Level', url: 'https://static-00.iconduck.com/assets.00/language-icon-256x256-hr6dqnrw.png', alt: 'Language icon' }
]

function LogosRow({ items }: { items: LogoItem[] }) {
  return (
    <ul className="flex flex-wrap gap-4 mt-4">
      {items.map((l) => (
        <li key={l.name} className="flex flex-col items-center text-[11px] font-medium text-slate-600 dark:text-slate-300">
          <div className="h-14 w-14 rounded-lg border border-slate-200/70 dark:border-slate-700/70 bg-white/70 dark:bg-slate-900/40 backdrop-blur flex items-center justify-center p-2 shadow-sm">
            {/* Use intrinsic sizes but constrain box for consistent footprint */}
            <Image
              src={l.url}
              alt={l.alt}
              width={l.width || LOGO_SIZE}
              height={l.height || LOGO_SIZE}
              className="object-contain max-h-10 max-w-10"
            />
          </div>
          <span className="mt-1 text-center leading-tight">{l.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ShowcasePage() {

  return (
    <div className="min-h-dvh pt-28 pb-28 px-6 mx-auto max-w-7xl">
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Showcase & Learning Path</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
          Esta página presenta el ecosistema tecnológico utilizado y el plan de crecimiento continuo: desde
          infraestructura en la nube y despliegues automatizados, hasta seguridad, frameworks y
          progresión lingüística.
        </p>
      </motion.header>

      <section className="mt-16 space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Frontend / UI</h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
            El stack de interfaz combina <strong>Next.js</strong> para renderizado híbrido y segmentación de bundles,
            <strong> Tailwind CSS</strong> para un diseño consistente y rápido, <strong>Framer Motion</strong> que añade
            microinteracciones y transiciones fluidas mejorando la percepción de rendimiento, y
            <strong> TypeScript</strong> para reducir defectos y acelerar la refactorización segura.
          </p>
          <LogosRow items={frontend} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Backend / APIs</h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
            <strong>Node.js</strong> sirve como runtime no bloqueante ideal para IO intensivo; <strong>Express</strong>
            facilitará endpoints REST modulables y middlewares reutilizables; el enfoque <strong>Serverless</strong>
            reduce mantenimiento y escala automáticamente bajo demanda sin gestionar servidores persistentes.
          </p>
          <LogosRow items={backend} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Infraestructura & Cloud</h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
            <strong>Azure</strong> apoya laboratorios de servicios gestionados y despliegues controlados, mientras que
            <strong> Vercel</strong> brinda edge network y pipelines integrados para frontends modernos. <strong>Netlify</strong>
            se evalúa comparativamente en funciones, caching y DX. El manejo de <strong>DNS</strong> y dominio propio
            asegura control sobre enrutamiento, SPNs y políticas de correo.
          </p>
          <LogosRow items={infra} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Bases de Datos</h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
            <strong>SQL Server</strong> se usa para prácticas de modelado relacional, procedimientos y seguridad a
            nivel de fila; <strong>PostgreSQL</strong> se contempla por sus extensiones (JSONB, índices avanzados) y
            equilibrio entre consistencia y flexibilidad. La comparación guía decisiones futuras de persistencia.
          </p>
          <LogosRow items={db} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Seguridad</h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
            Se prioriza <strong>SSL</strong> para cifrado extremo a extremo, endurecimiento de cabeceras, aislamiento de
            permisos y cifrado de credenciales con <strong>bcrypt</strong>. El pipeline incluirá escaneo de dependencias y
            políticas de rotación en variables sensibles con vistas a escalado seguro.
          </p>
          <LogosRow items={security} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Frameworks Adicionales</h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
              <strong>Astro</strong> permite islas interactivas optimizando payload y TTI, ideal para contenido estático
              con componentes hidratables selectivos; <strong>Express</strong> aporta simplicidad para APIs personalizadas
              y middlewares composables donde se necesite control fino de petición/respuesta.
            </p>
          <LogosRow items={frameworks} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Idiomas</h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
            Nivel actual <strong>B1</strong> certificado en inglés, trabajando sistemáticamente para alcanzar
            <strong> B2</strong> este año mediante estudio dirigido, consumo técnico en inglés y práctica conversacional
            enfocada en contextos de ingeniería de software.
          </p>
          <LogosRow items={lang} />
        </motion.div>
      </section>

      <section className="mt-24 grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-gradient-to-br from-white/70 to-white/40 dark:from-[#141a22]/70 dark:to-[#141a22]/30 backdrop-blur-xl p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-3">Estrategia de Aprendizaje</h3>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Enfoque iterativo: construir features reales, medir impacto, reforzar fundamentos (performance,
            accesibilidad, arquitectura) y luego adoptar herramientas avanzadas (edge computing, pipelines
            de integración continua, observabilidad). Azure se integra para laboratorios de despliegue y
            servicios gestionados complementarios.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-gradient-to-br from-white/70 to-white/40 dark:from-[#141a22]/70 dark:to-[#141a22]/30 backdrop-blur-xl p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-3">Roadmap Próximo</h3>
          <ol className="text-sm list-decimal ml-4 space-y-1 text-slate-600 dark:text-slate-300">
            <li>Integrar métricas (Core Web Vitals + logging de rendimiento).</li>
            <li>Azure: crear entorno para API Express y base de datos administrada.</li>
            <li>Automatizar pipeline CI/CD multi proveedor (Vercel / Netlify).</li>
            <li>Implementar autenticación segura + hashing con bcrypt y políticas.</li>
            <li>Configurar monitorización (logging estructurado y alertas básicas).</li>
            <li>Refuerzo idioma: sesiones de práctica + simulación técnica en inglés.</li>
          </ol>
        </motion.div>
      </section>

      <section className="mt-24">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-[#12161d]/60 backdrop-blur-xl p-8 shadow flex flex-col md:flex-row gap-8"
        >
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-3">Seguridad & Buenas Prácticas</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              La aplicación adoptará HTTPS estricto, protección de cabeceras (CSP, HSTS, X-Frame-Options),
              sanitización de entrada, hashing de credenciales con <code className="font-mono">bcrypt</code>,
              rate limiting en endpoints críticos y separación de responsabilidades mediante
              middlewares. En fases posteriores: análisis SAST, dependencia y escaneo de vulnerabilidades.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-3">Comunicación & Email</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Integración prevista con un servidor o servicio de correo transaccional para notificaciones,
              confirmaciones y recuperación de cuentas. Se evaluarán proveedores (Resend, Postmark,
              Azure Communication Services) asegurando DKIM, SPF y DMARC correctos.
            </p>
          </div>
        </motion.div>
      </section>

      <footer className="mt-24 text-center text-xs text-slate-500 dark:text-slate-500">
        Página en evolución — contenido técnico y métricas se irán actualizando.
      </footer>
    </div>
  )
}
