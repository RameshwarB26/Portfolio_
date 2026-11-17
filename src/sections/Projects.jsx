import '../styles/portfolio-sections.css'
import ProjectShowcase from '../components/ProjectShowcase'
import { projects, profile } from '../data/portfolio'

export default function Projects() {
  return <section id="projects" className="section shell work-section">
    <header className="work-editorial-heading" data-reveal><p className="eyebrow">01 / Selected work</p><div><h2>From an idea<br />to <em>the details.</em></h2><p>A look at what I’ve built, and how it comes together.</p></div></header>
    <div className="projects-list">{projects.map((project, index) => <ProjectShowcase key={project.id} project={project} index={index} />)}</div>
    <div className="work-footnote"><p>More projects and experiments on GitHub.</p><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Explore the code <span aria-hidden="true">↗</span></a></div>
  </section>
}

