import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ContactForm } from './components/ContactForm'
import { CursorTracker } from './components/CursorTracker'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
// import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-deep text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <ContactForm />
      </main>
      <Footer />
      <CursorTracker />
    </div>
  )
}
