import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'cover', label: 'Cover' },
  { id: 'theme', label: 'Theme' },
  { id: 'overview', label: 'Overview' },
  { id: 'journey', label: 'Journey' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'applications', label: 'Applications' },
  { id: 'geography', label: 'Global' },
]

function ReportNav({ activeSection }) {
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? Math.min(1, h.scrollTop / max) : 0)
      setScrolled(h.scrollTop > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const dark = activeSection === 'cover' || activeSection === 'journey'

  return (
    <header className={`pitch-nav${scrolled ? ' is-scrolled' : ''}${dark ? ' is-dark' : ''}`}>
      <div className="pitch-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
      <nav className="pitch-nav__inner" aria-label="Report chapters">
        <div className="pitch-nav__links">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={activeSection === l.id ? 'is-active' : ''}
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default ReportNav
