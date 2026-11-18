function ContactBanner() {
  return (
    <section id="contact" className="page-section contact-section" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="section-inner contact-layout">
        <div className="reveal">
          <div className="reveal-content section-heading">
            <p className="section-label">Contact</p>
            <h2 id="contact-title">Parlons de ce que vous voulez créer.</h2>
            <p className="intro-copy">
              Décrivez le problème à résoudre et les besoins de votre équipe. Novary vous aide à cadrer un prototype, une première version ou une plateforme complète.
            </p>
          </div>
        </div>

        <div className="reveal">
          <div className="reveal-content contact-card">
            <dl>
              <div>
                <dt>E-mail</dt>
                <dd><a href="mailto:contact@futurama.tech">contact@Novary.tech</a></dd>
              </div>
              <div>
                <dt>Téléphone</dt>
                <dd><a href="tel:+212623456789">+212 06 23 45 67 89</a></dd>
              </div>
            </dl>
            <a className="button button-primary" href="mailto:contact@futurama.tech?subject=Projet%20avec%20Novary">
              Présenter votre projet <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactBanner
