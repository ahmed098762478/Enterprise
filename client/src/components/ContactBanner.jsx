function ContactBanner() {
  return (
    <section id="contact" className="min-h-screen py-24">
      <div className="mx-auto flex h-full max-w-6xl flex-col justify-center gap-10">
        <div className="rounded-[2.5rem] border border-slate-800/90 bg-slate-950/95 p-8 shadow-[0_40px_100px_-60px_rgba(15,23,42,0.9)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Prêt à construire votre prochaine application ?</h2>
              <p className="max-w-xl text-base leading-7 text-slate-400">
                Parlons de votre projet web, mobile, blockchain ou IA et voyons comment FUTURAMA peut accélérer votre croissance.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6 shadow-xl shadow-slate-950/20">
              <div className="space-y-4 text-sm text-slate-400">
                <p>
                  <span className="font-semibold text-slate-100">Email :</span> contact@futurama.tech
                </p>
                <p>
                  <span className="font-semibold text-slate-100">Téléphone :</span> +33 1 23 45 67 89
                </p>
              </div>
              <a
                href="mailto:contact@futurama.tech"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Envoyer un message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactBanner
