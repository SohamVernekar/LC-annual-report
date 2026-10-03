import React from 'react';
import asset14_0 from '../assets/pg14/bg-14.png';

const services = [
  {
    title: "Remote and\nDigital Services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <circle cx="12" cy="10" r="3"/>
        <path d="M12 2v2M2 10h2M20 10h2"/>
      </svg>
    )
  },
  {
    title: "Training and\nPerformance\nOptimisation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    title: "System\nUpgrades and\nRetrofits",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    )
  },
  {
    title: "Installation\nand Setup",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    )
  },
  {
    title: "Technical\nExpertise and\nSupport",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    )
  },
  {
    title: "Audits and\nSafety Checks",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    )
  }
];

function Pg14() {
  return (
    <div className="page-14 page" style={{ "--bg": `url(${asset14_0})` }}>
      <div className="visual-bg" style={{ backgroundImage: `url(${asset14_0})` }} aria-hidden="true" />
      <div className="gradient-overlay" aria-hidden="true" />

      <section className="content">
        <div className="left-column">
          <p className="eyebrow">Our Customers</p>
          <h1 className="main-title">
            Supporting Customers<br />
            <strong>with One-Stop Solutions</strong>
          </h1>

          <p className="lead-summary">
            We provide significant support through a unified platform
            that simplifies sourcing, enhances equipment uptime, and
            streamlines maintenance for Raffia machinery.
          </p>

          <section className="services-copy">
            <h2>Customer Services</h2>
            <p>
              We are committed to delivering a seamless experience through
              end-to-end, cost-effective, and real-time solutions. Our goal is to
              enhance our customers’ operational efficiency and partner with
              them in running a profitable business.
            </p>
            <p>
              To support this, our dedicated Service Team offers a competitive
              edge through swift response time and effective issue resolution,
              enabled by a robust hub-based network.
            </p>
            <div className="highlight-box">
              <p>
                With 15 experienced service technicians, a skilled Process and
                Plant Engineering team, and 24/7 access to service experts, we
                provide comprehensive support across the machine’s entire
                lifecycle from installation to maintenance and repairs.
              </p>
            </div>
            <p>
              Our round-the-clock global service ensures the seamless and
              efficient operation of our customers’ manufacturing processes.
              Through phone support, remote diagnostics, or on-site technician
              visits, we are committed to minimising downtime and keeping
              production running smoothly.
            </p>
          </section>

          <div className="service-badges-grid">
            {services.map((srv, idx) => (
              <div className="service-badge-item" key={idx}>
                <div className="badge-icon-circle">
                  {srv.icon}
                </div>
                <span className="badge-title">{srv.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="middle-column">
          <div className="middle-stat-card">
            <p className="stat-label-top">Delivering Innovative Solutions to</p>
            <div className="stat-value">
              <strong>~100</strong>
              <span className="unit">Countries</span>
            </div>
            <p className="stat-sub">Across the Globe</p>

            <div className="gold-rule" />

            <p className="stat-label-top">Trusted by a Growing International<br />Customer Base of</p>
            <div className="stat-value">
              <strong>2,000+</strong>
              <span className="unit">Customers</span>
            </div>
          </div>
        </div>

        <aside className="parts-card">
          <h2>Spare Parts</h2>
          <p>
            We take pride in being a one-stop solution for all spare parts
            and accessories for machinery in the Technical Textile Industry.
            Backed by a customer-centric approach, we deliver aftermarket
            solutions and supply genuine parts focused on operational
            efficiency and advanced value propositions.
          </p>
          <p>
            Designed, manufactured, and validated by the same experts who
            built the equipment, these parts ensure perfect compatibility
            for seamless integration and unmatched reliability that meets
            and exceeds industry standards. Their enhanced durability helps
            minimise breakdowns and guarantees consistent uptime, while
            delivering long-term value through high-performing,
            cost-effective components.
          </p>
          
          <div className="benefits-section">
            <h3>Benefits of High-Quality Components</h3>
            <ul className="benefits-list">
              <li>Improves operational reliability and reduces breakdowns</li>
              <li>Increases productivity with smoother performance</li>
              <li>Lowers production costs per unit</li>
              <li>Extends equipment lifespan</li>
              <li>Enhances overall product quality</li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default Pg14;
