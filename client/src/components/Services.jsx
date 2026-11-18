const services = [
  {
    title: 'Plateformes web',
    description: 'Produits SaaS, tableaux de bord, boutiques en ligne et portails d’administration.',
    scope: ['Design produit', 'Frontend', 'API'],
  },
  {
    title: 'Applications mobiles',
    description: 'Applications pour vos clients et vos équipes, conçues pour durer.',
    scope: ['iOS', 'Android', 'Multiplateforme'],
  },
  {
    title: 'Automatisation et IA',
    description: 'Assistants, traitement de documents et automatisation connectés à vos outils métier.',
    scope: ['Assistants', 'Extraction de données'],
  },
  {
    title: 'Applications métier, ERP et CRM',
    description: 'Des outils pour gérer vos opérations, suivre vos ventes et centraliser la relation client.',
    scope: ['ERP', 'CRM', 'Intégration'],
  },
  {
    title: 'Analyse de données',
    description: 'Indicateurs, rapports et tableaux de bord pour suivre votre activité et éclairer vos décisions.',
    scope: ['Tableaux de bord', 'Reporting'],
  },
  {
    title: 'Architecture cloud',
    description: 'Infrastructure, déploiement et organisation des environnements pour accompagner votre croissance.',
    scope: ['Cloud', 'DevOps', 'Sécurité'],
  },
]

const processSteps = [
  { title: 'Cadrer', description: 'Définir le besoin, les utilisateurs, les contraintes et les critères de réussite.' },
  { title: 'Concevoir', description: 'Dessiner les parcours, structurer les données et établir le plan de réalisation.' },
  { title: 'Développer', description: 'Construire les fonctionnalités, les tester et vous les présenter au fil des itérations.' },
  { title: 'Lancer', description: 'Préparer le déploiement, la prise en main et le suivi après le lancement.' },
]

export function Services() {
  return (
    <section id="services" className="page-section services-section" aria-labelledby="services-title" tabIndex={-1}>
      <div className="section-inner">
        <div className="reveal">
          <div className="reveal-content section-heading split-heading">
            <div>
              <p className="section-label">Services</p>
              <h2 id="services-title">Du besoin métier au produit.</h2>
            </div>
            <p>Stratégie, design et ingénierie réunis pour concevoir les outils dont vos équipes ont besoin.</p>
          </div>
        </div>

        <div className="card-grid service-grid">
          {services.map(({ title, description, scope }, index) => (
            <article key={title} className="reveal" tabIndex={0} aria-labelledby={`service-title-${index}`}>
              <div className="reveal-content">
                <div className="service-card">
                  <div className="service-face service-front">
                    <h3 id={`service-title-${index}`}>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <div className="service-face service-back">
                    <p className="service-back-title" aria-hidden="true">{title}</p>
                    <ul className="tag-list" aria-label="Expertises">
                      {scope.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Method() {
  return (
    <section id="process" className="page-section method-section" aria-labelledby="process-title" tabIndex={-1}>
      <div className="section-inner method-layout">
        <div className="reveal">
          <div className="reveal-content section-heading">
            <p className="section-label">Méthode</p>
            <h2 id="process-title">Quatre étapes, de l’idée au lancement.</h2>
          </div>
        </div>
        <ol className="step-list">
          {processSteps.map(({ title, description }, index) => (
            <li key={title} className="reveal">
              <div className="reveal-content step">
                <span className="step-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
