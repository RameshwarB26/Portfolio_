import { expertise } from '../data/portfolio'

export default function Skills() {
  return <section id="skills" className="expertise-section" aria-labelledby="expertise-title"><h3 id="expertise-title" className="eyebrow">Working toolkit</h3><dl className="expertise-list">{expertise.map(([number, title, , skills]) => <div key={number} data-reveal><dt>{title}</dt><dd>{skills.join(' · ')}</dd></div>)}</dl></section>
}
