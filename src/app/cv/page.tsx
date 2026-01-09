'use client'
import { useState, useEffect } from 'react'
import { Download, Linkedin, Github, Mail, MessageCircle } from 'lucide-react'

const PDF_PATH = '/docs/cv.pdf' // Replace with actual uploaded PDF name
const RUT_PATH = '/docs/RUT_MR.pdf' // Second document to display in the second viewer

export default function CVPage() {
  const [pdfAvailable, setPdfAvailable] = useState(false)
  const [rutAvailable, setRutAvailable] = useState(false)
  useEffect(() => {
    fetch(PDF_PATH, { method: 'HEAD' })
      .then((res) => setPdfAvailable(res.ok))
      .catch(() => setPdfAvailable(false))
    fetch(RUT_PATH, { method: 'HEAD' })
      .then((res) => setRutAvailable(res.ok))
      .catch(() => setRutAvailable(false))
  }, [])

  return (
    <div className="min-h-dvh pt-28 pb-32 px-6 mx-auto max-w-7xl">
      <header className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Currículum</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl text-sm md:text-base"> 
          Descarga este archivo o contactame a través de los links a mis redes, whatsapp o correo. // Feliz 31, vamos por más, no ha sido lo mejor, pero hemos resistido y aprendido un montón, hemos conocido amigos, lugares, y hasta sensasiones nuevas. Se que va a ser, tal vez, el mejor año de mi vida, Dios quiera. Soy agradecido por tener conmigo a mi tita, que salio ayer de una cirugia, a mi mamá, a mi pareja, mi hermana, morita, mis tios, primos, amigos, y a todos los que me ham acompañado en las buenas y malas. A mi tia pi y mi tio lucho, infinitas gracias por creer en mi, por su apoyo y compañia, a mi tia caro, gracias por tu hermosa compañia, tu lealtad, tu hermosa sonrisa que siempre lo recibe a uno entre los brazos, eres un ser de lo mas especial e  mi vida, a mi tio faiver, gracias por ser el padre que no tuve, por eseñarme a conducir un auto, por entrenarme en el gym cuando era un niño, te amo tio, enserio, hgracias por la persona tan noble que eres, por aceptar en tu hogar a mi tita y a mi tito. GRacias a mis tios por ser esa compañia ideal, por el ejemplo de familia.
          Y como no, lo mejor, mi pieza fundamental, gracias madre, porque juntos hemos vivido cosas, que nadie entenderia, gracias por lavar mi ropa cuando llegabas de la universidad a media noche, por siempre alimentarme de la mejor manera, por darme un techo en el mejor lugar que podias, por entregar todo de ti porque los dos salieramos adelante. Hoy te digo con toda seguridad, que nada de esto ha sido en vano, por ti hare cosas que jamas pense que lograria, y te brindare la seguridad que siempre he anhelado. Te amo madre, te amo muchisimo mi gordis. 
          Me voy a sentir mal porque se que me faltara mucho por agradecer aca, pero....
          A ti mi Sophie, gracias por llegar a mi vida, me cambiaste por completo la perspectiva de la vida. Nunca imagine lo que seria tener una hermana tan linda como tu, que su dia a dia me llegara a a ser tan ejemplar desde tan pequeña. Agradezco a Dios por las oporunidades que te ha brindado, porque con ellas, me has dejado ver como es una persona integra, que aprovecha su intelecto para salir adelante y liderar. Hoy ocn tan solo 15 años, eres mi ejemplo de vida. Gracias por nacer, gracias por ser juiciosa cada dia en lo que haces, me llenas de orgullo, de todo corazón.
          Mis viejos, mis titos, como los extraño. Solo quisiera muchas veces en la vida encontrarmelos. Que rico seria que estuvieran conmigo, ir a donde mi tito Leo a que me corte el cabello, a esuchar su guitarra, o simplemente a ir contigo en un bus, de camino a casa, aprendiendo de tus valores, de tu educacion. A mi tito Orlando, mi viejo, mi amigo, enserio nadie sabe como te extraño tito, aun me cuesta no recordarte y llorar. Gracias por acompañarme, gracias por brindarme seguridad. Te amo mi viejo lindo, te extraño mucho, como quisiera verte en mi dia a dia, salir contigo a caminar, a hablar.... Gracias por todo el tiempo que estuviste conmigo mi viejo.
            </p>
      </header>
      <div className="grid gap-10 lg:grid-cols-12">
        {/* Viewer (two documents) */}
        <div className="lg:col-span-8">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="relative rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-[#12161d]/70 backdrop-blur shadow-sm overflow-hidden h-[calc(100vh-320px)] min-h-[50vh]">
              <div className="p-3 border-b border-slate-100 dark:border-slate-800 text-sm font-medium text-slate-700 dark:text-slate-200">CV PDF</div>
              {pdfAvailable ? (
                <iframe
                  title="CV PDF"
                  src={`${PDF_PATH}#toolbar=0&navpanes=0&scrollbar=1&zoom=page-fit`}
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-slate-500 dark:text-slate-400">
                  Sube tu archivo PDF a <code className="font-mono">public/docs/cv.pdf</code> para mostrarlo aquí.
                </div>
              )}
            </div>
            <div className="relative rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-[#12161d]/70 backdrop-blur shadow-sm overflow-hidden h-[calc(100vh-320px)] min-h-[50vh]">
              <div className="p-3 border-b border-slate-100 dark:border-slate-800 text-sm font-medium text-slate-700 dark:text-slate-200">RUT_MR</div>
              {rutAvailable ? (
                <iframe
                  title="RUT MR"
                  src={`${RUT_PATH}#toolbar=0&navpanes=0&scrollbar=1&zoom=page-fit`}
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-slate-500 dark:text-slate-400">
                  Sube tu archivo PDF a <code className="font-mono">public/docs/RUT_MR.pdf</code> para mostrarlo aquí.
                </div>
              )}
            </div>
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
                  href={RUT_PATH}
                  download
                  className="group flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors"
                >
                  <Download size={16} className="text-brand-600 group-hover:scale-110 transition-transform" />
                  Descargar RUT_MR
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mdrb95/" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors"
                >
                  <Linkedin size={16} className="text-brand-600 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mikerb95" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors"
                >
                  <Github size={16} className="text-brand-600 group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:mdrb95@gmail.com"
                  className="group flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors"
                >
                  <Mail size={16} className="text-brand-600 group-hover:scale-110 transition-transform" />
                  Escríbeme un correo
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/573104641228"
                  className="group flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors"
                >
                  <MessageCircle size={16} className="text-brand-600 group-hover:scale-110 transition-transform" />
                  Escríbeme por WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-dashed border-slate-300/70 dark:border-slate-700/70 p-5 text-xs text-slate-500 dark:text-slate-400">
            Atenderé tus mensajes lo más pronto posible, entre las 08:00 y las 18:00 COT.
          </div>
        </aside>
      </div>
    </div>
  )
}
