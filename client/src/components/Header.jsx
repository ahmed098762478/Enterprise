import logo from '../assets/futurama-logo.svg'

function Header({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-40 px-4 py-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-white/10 bg-black/55 px-5 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-7">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10">
            <img src={logo} alt="Futurama logo" className="h-7 w-7" />
          </span>
          <span>
            <span className="block text-sm font-bold uppercase tracking-[0.28em] text-white">Futurama</span>
            <span className="block text-xs text-zinc-400">Digital Product Studio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-300 lg:flex">
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href="#process" className="transition hover:text-white">Process</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-violet-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-950/40 transition hover:bg-violet-400 sm:inline-flex"
          >
            Start a project
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
