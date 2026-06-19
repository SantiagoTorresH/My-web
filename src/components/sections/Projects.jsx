import { profile } from '../../data/profile'

export function Projects() {
  return (
    <section 
      id="proyectos" 
      className="relative scroll-mt-20 overflow-hidden bg-slate-950 px-6 py-20 md:py-28"
    >
      {/* Capa de Fondo Parallax: Imagen bien difuminada (opacity-5) y fija */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 pointer-events-none md:bg-fixed"
        style={{ backgroundImage: `url('/img/image3.png')` }}
      />

      {/* Gradiente radial de luz sutil en la esquina inferior derecha */}
      <div className="absolute -right-1/4 -bottom-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Encabezado Coherente y Limpio */}
        <div className="mb-12 border-l-4 border-orange-500 pl-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Proyectos
          </h2>
          <p className="mt-2 text-base text-slate-400">
            Trabajo reciente y proyectos personales.
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map(({ title, description, tech, href, gradient, img }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/30 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-orange-500/5"
            >
              {/* Contenedor de la Imagen / Gradiente */}
              <div className="relative h-48 overflow-hidden border-b border-white/5">
                {img ? (
                  <img
                    src={img}
                    alt={title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className={`h-full w-full bg-gradient-to-br ${gradient} opacity-40 transition duration-500 group-hover:opacity-60 group-hover:scale-105`} />
                )}
                {/* Capa oscura superior para dar un look de cine en el hover */}
                <div className="absolute inset-0 bg-slate-950/20 transition duration-300 group-hover:bg-transparent" />
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-bold text-slate-100 group-hover:text-orange-400 transition-colors duration-200">
                  {title}
                </h3>
                <p className="mb-5 flex-1 text-sm text-slate-400 leading-relaxed">
                  {description}
                </p>

                {/* Badges de Tecnologías (Tags) */}
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/5 border border-white/5 px-2.5 py-0.5 text-xs font-medium text-brand-lime group-hover:border-brand-lime/20 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}