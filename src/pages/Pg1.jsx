import pg1Bg from '../assets/pg1/background.webp'
import pg1Fg from '../assets/pg1/foreground.webp'

function Pg1() {
  return (
    <div className="cover-page">
      <img className="cover-page__background" src={pg1Bg} alt="" aria-hidden="true" fetchPriority="high" />
      <img className="cover-page__foreground" src={pg1Fg} alt="" aria-hidden="true" decoding="async" />

      <div className="cover-page__content">
        <section className="cover-page__title-block">
          <span className="cover-page__mark" aria-hidden="true" />
          <h1>
            Built on <strong>Legacy</strong>
            <br />
            Advancing through
            <br />
            <strong>Innovation</strong>
          </h1>
          <div className="cover-page__rule" />
          <p>Annual Report 2024–25</p>
          <p className="cover-page__subtitle">
            Integrated machinery for woven technical textiles &mdash; engineering
            reliability for customers in around 100 countries.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Pg1
