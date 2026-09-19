import bgImage from '../assets/pg4/bg-image.png'

function Pg4() {
  return (
    <main className="report-page page-four" aria-label="Our Journey page">
      <div className="page-art" aria-hidden="true" style={{ backgroundImage: `url(${bgImage})` }} />

      <section className="intro">
        <p className="eyebrow">Our Journey</p>
        <h1>
          From Foundation
          <br />
          <strong>to Future</strong>
        </h1>
        <p className="lead">Over the last 40+ years, we have consistently worked on transforming our vision into action.</p>
      </section>

      <section className="timeline" aria-label="LohiaCorp journey timeline">
        <svg className="timeline-svg desktop-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path
            className="timeline-path"
            pathLength="100"
            d="M 4.35 33 L 95 33 L 95 52 L 5 52 L 5 68 L 62 68"
            fill="none"
            stroke="#ffd100"
            strokeWidth="0.22"
          />
        </svg>

        <article className="milestone m1">
          <span className="dot" />
          <h2>1981–1985</h2>
          <ul>
            <li>Lohia Starlinger Limited was incorporated as a joint venture between Lohia and Austria-based Starlinger &amp; Co. for manufacturing circular looms and winders for the Raffia industry.</li>
            <li>Collaborated with German-based Windmöller &amp; Hölscher for technical know-how for the Tape Extrusion line.</li>
          </ul>
        </article>

        <article className="milestone m2">
          <span className="dot" />
          <h2>1986–1990</h2>
          <ul>
            <li>Our in-house R&amp;D facility centre received official recognition from the Government of India in 1988.</li>
          </ul>
        </article>

        <article className="milestone m3">
          <span className="dot" />
          <h2>2001–2005</h2>
          <ul>
            <li>Launched the LSL 6, a 6-shuttle circular loom with 900 ppm weft insertion and a capacity of 720 bobbins, advancing industry efficiency.</li>
          </ul>
        </article>

        <article className="milestone m4">
          <span className="dot" />
          <h2>2006–2010</h2>
          <ul>
            <li>Introduced an automatic bag conversion line, automating fabric-to-bag production.</li>
            <li>Developed Duotec, a revolutionary dual-stage stretching technology, setting new global benchmarks for flat film production.</li>
          </ul>
        </article>

        <article className="milestone m5">
          <span className="dot" />
          <h2>2011–2015</h2>
          <ul>
            <li>Established the Technical Training and Research Centre (TTRC) – for building technical capabilities.</li>
            <li>Lohia Starlinger Limited changed its name to Lohia Corp Limited, consequent to the exit of &quot;Starlinger &amp; Co.&quot; altogether as a shareholder.</li>
          </ul>
        </article>

        <article className="milestone m6">
          <span className="dot" />
          <h2>2016–2020</h2>
          <ul>
            <li>Launched Autoroto, a high-speed automatic switch-over precision winder.</li>
            <li>Acquired a 125-year-old company in North Carolina, America – &apos;Leesona Corp&apos;, an expert in winding technology.</li>
            <li>Lohia Packaging Solutions (LPS) was set up as a &apos;live experience centre&apos; for prospective customers to learn and interact with the latest technology in Raffia production.</li>
          </ul>
        </article>

        <article className="milestone m7">
          <span className="dot active-dot" />
          <h2>2021–2025</h2>
          <ul>
            <li>Sundaram Industries Private Limited (SIPL) was set up for manufacturing of Extrusion and lamination machines in Bengaluru.</li>
            <li>Formed OMGM Extrusiontechnik S.r.l. in Italy, a joint venture with OMGM S.A.S. to manufacture extrusion plants for technical monofilaments, straps, and ropes.</li>
            <li>Acquired J.J. Jenkins Inc. in the USA through our subsidiary Leesona Corp, expanding our presence in synthetic fibre, monofilament yarn, and film technology segments.</li>
          </ul>
        </article>

        <aside className="note">
          <strong>Note:</strong>
          <p>
            As part of a strategic restructuring, a scheme of demerger was implemented pursuant to the Scheme of Arrangement
            approved by the Hon&apos;ble NCLT, Allahabad, vide its order dated 16<sup>th</sup> April 2024, between Lohia Corp
            Limited (now renamed &quot;Lohia Trade Services Limited&quot;) and Kanpur Packaging Machines Limited (now renamed as
            &quot;Lohia Corp Limited&quot;), which resulted in vesting of the technical textile machine business, along with all
            related properties, assets, investments, liabilities, and licences, with us.
          </p>
        </aside>
      </section>
    </main>
  )
}

export default Pg4
