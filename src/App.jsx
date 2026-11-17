import Nav from './components/Nav'
import Footer from './components/Footer'
import PageMotion from './components/PageMotion'
import HomeHero from './sections/HomeHero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Achievements from './sections/Achievements'
import { useSectionObserver } from './hooks/useSectionObserver'
import { useScrollReveal } from './hooks/useScrollReveal'
import './styles/motion.css'

const sections = ['home', 'projects', 'about', 'experience', 'skills', 'contact']
export default function App() {
  const activeSection = useSectionObserver(sections)
  useScrollReveal()
  return <><PageMotion /><Nav activeSection={activeSection} /><main id="main"><HomeHero /><Projects /><About /><Experience /><Education /><Achievements /><Contact /></main><Footer /></>
}
