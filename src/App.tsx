import { Fragment } from 'react'
import Sky from './Sky'
import { experience, profile, projects, socials, type Link } from './data'

const Star = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
    <path d="M20 4 C21.8 16 23.75 18.2 35 20 C23.75 21.8 21.8 24 20 36 C18.2 24 16.25 21.8 5 20 C16.25 18.2 18.2 16 20 4 Z" />
  </svg>
)

const Sep = () => (
  <div className="sep" aria-hidden="true">
    <Star className="sep-star" />
  </div>
)

const A = ({ label, href }: Link) => {
  const external = /^https?:/.test(href)
  return (
    <a href={href} {...(external && { target: '_blank', rel: 'noreferrer' })}>
      {label}
    </a>
  )
}

export default function App() {
  return (
    <>
      <Sky />
      <main>
        <Star className="logo" />

        <p className="handle">{profile.handle}</p>
        <Sep />
        <p>{profile.role}</p>
        <p>
          building:{' '}
          {projects.map((p, i) => (
            <Fragment key={p.label}>
              {i > 0 && ', '}
              <A {...p} />
            </Fragment>
          ))}
        </p>
        <Sep />

        <ul className="exp">
          {experience.map((e) => (
            <li key={e.when}>
              <span className="when">{e.when}</span>&nbsp; {e.title} @ <A {...e.company} />
            </li>
          ))}
        </ul>

        <Sep />
        <ul>
          {socials.map((s) => (
            <li key={s.link.href}>
              {s.text} <A {...s.link} />
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
