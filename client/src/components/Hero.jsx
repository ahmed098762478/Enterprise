function Hero() {
  return (
    <section id="home" className="page-section hero-section" aria-labelledby="home-title" tabIndex={-1}>
      <div className="section-inner hero-layout hero-intro">
        <div className="reveal">
          <div className="reveal-content">
            <p className="section-label">Agence de produits numériques</p>
            <h1 id="home-title">Des applications <em>pour votre métier.</em></h1>
            <p className="intro-copy">
              Novary conçoit des applications web et mobiles et accompagne vos équipes du cadrage au lancement.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#portfolio">Voir le portfolio <span aria-hidden="true">↗</span></a>
              <a className="button button-secondary" href="#contact">Parlons de votre projet</a>
            </div>
          </div>
        </div>

        <div className="reveal hero-visual" aria-hidden="true">
          <div className="reveal-content">
            <div className="hero-art">
              <div className="arc-reactor">
                <span className="reactor-ring reactor-ring-outer" />
                <span className="reactor-ring reactor-ring-inner" />
                <span className="reactor-ring reactor-ring-rays" />
                <span className="reactor-halo" />
                <div className="art-mark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
