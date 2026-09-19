import { useEffect, useState } from 'react'
import './App.css'
import FloatingLogo from './components/FloatingLogo'
import Pg1 from './pages/Pg1'
import Pg2 from './pages/Pg2'
import Pg3 from './pages/Pg3'
import Pg4 from './pages/Pg4'
import Pg5 from './pages/Pg5'
import Pg6 from './pages/Pg6'
import Pg7 from './pages/Pg7'

const sections = [
  { id: 'cover' }, // The cover is tracked so the floating logo can react to it
  { id: 'theme' },
  { id: 'overview' },
  { id: 'journey' },
  { id: 'portfolio' },
  { id: 'applications' },
  { id: 'geography' },
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

    /* Thin band at the top of the viewport: reports which chapter is currently
       under the floating logo, so it can switch between the dark and light
       wordmark. Unlike the reveal observer this one keeps observing. */
    const topBandObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { root: null, rootMargin: '-1px 0px -92% 0px', threshold: 0 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      sectionObserver.observe(el)
      topBandObserver.observe(el)
    })

    return () => {
      sectionObserver.disconnect()
      topBandObserver.disconnect()
    }
  }, [])

  return (
    <div className="annual-app continuous-scroll">
      <FloatingLogo activeSection={activeSection} />

      {/* Main Content */}
      <main className="annual-report">
        <section id="cover" className="report-section">
          <Pg1 />
        </section>
        <section id="theme" className="report-section">
          <Pg2 />
        </section>
        <section id="overview" className="report-section">
          <Pg3 />
        </section>
        <section id="journey" className="report-section">
          <Pg4 />
        </section>
        <section id="portfolio" className="report-section">
          <Pg5 />
        </section>
        <section id="applications" className="report-section">
          <Pg6 />
        </section>
        <section id="geography" className="report-section">
          <Pg7 />
        </section>
      </main>
    </div>
  )
}

export default App
