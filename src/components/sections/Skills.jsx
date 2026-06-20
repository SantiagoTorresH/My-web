import { profile } from '../../data/profile'

export function Skills() {
  return (
    <section 
      id="habilidades" 
      className="relative scroll-mt-20 overflow-hidden bg-slate-950 px-6 py-20 md:py-28 text-white"
    >
      {/* Capa de Fondo: Controla la opacidad de la imagen sin afectar el texto */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none md:bg-fixed"
        style={{ backgroundImage: `url('/img/image2.png')` }}
      />
      
      {/* Efecto de destello de luz (Glow) para dar profundidad */}
      <div className="absolute -left-1/4 -top-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Encabezado Limpio y Profesional */}
        <div className="mb-12 border-l-4 border-orange-500 pl-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Habilidades
          </h2>
          <p className="mt-2 text-base text-slate-400">
            Tecnologías y herramientas que domino para dar vida a proyectos robustos.
          </p>
        </div>

        {/* Grid de Tarjetas Modernas */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {profile.skills.map(({ name, level }) => (
            <div
              key={name}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-orange-500/5"
            >
              {/* Sutil línea de brillo en el hover */}
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="flex flex-col justify-between h-full space-y-2">
                <p className="font-semibold text-slate-100 group-hover:text-white transition-colors">
                  {name}
                </p>
                <span className="inline-block self-start rounded-md bg-orange-500/10 px-2.5 py-1 text-xs font-medium text-orange-400 border border-orange-500/10">
                  {level} 
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}