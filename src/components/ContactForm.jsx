import { useState } from 'react'
import { profile } from '../data/profile'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

export function ContactForm() {
  const [formData, setFormData] = useState(initialForm)
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { name, email, message } = formData

    if (!name || !email || !message) return

    const subject = `Contacto desde portfolio - ${name}`
    const body = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section 
      id="contacto" 
      className="relative scroll-mt-20 overflow-hidden bg-slate-950 px-6 py-20 md:py-28 text-white"
    >
      {/* Capa de Fondo Fijo Parallax bien difuminada (opacity-5) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 pointer-events-none md:bg-fixed"
        style={{ backgroundImage: `url('/img/image1.png')` }}
      />
      
      {/* Destello de luz ambiental en el fondo */}
      <div className="absolute -right-1/4 -top-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-xl">
        {/* Encabezado Profesional */}
        <div className="mb-10 border-l-4 border-orange-500 pl-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Contacto
          </h2>
          <p className="mt-2 text-base text-slate-400">
            ¿Interesado en trabajar juntos? Escríbeme a{' '}
            <a href={`mailto:${profile.email}`} className="text-brand-lime font-medium hover:underline transition-all">
              {profile.email}
            </a>{' '}
            o conecta en{' '}
            <a href={profile.social[0]?.href} target="_blank" rel="noopener noreferrer" className="text-brand-lime font-medium hover:underline transition-all">
              LinkedIn
            </a>.
          </p>
        </div>

        {sent ? (
          /* Estado Enviado Estilizado */
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-6 backdrop-blur-sm text-slate-300">
            <p className="mb-3 font-semibold text-emerald-400 text-lg">¡Tu cliente de correo debería abrirse ahora!</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Si no es así, puedes copiar mi dirección y escribirme directamente a:{' '}
              <a href={`mailto:${profile.email}`} className="font-medium text-white underline hover:text-orange-400 transition-colors">
                {profile.email}
              </a>
            </p>
          </div>
        ) : (
          /* Formulario con Estilo Premium */
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Escribe tu nombre"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-orange-500/50 focus:bg-slate-900/80 focus:ring-1 focus:ring-orange-500/20"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Escribe tu correo electrónico"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-orange-500/50 focus:bg-slate-900/80 focus:ring-1 focus:ring-orange-500/20"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje..."
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-orange-500/50 focus:bg-slate-900/80 focus:ring-1 focus:ring-orange-500/20"
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-orange-500/20 active:scale-[0.98]"
            >
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  )
}