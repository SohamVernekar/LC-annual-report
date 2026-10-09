import React, { useState, useEffect } from 'react'
import DownloadCTA from './DownloadCTA'
import './Navbar.css'

const NAV_ITEMS = [
  { id: 'highlights', label: 'Theme Introduction & Highlights' },
  { id: 'vision', label: 'Vision' },
  { id: 'about', label: 'About Lohia Corp' },
  { id: 'journey', label: 'Our Journey' },
  { id: 'machinery', label: 'Product Machinery' },
  { id: 'portfolio', label: 'Product Portfolio' },
  { id: 'applications', label: 'Product Applications' },
  { id: 'geography', label: 'Geographical Presence' },
  { id: 'chairmans-desk', label: "From the Chairman's Desk" },
  { id: 'leaders', label: 'Our Visionary Leaders' },
  { id: 'ttrc', label: 'Training Institute (TTRC)' },
  { id: 'rnd', label: 'Research & Development' },
  { id: 'technology-customer', label: 'Technology & Customer Solutions' },
  { id: 'esg-communities', label: 'ESG & Communities' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Close on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleLinkClick = (id) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Top-right Hamburger Trigger Button */}
      <button
        type="button"
        id="nav-trigger-button"
        className={`nav-trigger ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close table of contents menu' : 'Open table of contents menu'}
        aria-expanded={isOpen}
        aria-controls="toc-nav-drawer"
      >
        <span className="nav-trigger__bar nav-trigger__bar--1" aria-hidden="true" />
        <span className="nav-trigger__bar nav-trigger__bar--2" aria-hidden="true" />
        <span className="nav-trigger__bar nav-trigger__bar--3" aria-hidden="true" />
      </button>

      {/* Overlay Backdrop */}
      <div
        className={`nav-backdrop ${isOpen ? 'is-active' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-over Drawer */}
      <aside
        id="toc-nav-drawer"
        className={`nav-drawer ${isOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal={isOpen}
        aria-label="Table of Contents"
        aria-hidden={!isOpen}
      >
        <div className="nav-drawer__header">
          <span className="nav-drawer__title">Table of Contents</span>
          <span className="nav-drawer__badge">Annual Report 2024–25</span>
        </div>

        <nav className="nav-drawer__nav" aria-label="Chapter links">
          <ul className="nav-drawer__list">
            {NAV_ITEMS.map((item, idx) => (
              <li key={item.id} className="nav-drawer__item">
                <a
                  href={`#${item.id}`}
                  className="nav-drawer__link"
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(item.id)
                  }}
                >
                  <span className="nav-drawer__link-num" aria-hidden="true">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="nav-drawer__link-text">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-drawer__footer">
          <DownloadCTA variant="drawer" text="Download Report PDF" />
        </div>
      </aside>
    </>
  )
}
