import '../styles/portfolio-sections.css'
import { education } from '../data/portfolio'

export default function Education() {
  return <section id="education" className="shell academic-section" aria-labelledby="academic-title"><header className="academic-heading"><p className="eyebrow">Academic background</p><h2 id="academic-title">The<br /><em>foundation.</em></h2><span className="academic-signature" aria-hidden="true"><i /><i /><i /></span></header><div className="academic-records">{education.map(([period, degree, institute, score]) => {
    const [start, end] = period.split(' — ')
    return <article className="academic-record" key={degree} data-reveal><div className="academic-year"><span>{end || start}</span><small>{period}</small></div><div className="academic-detail"><h3>{degree}</h3><p>{institute}</p><span className="academic-score">{score}</span></div></article>
  })}</div></section>
}

