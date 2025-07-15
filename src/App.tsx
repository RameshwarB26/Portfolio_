import { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Honours from './components/Honours';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Rameshwar Bhumbar | Full Stack Developer';
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Honours />
        <Contact />
      </main>
      <BackToTop />

      {/* Global background gradient */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-b from-primary via-primary to-gray-900 pointer-events-none" />
    </div>
  );
}

export default App;
