const services = [
  {
    title: 'Web platforms',
    description: 'SaaS products, business dashboards, e-commerce systems, admin portals, and custom workflows.',
    scope: ['Product UX', 'Frontend', 'Backend APIs'],
  },
  {
    title: 'Mobile applications',
    description: 'Customer and internal mobile apps designed around performance, clean journeys, and long-term maintainability.',
    scope: ['iOS and Android', 'Cross-platform', 'API integration'],
  },
  {
    title: 'AI automation',
    description: 'AI assistants, document workflows, data extraction, and operational automation connected to business tools.',
    scope: ['NLP', 'Automation', 'Decision support'],
  },
  {
    title: 'Blockchain systems',
    description: 'Decentralized applications, smart contract concepts, token flows, and secure Web3 interfaces.',
    scope: ['DApps', 'Wallet flows', 'Smart contracts'],
  },
  {
    title: 'Data analytics',
    description: 'Reporting interfaces, KPI dashboards, data pipelines, and insight layers for leadership decisions.',
    scope: ['BI dashboards', 'Data models', 'Reporting'],
  },
  {
    title: 'Cloud architecture',
    description: 'Deployment-ready architecture, infrastructure planning, DevOps foundations, and scalable environments.',
    scope: ['Cloud setup', 'DevOps', 'Security'],
  },
]

const processSteps = [
  { step: '01', title: 'Clarify', text: 'Map the business goal, users, constraints, and success metrics.' },
  { step: '02', title: 'Design', text: 'Shape the product structure, interfaces, data model, and delivery plan.' },
  { step: '03', title: 'Build', text: 'Develop reliable features with clean code, validation, and regular demos.' },
  { step: '04', title: 'Launch', text: 'Prepare handoff, deployment, monitoring habits, and iteration roadmap.' },
]

function Services() {
  return (
    <>
      <section id="services" className="py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">Services</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Business solutions built like products.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-zinc-400 lg:justify-self-end">
              Futurama helps companies move from idea to production with strategy, design, engineering, and scalable technology choices in one focused delivery path.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-300/35 hover:bg-white/[0.055]"
              >
                <div className="absolute right-0 top-0 h-28 w-28 bg-violet-500/10 blur-2xl transition group-hover:bg-violet-400/20" />
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-500/10 text-sm font-bold text-violet-200">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.scope.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-10 pb-24">
        <div className="mx-auto max-w-[1440px] rounded-[2.5rem] border border-white/10 bg-black/35 p-6 shadow-[0_32px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">Process</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                A structured path from business need to launch.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {processSteps.map((item) => (
                <article key={item.step} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm font-semibold text-violet-300">{item.step}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
