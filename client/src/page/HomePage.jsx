import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import ContactBanner from '../components/ContactBanner'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import { Method, Services } from '../components/Services'

function HomePage() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme ?? 'light')
  const mainRef = useRef(null)

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    setTheme(nextTheme)
    try {
      localStorage.setItem('theme', nextTheme)
    } catch {
      // The theme can still be changed for the current visit.
    }
  }

  useLayoutEffect(() => {
    const navigation = performance.getEntriesByType('navigation')[0]
    if (navigation?.type === 'navigate' && window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1))
      target?.scrollIntoView({ behavior: 'instant' })
    }
  }, [])

  useEffect(() => {
    if (typeof window.IntersectionObserver !== 'function') return

    const targets = mainRef.current.querySelectorAll('.reveal')
    const headerHeight = document.querySelector('.site-header').offsetHeight
    const threshold = 0.06
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        entry.target.dataset.reveal = entry.isIntersecting && entry.intersectionRatio >= threshold
          ? 'visible'
          : 'hidden'
      }
    }, { rootMargin: `-${headerHeight + 16}px 0px -24px`, threshold })

    for (const target of targets) observer.observe(target)
    return () => {
      observer.disconnect()
      for (const target of targets) delete target.dataset.reveal
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Aller au contenu</a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <Hero />
        <Services />
        <Portfolio />
        <Method />
        <ContactBanner />
      </main>
    </>
  )
}

export default HomePage
