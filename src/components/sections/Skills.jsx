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

        {/* Grid de categorías de habilidades */}
        <div className="grid gap-6 lg:grid-cols-2">
          {profile.skills.map((category) => (
            <article
              key={category.category}
              className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/10 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-white">
                {category.category}
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                {category.items.length} tecnologías y herramientas.
              </p>

              <div className="mt-6 space-y-4">
                {category.items.map(({ name, level, proficiency }) => (
                  <div key={name} className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-medium text-slate-100">{name}</p>
                        <span className="text-xs uppercase tracking-[0.22em] text-orange-300/90">
                          {level}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-amber-300">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span
                            key={index}
                            className={
                              index < Math.round(proficiency / 20)
                                ? 'text-amber-300'
                                : 'text-slate-700'
                            }
                          >
                            ★
                          </span>
                        ))}
                        <span className="text-xs text-slate-400">{proficiency}%</span>
                      </div>
                    </div>

                    <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-orange-400 to-amber-300"
                        style={{ width: `${proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}