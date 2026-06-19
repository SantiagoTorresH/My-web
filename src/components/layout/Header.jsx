import { useState, useEffect } from 'react'
import { navLinks } from '../../data/profile'

export function Header() {
  // Estado para guardar el href de la sección actual
  const [activeSection, setActiveSection] = useState('#inicio')

  useEffect(() => {
    // 1. Obtenemos todas las secciones del DOM
    const sections = navLinks.map(({ href }) => document.querySelector(href))

    // 2. Configuración del observador
    const observerOptions = {
      root: null, 
      rootMargin: '-30% 0px -55% 0px', 
      threshold: 0,
    }

    // 3. El callback sin tipos de TypeScript (JavaScript puro)
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // 4. Observar cada sección
    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-md bg-[radial-gradient(circle_at_top,_rgba(163,230,53,0.12),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.08),_transparent_30%)]">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-3">
        <a href="#inicio" className="text-lg font-semibold italic text-brand-accent">
          STH
        </a>

        <nav>
          <ul className="flex flex-wrap gap-1 sm:gap-3">
            {navLinks.map(({ href, label }) => {
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
        </nav>
      </div>
    </header>
  )
}