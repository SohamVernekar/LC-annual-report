import React from "react";
import asset12_0 from '../assets/pg12/bg-12.png';

const stats = [
  { number: "~60", label: "Patents Granted in India" },
  { number: "~28", label: "Additional Patents Undergoing Approval Processes" },
  { number: "~55", label: "International Applications Filed under the Patent Cooperation Treaty (PCT), extended to over 40 countries" },
];

export default function Pg12() {
  return (
    <div className="page-12 page" style={{ "--bg": `url(${asset12_0})` }}>
      <div className="pg12-visual-bg" style={{ backgroundImage: `url(${asset12_0})` }} aria-hidden="true" />
      <div className="pg12-overlay-glow" aria-hidden="true" />

      <section className="pg12-content">
        <section className="pg12-left-panel">
          <div className="pg12-intro">
            <p className="pg12-eyebrow">Research and Development</p>
            <h1>
              Evolving Through<br />
              <strong>Innovation</strong>
            </h1>

            <p className="pg12-body-copy">
              In the Technical Textile industry, where performance, durability,
              and cost-efficiency are critical, research and development (R&amp;D)
              play a pivotal role in ensuring competitive advantage. Evolving
              customer needs, sustainability demands, and rapid technological
              advancements require companies to continuously innovate across
              materials, machinery, and manufacturing processes. At Lohia, R&amp;D
              plays a strategic role in delivering smarter, more reliable, and
              future-ready solutions for this industry.
            </p>
          </div>

          <div className="pg12-excellence">
            <h2>Recognised R&amp;D Excellence</h2>
            <p>
              Our R&amp;D capabilities are officially recognised by the Government
              of India, reinforcing our reputation as a trusted innovator in the
              manufacturing sector. We focus on developing proprietary systems and
              technologies that drive advanced process optimisation, productivity,
              and material efficiency across the value chain.
            </p>
          </div>
        </section>

        <section className="pg12-right-panel">
          <div className="pg12-patents-block">
            <h2>
              Patent Portfolio &amp;<br />
              <span>Global Innovation Footprint</span>
            </h2>
            <p className="pg12-muted">
              Our robust innovation efforts are reflected in our growing
              intellectual property base.
            </p>

            <div className="pg12-patent-stats-grid">
              {stats.map((item, idx) => (
                <div className="pg12-stat-card" key={idx}>
                  <div className="pg12-stat-number">{item.number}</div>
                  <div className="pg12-stat-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pg12-research-block">
            <h2>
              Dedicated Research<br />
              <span>Infrastructure</span>
            </h2>
            <p className="pg12-research-desc">
              The Hargovind Bajaj Research and Development Centre (HBRDC) is a
              dedicated facility spanning 6,000 square metres that supports all
              our research and innovation endeavours. Our R&amp;D team brings
              deep domain expertise, with several members holding PhDs and
              advanced technical qualifications.
            </p>

            <div className="pg12-infra-stats-row">
              <div className="pg12-stat-card pg12-infra-stat">
                <div className="pg12-stat-number">234</div>
                <div className="pg12-stat-label">Employees in the R&amp;D Department</div>
              </div>

              <div className="pg12-stat-card pg12-infra-stat">
                <div className="pg12-stat-number">13.48%</div>
                <div className="pg12-stat-label">Of the Workforce Engaged in R&amp;D</div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
