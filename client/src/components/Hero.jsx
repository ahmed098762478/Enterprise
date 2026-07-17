const capabilities = ['Web platforms', 'Mobile apps', 'AI workflows', 'Cloud systems']

function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[calc(100vh-96px)] w-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(139,92,246,0.38),rgba(64,25,110,0.2)_30%,transparent_56%),linear-gradient(90deg,#000000_0%,#090510_18%,#12091f_50%,#090510_82%,#000000_100%)]" />
      <div className="absolute left-1/2 top-[28%] h-[620px] w-[920px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />
      <div className="absolute inset-y-0 left-0 w-[18vw] bg-gradient-to-r from-black via-black/90 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-[18vw] bg-gradient-to-l from-black via-black/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-black/80 to-black" />

      <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-5xl flex-col items-center justify-center px-6 pb-36 pt-24 text-center sm:px-8 lg:px-10">
        <p className="inline-flex rounded-full border border-violet-300/25 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">
          Business Technology Studio
        </p>

        <h1 className="mt-7 text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-violet-100 sm:text-6xl lg:text-7xl xl:text-8xl">
          Build serious digital products faster.
        </h1>

        <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
          Futurama designs and ships web, mobile, AI, blockchain, and cloud solutions for teams that need reliable execution, clean interfaces, and systems that scale.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-950/40 transition hover:bg-violet-400"
          >
            Start your project
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-violet-200/20 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-violet-100 transition hover:border-violet-200/40 hover:bg-white/[0.08]"
          >
            View services
          </a>
        </div>

      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-violet-200/10 bg-black/80 px-6 py-5 backdrop-blur-xl sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
          {capabilities.map((item) => (
            <span key={item} className="rounded-full border border-violet-200/15 bg-violet-500/[0.06] px-4 py-2 text-sm text-violet-100/85">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
