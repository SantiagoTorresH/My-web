import { useEffect, useState } from 'react'
import { ColombiaFlag, UsaFlag } from '../icons/FlagIcons'

export function Header({ language, setLanguage, t }) {
  const [activeSection, setActiveSection] = useState('#inicio')

  useEffect(() => {
    const sections = t.navLinks.map(({ href }) => document.querySelector(href))

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -55% 0px',
      threshold: 0,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [t.navLinks])

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-md bg-[radial-gradient(circle_at_top,_rgba(163,230,53,0.12),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.08),_transparent_30%)]">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-3">
        <a href="#inicio" className="text-lg font-semibold italic text-brand-accent">
          STH
        </a>

        <nav className="flex items-center gap-4">
          <ul className="flex flex-wrap gap-1 sm:gap-3">
            {t.navLinks.map(({ href, label }) => {
              const isActive = activeSection === href

              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`rounded-md px-2 py-1 text-sm transition sm:px-3 duration-200 ${
                      isActive
                        ? 'bg-white/10 text-white font-medium shadow-sm border border-white/5'
                        : 'text-brand-lime hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div
            className="flex items-center gap-1 rounded-full border border-white/10 bg-slate-900/70 p-1"
            role="group"
            aria-label={t.header.languageLabel}
          >
            <button
              type="button"
              className={`rounded-full p-1.5 transition ${
                language === 'es'
                  ? 'bg-white/10 ring-1 ring-white/20'
                  : 'opacity-60 hover:bg-white/10 hover:opacity-100'
              }`}
              aria-label="Español"
              aria-pressed={language === 'es'}
              onClick={() => setLanguage('es')}
            >
              <ColombiaFlag className="h-4 w-6 rounded-sm shadow-sm" />
            </button>
            <button
              type="button"
              className={`rounded-full p-1.5 transition ${
                language === 'en'
                  ? 'bg-white/10 ring-1 ring-white/20'
                  : 'opacity-60 hover:bg-white/10 hover:opacity-100'
              }`}
              aria-label="English"
              aria-pressed={language === 'en'}
              onClick={() => setLanguage('en')}
            >
              <UsaFlag className="h-4 w-6 rounded-sm shadow-sm" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
