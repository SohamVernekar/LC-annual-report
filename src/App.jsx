import { useEffect, useState } from 'react'
import './App.css'
import FloatingLogo from './components/FloatingLogo'
import Navbar from './components/Navbar'
import Pg1 from './pages/Pg1'
import Pg2 from './pages/Pg2'
import Pg3 from './pages/Pg3'
import Pg4 from './pages/Pg4'
import Pg5 from './pages/Pg5'
import Pg6 from './pages/Pg6'
import Pg7 from './pages/Pg7'
import Pg8 from './pages/Pg8'
import Pg9 from './pages/Pg9'
import Pg10 from './pages/Pg10'
import Pg11 from './pages/Pg11'
import Pg12 from './pages/Pg12'
import Pg13 from './pages/Pg13'
import Pg14 from './pages/Pg14'
import Pg15 from './pages/Pg15'
import Pg16 from './pages/Pg16'
import Pg17 from './pages/Pg17'
import './pages8-17.css'

const sections = [
  { id: 'cover' },
  { id: 'highlights' },
  { id: 'about' },
  { id: 'journey' },
  { id: 'portfolio' },
  { id: 'applications' },
  { id: 'geography' },
  { id: 'chairmans-desk' },
  { id: 'pg9' },
  { id: 'leaders' },
  { id: 'ttrc' },
  { id: 'rnd' },
  { id: 'technology-customer' },
  { id: 'pg14' },
  { id: 'esg-communities' },
  { id: 'pg16' },
  { id: 'pg17' },
]

function App() {
  const [activeSection, setActiveSection] = useState('cover')

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            entry.target.firstElementChild?.classList.add('is-visible')
            sectionObserver.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -14% 0px',
        threshold: 0.05
      }
    )

    const updateActiveSection = () => {
      const topOffset = 40 // Logo sits at Y: 12px to 40px
      for (const { id } of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= topOffset && rect.bottom > topOffset) {
            setActiveSection(id)
            return
          }
        }
      }
    }

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      sectionObserver.observe(el)
    })

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection, { passive: true })
    window.addEventListener('hashchange', updateActiveSection, { passive: true })

    return () => {
      sectionObserver.disconnect()
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
      window.removeEventListener('hashchange', updateActiveSection)
    }
  }, [])

  return (
    <div className="annual-app continuous-scroll">
      <FloatingLogo activeSection={activeSection} />
      <Navbar />

      {/* Main Content */}
      <main className="annual-report">
        <section id="cover" className="report-section">
          <Pg1 />
        </section>
        <section id="highlights" className="report-section">
          <Pg2 />
        </section>
        <section id="about" className="report-section">
          <div id="vision" style={{ position: 'absolute', top: 0, left: 0 }} aria-hidden="true" />
          <Pg3 />
        </section>
        <section id="journey" className="report-section">
          <Pg4 />
        </section>
        <section id="portfolio" className="report-section">
          <div id="machinery" style={{ position: 'absolute', top: 0, left: 0 }} aria-hidden="true" />
          <Pg5 />
        </section>
        <section id="applications" className="report-section">
          <Pg6 />
        </section>
        <section id="geography" className="report-section">
          <Pg7 />
        </section>
        <section id="chairmans-desk" className="report-section">
          <Pg8 />
        </section>
        <section id="pg9" className="report-section">
          <Pg9 />
        </section>
        <section id="leaders" className="report-section">
          <Pg10 />
        </section>
        <section id="ttrc" className="report-section">
          <Pg11 />
        </section>
        <section id="rnd" className="report-section">
          <Pg12 />
        </section>
        <section id="technology-customer" className="report-section">
          <Pg13 />
        </section>
        <section id="pg14" className="report-section">
          <Pg14 />
        </section>
        <section id="esg-communities" className="report-section">
          <Pg15 />
        </section>
        <section id="pg16" className="report-section">
          <Pg16 />
        </section>
        <section id="pg17" className="report-section">
          <Pg17 />
        </section>
      </main>
    </div>
  )
}

export default App
