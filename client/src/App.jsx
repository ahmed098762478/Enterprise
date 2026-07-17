import { useEffect, useState } from 'react'
import ContactBanner from './components/ContactBanner'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved)
      document.documentElement.classList.toggle('dark', saved === 'dark')
      return
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', prefersDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <Header theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        <Hero />
        <Services />
        <ContactBanner />
      </main>
    </div>
  )
}

export default App
