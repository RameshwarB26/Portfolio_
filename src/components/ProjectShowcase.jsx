import ProjectMedia from './ProjectMedia'

export default function ProjectShowcase({ project, index = 0 }) {
  const titleId = `study-${project.id}`
  const notes = [['The problem', project.problem], ['My contribution', project.contribution], ['Engineering decisions', project.decision], ['Architecture', project.architecture]].filter(([, text]) => text)

  return <article className={`project-study project-study--${project.presentation || 'browser'} ${index % 2 ? 'project-study--alternate' : ''}`} aria-labelledby={titleId} data-reveal>
    <div className="study-margin"><span className="study-number" aria-hidden="true">{project.number}</span><span className="study-category">{project.category}</span></div>
    <div className="study-body">
      <ProjectMedia project={project} />
      <div className="study-caption"><div><p className="study-project-type">{project.type}</p><h3 id={titleId}>{project.title}</h3></div><div className="study-introduction"><p>{project.description}</p><dl className="study-facts">{project.role && <div><dt>Role</dt><dd>{project.role}</dd></div>}<div><dt>Built with</dt><dd>{project.tech.join(' · ')}</dd></div></dl>{project.disclosure && <p className="study-disclosure">{project.disclosure}</p>}</div></div>
      <div className="study-actions">{notes.length > 0 && <details className="study-details"><summary>Inside the project <span aria-hidden="true">+</span></summary>{project.features && <ol className="study-feature-journey" aria-label="Key features">{project.features.map((feature, i) => <li key={feature}><span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>{feature}</li>)}</ol>}<dl>{notes.map(([label, text]) => <div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl>{project.liveNote && <p className="study-note">{project.liveNote}</p>}</details>}<div className="study-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">Visit site <span aria-hidden="true">↗</span></a>}{project.github && <a href={project.github} target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a>}</div></div>
    </div>
  </article>
}
