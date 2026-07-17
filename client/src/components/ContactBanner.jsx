const contactPoints = [
  'Product strategy and technical scope',
  'Prototype, MVP, or full platform delivery',
  'Web, mobile, AI, blockchain, and cloud expertise',
]

function ContactBanner() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(124,58,237,0.24),rgba(255,255,255,0.045)_38%,rgba(0,0,0,0.9))] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:p-10 lg:p-12">
          <div className="absolute right-[-12%] top-[-30%] h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[110px]" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-violet-300/45 to-transparent" />

          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-200">Contact</p>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
                Ready to turn a business idea into a real product?
              </h2>
              <p className="max-w-2xl text-base leading-8 text-zinc-300">
                Tell us what you want to build, what problem it solves, and where your team needs technical support. Futurama will help shape the next practical step.
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {contactPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-zinc-300">
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/45 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">Project desk</p>
              <div className="mt-6 space-y-5 text-sm text-zinc-400">
                <p>
                  <span className="block text-xs uppercase tracking-[0.18em] text-zinc-500">Email</span>
                  <a href="mailto:contact@futurama.tech" className="mt-1 block text-base font-semibold text-white">
                    contact@futurama.tech
                  </a>
                </p>
                <p>
                  <span className="block text-xs uppercase tracking-[0.18em] text-zinc-500">Phone</span>
                  <span className="mt-1 block text-base font-semibold text-white">+33 1 23 45 67 89</span>
                </p>
              </div>
              <a
                href="mailto:contact@futurama.tech?subject=Project inquiry for Futurama"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-950/40 transition hover:bg-violet-400"
              >
                Send a project brief
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactBanner
