import { profile } from '../data/portfolio'

export default function Contact() {
  return <section id="contact" className="contact-section" data-reveal><div className="shell"><p className="eyebrow">04 / Get in touch</p><div className="contact-layout"><h2>Let’s make<br /><em>something useful.</em></h2><div className="contact-copy"><p>Have a development opportunity or a project in mind? I’d like to hear about it.</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a><div className="contact-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.resume}>Resume ↗</a></div></div></div></div></section>
}
