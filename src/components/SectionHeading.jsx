export default function SectionHeading({ number, label, title, children }) {
  return <div className="section-heading" data-reveal><p className="eyebrow">{number} / {label}</p><div><h2>{title}</h2>{children && <p className="section-summary">{children}</p>}</div></div>
}
