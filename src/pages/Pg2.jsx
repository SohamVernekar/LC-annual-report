import machineArt from '../assets/pg2/foreground.webp'

function Pg2() {
  return (
    <div className="report-page page-two">
      <img className="machine-art" src={machineArt} alt="" aria-hidden="true" loading="lazy" decoding="async" />

      <section className="intro" id="theme-introduction">
        <div className="eyebrow">Theme Introduction</div>
        <h1>
          <span>Built on Legacy,</span>
          <br />
          <strong>Advancing Through Innovation</strong>
        </h1>

        <p className="lead">
          The Company takes pride in its strong legacy built over the last four decades with a deep focus on Integrity,
          Quality, and Value.
        </p>

        <p>
          We have built a strong presence in the woven plastic machinery segment, by engineering reliability and functional
          excellence. Over the years, our machines have reached markets across the globe.
        </p>

        <p>
          Our commitment to providing integrated solutions for the Woven Raffia industry is supported by sustained
          investment in research and development, along with continuing exploration to improve processes, enhance
          performance, and address evolving industry needs through thoughtful innovation.
        </p>
      </section>

      <aside className="highlights" aria-label="Key financial highlights for FY25">
        <h2>
          <span>Key Highlights</span>
          <br />
          <strong>for FY25</strong>
        </h2>

        <p className="summary">
          The Company&apos;s performance in FY25 underscores its focus on innovation-led growth. Increased R&amp;D
          investment, a healthy revenue trajectory, and several productivity and efficiency patents to its credit highlights
          commitment to advancing engineering productivity and efficiency.
        </p>

        <div className="metric">
          <strong>₹13,101.04</strong> <span>million</span>
          <small>*Revenue</small>
        </div>

        <div className="metric">
          <strong>₹2,201.05</strong> <span>million</span>
          <small>*EBITDA</small>
        </div>

        <div className="metric">
          <strong>₹1,186.25</strong> <span>million</span>
          <small>*Profit After Tax</small>
        </div>

        <p className="footnote">*figures are as per standalone financial statements.</p>
      </aside>
    </div>
  )
}

export default Pg2
