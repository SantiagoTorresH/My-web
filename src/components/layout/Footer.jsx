import { profile } from '../../data/profile'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'

const socialIcons = {
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  Email: MdEmail,
}

export function Footer({ t }) {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(163,230,53,0.12),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.08),_transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.9fr_1fr]">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-brand-lime/20 bg-brand-lime/10 px-3 py-1 text-xs font-medium tracking-[0.24em] text-brand-lime uppercase">
              {t.footer.portfolio}
            </p>
            <h2 className="mb-4 max-w-md text-3xl font-semibold leading-tight sm:text-4xl">
              {t.footer.thanks}
            </h2>
            <p className="max-w-xl text-sm leading-6 text-white/65 sm:text-base">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              {t.footer.quickNav}
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {t.navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75 transition hover:border-brand-lime/30 hover:bg-white/10 hover:text-white"
                  >
                    <span>{label}</span>
                    <span className="text-brand-lime transition group-hover:translate-x-0.5 group-hover:text-brand-accent">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              {t.footer.contact}
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75 transition hover:border-brand-lime/30 hover:bg-white/10 hover:text-white"
              >
                <MdEmail className="size-5 text-brand-lime" />
                <span>{profile.email}</span>
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
                <MdLocationOn className="size-5 text-brand-lime" />
                <span>{profile.location}</span>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                {profile.social.map(({ label, href }) => {
                  const Icon = socialIcons[label] || MdEmail

                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:border-brand-lime/40 hover:bg-brand-lime/10 hover:text-white"
                    >
                      <Icon className="size-4 text-brand-lime" />
                      <span>{label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {profile.name.trim()}. {t.footer.rights}
          </p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  )
}
