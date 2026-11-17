import '../styles/portfolio-sections.css'
import { useEffect, useRef, useState } from 'react'
import { experiences } from '../data/portfolio'

function useDesktopJourney() {
  const [desktop, setDesktop] = useState(() => typeof window !== 'undefined' && window.matchMedia('(min-width: 761px)').matches)
  useEffect(() => {
    const query = window.matchMedia('(min-width: 761px)')
    const update = () => setDesktop(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])
  return desktop
}

export default function Experience() {
  const [active, setActive] = useState(0)
  const desktop = useDesktopJourney()
  const tabs = useRef([])

  function navigate(event, index) {
    let next
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % experiences.length
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + experiences.length) % experiences.length
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = experiences.length - 1
    if (next !== undefined) {
      event.preventDefault()
      setActive(next)
      tabs.current[next]?.focus()
    }
  }

  return <section id="experience" className="section shell experience-section" aria-labelledby="journey-title">
    <header className="journey-heading" data-reveal><p className="eyebrow">03 / Work experience</p><h2 id="journey-title">Different teams.<br /><em>Practical experience.</em></h2></header>
    <div className="career-journey" data-reveal>
      {desktop && <div className="career-index" role="tablist" aria-label="Choose work experience" aria-orientation="vertical">{experiences.map((item, index) => <button key={`${item.company}-${item.role}`} ref={element => { tabs.current[index] = element }} id={`career-tab-${index}`} role="tab" type="button" aria-selected={active === index} aria-controls={`career-panel-${index}`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => navigate(event, index)}><span className="career-tab-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><span className="career-tab-copy"><strong>{item.company}</strong><span>{item.role}</span><small>{item.period}</small></span><span className="career-tab-arrow" aria-hidden="true">↗</span></button>)}</div>}
      <div className="career-panels">{experiences.map((item, index) => <article key={`${item.company}-${item.role}`} id={`career-panel-${index}`} className={`career-panel ${active === index ? 'is-selected' : ''}`} role={desktop ? 'tabpanel' : undefined} aria-labelledby={desktop ? `career-tab-${index}` : `career-heading-${index}`} aria-hidden={desktop && active !== index ? true : undefined} tabIndex={desktop && active === index ? 0 : undefined}>
        <div className="career-panel-top"><span className="eyebrow">{item.location}</span><span className="career-panel-count" aria-hidden="true">{String(index + 1).padStart(2, '0')} / {String(experiences.length).padStart(2, '0')}</span></div>
        <h3 id={`career-heading-${index}`}>{item.company}</h3><p className="career-panel-role">{item.role}</p><p className="career-panel-period">{item.period}</p><div className="career-contribution"><span className="eyebrow">Contribution</span><p>{item.description}</p></div><div className="career-tools"><span className="eyebrow">Technologies</span><p>{item.tech}</p></div>
      </article>)}</div>
    </div>
  </section>
}

