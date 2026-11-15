import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomeHero from './sections/HomeHero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Achievements from './sections/Achievements'
import { useSectionObserver } from './hooks/useSectionObserver'
const sections = ['home', 'projects', 'about', 'experience', 'skills', 'contact']
export default function App() {
  const activeSection = useSectionObserver(sections)
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target) }
    }), { threshold: 0.08 })
    document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])
  return <><Nav activeSection={activeSection} /><main id="main"><HomeHero /><Projects /><About /><Experience /><Skills /><Education /><Achievements /><Contact /></main><Footer /></>
}
