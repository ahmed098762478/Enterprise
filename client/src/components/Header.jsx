import logo from '../assets/futurama-logo.svg'

const navItems = ['Pricing', 'Services', 'Explore', 'Support', 'Horizons']

function Header({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-black/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="FUTURAMA"
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
              FUTURAMA
            </p>
            <p className="text-[11px] text-zinc-500">
              Tech & innovation
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-7 text-xs font-medium text-zinc-300 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors duration-200 hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-md border border-white/10 bg-zinc-950 px-3 py-2 text-xs text-zinc-200 transition hover:border-white/25 hover:bg-zinc-900"
          >
            English
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-md border border-white/10 bg-zinc-950 px-3 py-2 text-xs font-medium text-zinc-200 transition hover:border-violet-400/40 hover:bg-zinc-900"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>

          <a
            href="#contact"
            className="rounded-md border border-white/30 bg-black px-4 py-2 text-xs font-semibold text-white transition hover:border-white hover:bg-zinc-900"
          >
            Log in
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header