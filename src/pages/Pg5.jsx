import machine01 from '../assets/pg5/machine-01.webp'
import machine02 from '../assets/pg5/machine-02.webp'
import machine03 from '../assets/pg5/machine-03.webp'
import machine04 from '../assets/pg5/machine-04.webp'
import machine05 from '../assets/pg5/machine-05.webp'
import machine06 from '../assets/pg5/machine-06.webp'
import machine07 from '../assets/pg5/machine-07.webp'
import machine08 from '../assets/pg5/machine-08.webp'
import machine09 from '../assets/pg5/reclamax-65.webp'

function Pg5() {
  return (
    <main className="report-page page-five" aria-label="Product portfolio page">
      <section className="spread">
        <section className="left-column">
          <div className="intro">
            <p className="eyebrow">Product Portfolio</p>
            <h1>
              Inspired by Insight,
              <br />
              <strong>Built on Innovation</strong>
            </h1>

            <p className="lead">
              The Company&apos;s consistent focus on understanding the needs of our clients who require expert machinery to
              craft woven fabric has enabled us to deliver complete machine solutions.
            </p>

            <p className="body-copy">
              We are a customer-focused company, delivering comprehensive, end-to-end solutions backed by advanced
              technology and deep domain expertise. Through continuous innovation and close collaboration, we empower our
              partners to optimise their production processes and maintain a competitive edge in a dynamic market.
            </p>

            <h2>
              Setting new standards in the Technical Textile and Plastic Woven Fabric Machinery
            </h2>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <span className="card-icon" aria-hidden="true" />
              <h3>Concept to Commission</h3>
              <p>From initial design and engineering to manufacturing, installation, testing, and commissioning, ensuring integration and performance.</p>
            </article>

            <article className="feature-card">
              <span className="card-icon" aria-hidden="true" />
              <h3>Skilled Workforce and Technical Training</h3>
              <p>The Company&apos;s commitment to workforce development through in-house technical training and skill-building ensures excellence in execution and product quality.</p>
            </article>

            <article className="feature-card">
              <span className="card-icon" aria-hidden="true" />
              <h3>Global Leadership in Raffia Machinery</h3>
              <p>We are one of the global leaders in the raffia industry, serving customers in nearly 100 countries with high-performance machinery. With decades of expertise, a strong R&amp;D foundation, and a trusted brand, we deliver reliable solutions and continue to be the preferred partner worldwide.</p>
            </article>

            <article className="feature-card">
              <span className="card-icon" aria-hidden="true" />
              <h3>End-to-End Integrated Solutions</h3>
              <p>We deliver comprehensive support from pre-sales consultation to post-sales service. Our offerings include expert installation, technical assistance, and a dedicated spare parts division. Backed by a global network and remote tools, our team ensures timely and efficient solutions worldwide.</p>
            </article>
          </div>
        </section>

        <section className="right-column">
          <div className="portfolio-copy">
            <h2>Our Product Portfolio</h2>
            <p>
              We manufacture Tape Extrusion Lines (<i>Lorex, Duotec, CoEx</i>), Winders (<i>Precision Winder, Step Precision
              Winder, Autoroto, Heavy Duty Winder, Twister</i>), Circular Looms (<i>LSL, Nova, LENO, Venturi</i>), Converting
              Machines (<i>BCS, BCS Line, Blokmatic, LM 650, Valvomatic, FIBC Conversion</i>), Extrusion Coating/Laminating
              Lines (<i>Lamicot Classic, Lamicot Prime</i>), and Flexographic Printing Machines (<i>Prismaflex, Soloprint</i>).
              We also manufacture machinery for Multifilament solutions (<i>Lofil, Lofil Duo HS</i>) and Recycling Machinery
              (<i>ReclaMax, ReclaPro</i>).
            </p>
          </div>

          <div className="machine-grid">
            <figure><img src={machine01} alt="Lohia Corp tape extrusion machinery" loading="lazy" decoding="async" /></figure>
            <figure><img src={machine02} alt="Lohia Corp precision winders" loading="lazy" decoding="async" /></figure>
            <figure><img src={machine03} alt="Lohia Corp machinery" loading="lazy" decoding="async" /></figure>
            <figure><img src={machine04} alt="Lohia Corp printing machinery" loading="lazy" decoding="async" /></figure>
            <figure><img src={machine05} alt="Lohia Corp weaving machinery" loading="lazy" decoding="async" /></figure>
            <figure><img src={machine06} alt="Lohia Corp extrusion machinery" loading="lazy" decoding="async" /></figure>
            <figure><img src={machine07} alt="Lohia Corp ReclaPro machinery" loading="lazy" decoding="async" /></figure>
            <figure><img src={machine08} alt="Lohia Corp industrial machinery" loading="lazy" decoding="async" /></figure>
          </div>
          <div className="machine-large">
            <figure><img src={machine09} alt="Lohia Corp ReclaMax machinery" loading="lazy" decoding="async" /></figure>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Pg5
