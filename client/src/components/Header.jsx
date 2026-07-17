import logo from '../assets/futurama-logo.svg'

const navItems = ['Pricing', 'Services', 'Explore', 'Support', 'Horizons']

function Header({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <img src={logo} alt="FUTURAMA" className="h-11 w-11 rounded-2xl border border-slate-700/80 bg-slate-900 p-2 shadow-sm shadow-cyan-500/10" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">FUTURAMA</p>
            <p className="text-xs text-slate-400">Tech & innovation</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-full border border-slate-700/80 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-white"
          >
            English
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <a
            href="#contact"
            className="rounded-full border border-cyan-500/70 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
          >
            Log in
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
