import pg1Bg from '../assets/pg1/background.png'
import pg1Fg from '../assets/pg1/foreground.png'

function Pg1() {
  return (
    <main className="cover-page" aria-label="LohiaCorp Annual Report 2024–25 cover">
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
        </section>
      </div>
    </main>
  )
}

export default Pg1
