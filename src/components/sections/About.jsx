import { profile } from '../../data/profile'

export function About() {
  return (
    <section 
      id="sobre-mi" 
      className="relative scroll-mt-20 overflow-hidden bg-slate-950 px-6 py-20 md:py-28 text-white"
    >
      {/* Detalle de luz sutil en la esquina contraria a habilidades para equilibrar */}
      <div className="absolute -right-1/4 -bottom-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Encabezado Coherente */}
        <div className="mb-10 border-l-4 border-orange-500 pl-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Sobre mí
          </h2>
        </div>

        {/* Contenido con excelente legibilidad */}
        <div className="space-y-6 text-base md:text-lg text-slate-300 leading-relaxed font-normal">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="hover:text-slate-200 transition-colors">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Ubicación en formato de Tag estilizado */}
        <div className="mt-8 inline-flex items-center space-x-2 rounded-full bg-slate-900 border border-white/10 px-4 py-1.5 text-sm text-slate-400 shadow-sm">
          <span className="text-base">📍</span>
          <span className="font-medium text-slate-300">{profile.location} - remoto</span>
        </div>
      </div>
    </section>
  )
}