import logoBlack from '../assets/pg3/logo-black-crop.png'
import logoWhite from '../assets/pg4/logo-white.png'

/* Sections whose backdrop is dark enough to need the white wordmark. */
const DARK_SECTIONS = ['cover', 'journey']

function FloatingLogo({ activeSection }) {
  const dark = DARK_SECTIONS.includes(activeSection)

  return (
    <div className={`floating-logo${dark ? ' is-dark' : ''}`}>
      <img className="floating-logo__mark floating-logo__mark--black" src={logoBlack} alt="LohiaCorp" />
      <img className="floating-logo__mark floating-logo__mark--white" src={logoWhite} alt="" aria-hidden="true" />
    </div>
  )
}

export default FloatingLogo
