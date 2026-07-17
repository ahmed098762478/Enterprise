function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100vh-72px)] w-full overflow-hidden bg-black">
      {/* Fond principal */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#050509_0%,#0b0916_45%,#09060f_100%)]" />

      {/* Halo violet central */}
      <div className="absolute left-1/2 top-[42%] h-[620px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/25 blur-[140px]" />

      {/* Lumière basse */}
      <div className="absolute left-1/2 top-[66%] h-48 w-48 -translate-x-1/2 rounded-full bg-violet-400/25 blur-[90px]" />

      {/* Dégradé supérieur */}
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_55%)]" />

      {/* Contenu */}
      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center sm:px-10 lg:px-16">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-zinc-200 backdrop-blur-md sm:text-sm">
          Your idea + FUTURAMA Horizons = realised live
        </div>

        <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-200">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-violet-500/10 text-violet-300 ring-1 ring-violet-400/20">
            ✦
          </span>
          FUTURAMA Horizons
        </div>

        <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
          Bring your idea to life in minutes.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg lg:text-xl">
          Create and launch modern web, mobile, blockchain and AI applications with a powerful tech team at your side.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition hover:bg-violet-400"
          >
            Start your project
          </a>

          <a
            href="#services"
            className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.08]"
          >
            Explore our services
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400 sm:text-sm">
          {[
            'Web applications',
            'Mobile solutions',
            'AI integration',
            'Cloud architecture',
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero