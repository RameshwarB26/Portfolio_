import { useEffect, useRef, useState } from 'react'
import { navigation, profile } from '../data/portfolio'
export default function Nav({ activeSection }) {
  const [open, setOpen] = useState(false)
  const toggle = useRef(null)
  const header = useRef(null)
  useEffect(() => {
    const close = event => {
      if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus() }
      if (event.type === 'pointerdown' && !header.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('keydown', close)
    document.addEventListener('pointerdown', close)
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', close) }
  }, [open])
  return <header className="header" ref={header}><nav className="shell nav" aria-label="Main navigation">
    <a className="wordmark" href="#home" aria-label="Rameshwar Bhumbar home" onClick={() => setOpen(false)}>rb<span>.</span><span className="wordmark-caption">RAMESHWAR<br />BHUMBAR</span></a>
    <button className="menu-toggle" ref={toggle} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button>
    <div className={`nav-links ${open ? 'is-open' : ''}`} id="navigation">{navigation.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}{profile.resume && <a href={profile.resume}>Resume ↗</a>}<a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let’s talk <span>↗</span></a></div>
  </nav></header>
}
