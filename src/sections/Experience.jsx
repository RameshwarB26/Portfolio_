import SectionHeading from '../components/SectionHeading'
import { experiences } from '../data/portfolio'
export default function Experience() {
  return <section id="experience" className="section shell"><SectionHeading number="03" label="Experience" title={<>Learning by building.<br /><span>And by improving.</span></>}>Practical experience with backend features, database workflows, and the details of web development.</SectionHeading><div className="experience-list">{experiences.map(item => <article className="experience-row" key={item.role} data-reveal><p className="mono experience-date">{item.period}</p><div><h3>{item.role}</h3><p className="company">{item.company} <span>· {item.location}</span></p><p>{item.description}</p><p className="mono experience-tech">{item.tech}</p></div><span className="experience-arrow" aria-hidden="true">↗</span></article>)}</div></section>
}
