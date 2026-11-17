import { certifications, achievements } from '../data/portfolio'
export default function Achievements() {
  return <section id="achievements" className="shell recognition-section" aria-label="Certifications and achievements"><details><summary>Certifications & recognition <span>+</span></summary><div className="recognition-grid"><div><h3>Certifications</h3><ul>{certifications.map(item => <li key={item}>{item}</li>)}</ul></div><div><h3>Beyond the coursework</h3><ul>{achievements.map(item => <li key={item}>{item}</li>)}</ul></div></div></details></section>
}
