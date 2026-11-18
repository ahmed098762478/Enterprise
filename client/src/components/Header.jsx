import { useEffect, useRef, useState } from 'react'
import lightLogo from '../assets/clairLogo.jpg'
import darkLogo from '../assets/darkLogo.jpg'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#process', label: 'Méthode' },
  { href: '#contact', label: 'Contact' },
]

function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef(null)
  const navigation = useRef(null)
  const dark = theme === 'dark'

  useEffect(() => {
    if (menuOpen) navigation.current.querySelector('a').focus()
  }, [menuOpen])

  function handleKeyDown(event) {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false)
      menuButton.current.focus()
    }
  }

  function followLink(event) {
    setMenuOpen(false)
    if (menuOpen && menuButton.current.getClientRects().length > 0) {
      document.querySelector(event.currentTarget.hash)?.focus({ preventScroll: true })
    }
  }

  return (
    <header className="site-header" onKeyDown={handleKeyDown}>
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="Novary — Accueil" onClick={followLink}>
          <img src={dark ? darkLogo : lightLogo} alt="Novary" width="1600" height="517" />
        </a>
        <nav
          id="site-navigation"
          className="site-nav"
          aria-label="Navigation principale"
          data-open={menuOpen}
          ref={navigation}
        >
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={followLink}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="theme-button"
            onClick={onToggleTheme}
            aria-pressed={dark}
            aria-label="Mode sombre"
          >
            <span className={dark ? 'theme-icon theme-moon' : 'theme-icon theme-sun'} aria-hidden="true" />
            <span>{dark ? 'Sombre' : 'Clair'}</span>
          </button>
          <button
            type="button"
            className="menu-button"
            ref={menuButton}
            aria-controls="site-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'Fermer' : 'Menu'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
