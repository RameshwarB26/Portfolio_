import { profile } from '../data/portfolio'

export default function HomeHero() {
  return (
    <section id="home" className="hero shell">
      <div className="hero-kicker"><span className="eyebrow">Software Developer</span><span className="location">Nashik, India</span></div>
      <div className="hero-composition">
        <div className="hero-copy">
          <h1>Rameshwar<br /><span>Bhumbar<span className="name-period">.</span></span></h1>
          <p className="hero-description">I build thoughtful digital experiences<br className="desktop-break" /> and reliable applications.</p>
          <div className="hero-actions"><a className="button" href="#projects">Selected work <span aria-hidden="true">↘</span></a><a className="text-link" href={profile.resume}>View resume <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="hero-aside"><div className="hero-mark" aria-hidden="true"><span /><span /><span /><span /><span /></div><p>Interfaces, APIs,<br />and everything<br />in between.</p><span className="aside-caption">WEB & MOBILE DEVELOPMENT</span></div>
      </div>
      <div className="hero-bottom"><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div><a className="scroll-link" href="#projects">A selection of my work <span aria-hidden="true">↓</span></a></div>
    </section>
  )
}
