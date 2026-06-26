import { skillIconConfig } from '../data/skillIcons'

export function SkillIcon({ name, className = 'size-6' }) {
  const config = skillIconConfig[name]

  if (!config) {
    return (
      <span
        className={`${className} inline-flex shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-brand-lime`}
        aria-hidden="true"
      >
        {name.charAt(0)}
      </span>
    )
  }

  if (config.type === 'image') {
    return (
      <img
        src={config.src}
        alt=""
        className={`${className} shrink-0 object-contain`}
        loading="lazy"
        decoding="async"
      />
    )
  }

  if (config.type === 'images') {
    return (
      <span className={`${className} inline-flex shrink-0 items-center gap-0.5`}>
        {config.items.map(({ src, alt }) => (
          <img
            key={alt}
            src={src}
            alt=""
            className="size-[85%] object-contain"
            loading="lazy"
            decoding="async"
          />
        ))}
      </span>
    )
  }

  const Icon = config.Icon

  return <Icon className={`${className} shrink-0 ${config.color}`} aria-hidden="true" />
}
