import React from 'react'
import logoBlack from '../assets/pg3/logo-black-crop.png'
import logoWhite from '../assets/pg4/logo-white.png'

/* Sections whose backdrop is dark enough to need the white wordmark. */
const DARK_SECTIONS = [
  'cover',
  'journey',
  'pg8',
  'pg9',
  'pg12',
  'pg13',
  'pg14',
  'pg15',
  'chairmans-desk',
  'rnd',
  'technology-customer',
  'esg-communities',
]

function FloatingLogo({ activeSection }) {
  const isDark = DARK_SECTIONS.includes(activeSection)

  return (
    <div className={`floating-logo${isDark ? ' is-dark' : ''}`}>
      <img className="floating-logo__mark floating-logo__mark--black" src={logoBlack} alt="LohiaCorp" />
      <img className="floating-logo__mark floating-logo__mark--white" src={logoWhite} alt="" aria-hidden="true" />
    </div>
  )
}

export default FloatingLogo
