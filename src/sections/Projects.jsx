import SectionHeading from '../components/SectionHeading'
import ProjectShowcase from '../components/ProjectShowcase'
import { projects, profile } from '../data/portfolio'
export default function Projects() {
  return <section id="projects" className="section shell"><SectionHeading number="01" label="Selected work" title={<>Built with intent.<br /><span>Down to the details.</span></>}>A closer look at the work — the problem, the implementation, and the decisions behind it.</SectionHeading>{projects.map(project => <ProjectShowcase key={project.id} project={project} />)}<div className="work-footnote"><p>More code, experiments, and ongoing work.</p><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Explore GitHub <span>↗</span></a></div></section>
}
