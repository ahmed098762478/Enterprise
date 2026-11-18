import novaStock from '../assets/novastock.jpg'
import novaMed from '../assets/novamed.jpg'
import mealDelivery from '../assets/livraison-repas.jpg'

const projects = [
  {
    id: 'stock',
    title: 'NovaStock',
    category: 'Application de gestion de stock',
    description: 'Centraliser le catalogue, enregistrer les entrées et sorties et repérer les produits à réapprovisionner.',
    image: novaStock,
    alt: 'Maquette d’un tableau de bord avec inventaire, mouvements de stock et alertes de réapprovisionnement.',
  },
  {
    id: 'medical',
    title: 'NovaMeD',
    category: 'Application médicale',
    description: 'Gérer les rendez-vous, les dossiers patients et le planning du cabinet depuis un même espace.',
    image: novaMed,
    alt: 'Maquette du planning hebdomadaire d’un cabinet avec des rendez-vous et des dossiers fictifs.',
  },
  {
    id: 'meal-delivery',
    title: 'Plateforme de livraison de repas',
    category: 'Application multi-restaurants',
    description: 'Découvrez les restaurants à proximité, parcourez leurs menus, commandez sur mobile et suivez votre livraison.',
    image: mealDelivery,
    alt: 'Maquette de trois écrans mobiles montrant une liste de restaurants, un menu et le suivi d’une livraison.',
  },
]

function Portfolio() {
  return (
    <section id="portfolio" className="page-section portfolio-section" aria-labelledby="portfolio-title" tabIndex={-1}>
      <div className="section-inner">
        <div className="reveal">
          <div className="reveal-content section-heading split-heading">
            <div>
              <p className="section-label">Portfolio</p>
              <h2 id="portfolio-title">Trois applications métier.</h2>
            </div>
            <p>Maquettes d’interface pour la gestion de stock, les cabinets médicaux et la livraison de repas.</p>
          </div>
        </div>

        <div className="card-grid portfolio-grid">
          {projects.map(({ id, title, category, description, image, alt }) => (
            <article key={id} className="reveal" tabIndex={0} aria-labelledby={`project-title-${id}`}>
              <div className="reveal-content">
                <div className="project-card">
                  <img className="project-image" src={image} alt={alt} width="1120" height="840" loading="lazy" decoding="async" />
                  <div className="project-copy">
                    <p className="project-category">{category}</p>
                    <h3 id={`project-title-${id}`}>{title}</h3>
                    <p>{description}</p>
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

export default Portfolio
