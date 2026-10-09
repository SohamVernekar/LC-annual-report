import factoryImg from '../assets/pg3/factory.webp'

function Pg3() {
  return (
    <div className="report-page page-three">
      <section className="page-title" id="corporate-overview">
        <div className="section-label">Corporate Overview</div>
        <h1>
          <span>About</span>
          <strong>Lohia Corp Limited</strong>
        </h1>
      </section>

      <img
        className="hero-photo"
        src={factoryImg}
        alt="LohiaCorp modern manufacturing facility"
        loading="lazy"
        decoding="async"
      />

      <article className="info-card who-card">
        <h2>Who We Are</h2>
        <p>
          Lohia is one of the leading global manufacturers of machinery and equipment for the technical textile industry,
          especially woven plastic fabrics and sacks. With presence in about 100 countries, we serve key sectors such as
          packaging, agriculture, construction and geotextiles, helping industries operate smarter, faster, and more
          sustainably.
        </p>
      </article>

      <article className="info-card what-card">
        <h2>What We Do</h2>
        <p>
          We design and manufacture machines that combine performance, innovation, and compliance with global standards.
          Supported by an R&amp;D centre recognised by the Department of Scientific and Industrial Research and backed by
          over 60 patents, we continue to advance technology for the woven raffia industry.
        </p>
        <p>
          Our Digital Innovation Centre (DIC) in Bengaluru integrates IoT and AI into systems, while the Technical Training
          and Research Centre (TTRC) strengthens practical skills and nurtures a workforce equipped for the industry&apos;s
          future.
        </p>
      </article>

      <article className="info-card value-card">
        <h2>Where We Create Value</h2>
        <p>
          Our technology is designed not only for efficiency but also for delivering meaningful impact. Through our new
          recycling machines, we promote a circular economy and reduce energy consumption. We lead with purpose,
          delivering solutions that create value for our customers, our industry, and our environment.
        </p>
      </article>

      <section className="defines">
        <h2>What Defines Us</h2>
        <p className="defines-intro">
          We are defined by our commitment to engineering reliable solutions for the woven plastic fabric industry, our
          deep-rooted focus on R&amp;D and digital transformation, and our drive to enable a sustainable future. We strive to
          deliver tangible value by enhancing productivity, building capabilities, and promoting circularity across industries
          and geographies.
        </p>
        <div className="value-grid">
          <article className="yellow-card">
            <div className="line-icon">
              <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
                <path d="M7 25c5-4 9-4 13 0l4 4c2 2 5 2 7 0l8-8M16 29l-4 4M22 34l-4 4M29 32l-4 5M11 18l6-7 8 5 5-3 7 8" />
              </svg>
            </div>
            <h3>Integrity</h3>
            <p>
              Integrity is at the core of our being. It is what keeps us rooted. For us, integrity means much more than sound
              morals, ethical beliefs, and essential honesty. Integrity is all about doing the right thing for the right
              reasons at the right time.
            </p>
          </article>
          <article className="yellow-card">
            <div className="line-icon">
              <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
                <circle cx="24" cy="19" r="10" />
                <path d="M17 28l-2 13 9-5 9 5-2-13M19 19l3 3 6-7" />
              </svg>
            </div>
            <h3>Quality</h3>
            <p>
              We believe that if anything is worth doing, it is worth doing well. We define quality as &apos;excellence in every
              interaction.&apos; At Lohia Corp, quality is a way of life. We strive to live it every day through our people,
              processes, and outcomes.
            </p>
          </article>
          <article className="yellow-card">
            <div className="line-icon">
              <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
                <path d="M5 24h38M9 24l15-15 15 15-15 15L9 24zM16 17l8 14 8-14M13 24h22" />
              </svg>
            </div>
            <h3>Value</h3>
            <p>
              We are in the business of enhancing value by creating products, services, and solutions that deliver superior
              performance, heightened experiences, and better results for our customers, partners, and communities.
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Pg3
