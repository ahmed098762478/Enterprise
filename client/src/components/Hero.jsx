function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden rounded-[3rem] border border-slate-800/70 bg-slate-950/95 px-6 py-12 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.9)] sm:px-10 lg:px-14">
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(109,40,217,0.2),_transparent_45%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(circle_at_bottom,_rgba(34,211,238,0.16),_transparent_55%)]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-192px)] flex-col items-center justify-center text-center sm:min-h-[calc(100vh-224px)] lg:min-h-[calc(100vh-240px)]">
        <div className="mx-auto inline-flex rounded-full bg-white/5 px-5 py-2 text-sm font-semibold text-slate-200 ring-1 ring-white/10 backdrop-blur">
          Your idea + FUTURAMA Horizons = realised live
        </div>

        <h1 className="mt-10 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Bring your idea to life in minutes.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
          Create and launch modern web, mobile, blockchain and AI applications with a powerful tech team at your side.
        </p>
      </div>
    </section>
  )
}

export default Hero
