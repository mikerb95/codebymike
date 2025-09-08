export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} CodeByMike. Todos los derechos reservados.
      </div>
    </footer>
  )
}
