import { education } from '../data/portfolio'
export default function Education() {
  return <section id="education" className="section shell education-section"><div><p className="eyebrow">05 / Foundations</p><h2>Education.</h2></div><div>{education.map(([period, degree, institute, score]) => <article className="education-row" key={degree} data-reveal><p className="mono">{period}</p><h3>{degree}</h3><p>{institute}</p><span className="education-score">{score}</span></article>)}</div></section>
}
