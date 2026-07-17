const services = [
  { title: 'Web development', description: 'Web apps, SaaS platforms, e-commerce and custom dashboards.' },
  { title: 'Mobile apps', description: 'iOS, Android and cross-platform apps with high performance.' },
  { title: 'Blockchain', description: 'Decentralized apps, smart contracts and token ecosystems.' },
  { title: 'Data Analytics', description: 'Reporting, BI and insights with modern data pipelines.' },
  { title: 'AI & ML', description: 'Predictive models, NLP and automation powered by AI.' },
  { title: 'Cloud', description: 'Cloud architecture, infrastructure and secure DevOps.' },
]

function Services() {
  return (
    <section id="services" className="min-h-screen py-24">
      <div className="mx-auto flex h-full max-w-6xl flex-col justify-center gap-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Services</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Services de développement pour les entreprises tech.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Une offre complète pour transformer vos idées en produits numériques solides et scalables.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-6 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.8)] transition hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-500/20">
                <span className="text-xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
