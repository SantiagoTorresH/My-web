import { useEffect, useState } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ContactForm } from './components/ContactForm'
import { CursorTracker } from './components/CursorTracker'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
// import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { translations } from './data/profile'

export default function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'es'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  const t = translations[language] || translations.es

  return (
    <div className="flex min-h-screen flex-col bg-brand-deep text-white">
      <Header language={language} setLanguage={setLanguage} t={t} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Skills t={t} />
        {/* <Experience /> */}
        <Projects t={t} />
        <ContactForm t={t} />
      </main>
      <Footer t={t} />
      <CursorTracker />
    </div>
  )
}
