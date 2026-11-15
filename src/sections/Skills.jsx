import SectionHeading from '../components/SectionHeading'
import { expertise } from '../data/portfolio'
export default function Skills() {
  return <section id="skills" className="section skills-section"><div className="shell"><SectionHeading number="04" label="Technical toolkit" title={<>Different layers.<br /><span>One connected workflow.</span></>}>The technologies I work with, organized by what they help me build.</SectionHeading><div className="expertise-grid">{expertise.map(([n, title, description, skills]) => <article key={n} data-reveal><span className="mono expertise-number">/{n}</span><h3>{title}</h3><p>{description}</p><ul className="tags">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div></div></section>
}
