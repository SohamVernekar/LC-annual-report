import React from 'react';
import asset17_0 from '../assets/pg17/award.jpg';
import asset17_1 from '../assets/pg17/hands.jpg';
import asset17_2 from '../assets/pg17/page17-bg.png';

const stakeholdersData = [
  {
    name: "Customers",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    needs: [
      "High-quality, reliable products",
      "Responsive service",
      "Innovative, cost-effective solutions"
    ],
    why: "To understand their evolving needs, improve satisfaction, co-create solutions, and build long-term loyalty",
    how: [
      "Regular product feedback and surveys",
      "After-sales service and technical support",
      "Product demonstrations and trials",
      "Customer visits, training, and onboarding sessions",
      "Digital platforms for real-time machine monitoring and service requests"
    ]
  },
  {
    name: "Employees",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    needs: [
      "Career growth and learning opportunities",
      "Safe and inclusive workplace",
      "Recognition and well-being"
    ],
    why: "To build a motivated, skilled, and aligned workforce that drives innovation, quality, and operational excellence",
    how: [
      "WeCare sessions for employee well-being",
      "Learning and Development through digital platform iLearn SAATHI",
      "Performance evaluations and career progression frameworks",
      "Health and safety initiatives",
      "Annual rewards and recognition platforms"
    ]
  },
  {
    name: "Suppliers and Partners",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1"/>
        <path d="M18 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4"/>
        <circle cx="8" cy="12" r="2"/>
      </svg>
    ),
    needs: [
      "Fair and transparent processes",
      "Timely payments",
      "Capability development and innovation support"
    ],
    why: "To ensure supply chain efficiency, uphold quality standards, and foster reliable, ethical partnerships",
    how: [
      "Transparent vendor selection and onboarding",
      "ZEEP (Zero Error Excellence Programme) for supplier improvement",
      "Collaborative development for process or material innovations",
      "Timely payments and clear contractual terms"
    ]
  },
  {
    name: "Communities",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    needs: [
      "Skills development and employment",
      "Access to education and healthcare",
      "Inclusive development"
    ],
    why: "To contribute positively to society and nurture inclusive development in regions where we operate.",
    how: [
      "Skill development programmes (e.g., MTTC for youth) and placement programme in the Raffia industry",
      "CSR initiatives in education and health"
    ]
  },
  {
    name: "Government and Regulators",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 2L2 7h20L12 2z"/>
      </svg>
    ),
    needs: [
      "Regulatory compliance",
      "Industry collaboration",
      "Policy awareness and adherence"
    ],
    why: "To ensure full regulatory compliance, anticipate policy changes, and contribute to industry development",
    how: [
      "Statutory reporting and timely audits",
      "Participation in industry associations and government forums",
      "Adherence to environmental and labour laws",
      "Continuous internal reviews and compliance training"
    ]
  },
  {
    name: "Investors",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    needs: [
      "Transparent reporting",
      "Financial performance and return",
      "Risk and governance updates"
    ],
    why: "To maintain confidence, ensure transparency, and deliver sustained financial performance",
    how: [
      "Timely disclosure through annual/integrated reports",
      "Governance updates and board communications",
      "Risk and compliance disclosures"
    ]
  },
  {
    name: "Environment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
      </svg>
    ),
    needs: [
      "Reduced environmental impact",
      "Energy and resource efficiency",
      "Sustainable production practices"
    ],
    why: "To minimise environmental impact, promote responsible production, and support sustainable industry transformation",
    how: [
      "Energy Efficiency and Renewable Energy Initiatives",
      "Water Conservation",
      "Emission Monitoring and Compliance",
      "Responsible Waste Management"
    ]
  }
];

function Pg17() {
  return (
    <div className="page-17 page">
      <div className="bg-backdrop" style={{ backgroundImage: `url(${asset17_2})` }} aria-hidden="true" />

      <section className="content">
        <article className="communities-column">
          <p className="eyebrow">Communities</p>
          <h1 className="heading-communities">
            <span className="blue">Legacy of Care,</span><br />
            <strong className="yellow">Vision for Impact</strong>
          </h1>

          <p className="lead-comm">
            We are committed to driving meaningful change through our Corporate Social
            Responsibility initiatives, aligning our business purpose with the socio-economic
            well-being of the communities we touch.
          </p>

          <div className="comm-dual-grid">
            <section className="comm-sub-section">
              <h2>Advancing Access to Healthcare</h2>
              <p>
                We believe that access to quality healthcare is a basic right for every
                individual. Through our Arogya Project, we are working to make this a reality
                by providing essential medical services across communities.
              </p>
              <div className="highlight-quote-box">
                Our growing healthcare network comprises around 50 Homeopathic Clinics,
                a Dental Care Clinic, Physiotherapy Centre, and an Allopathic Polyclinic,
                all focused on delivering accessible and affordable care.
              </div>
            </section>

            <section className="comm-sub-section">
              <h2>Building Sustainable Communities</h2>
              <p>
                We are committed to creating lasting value for society through impactful
                initiatives, including clean drinking water projects, installation of
                bio-toilets, tree plantation drives, rural electrification, and the
                development of environmental parks. Each effort reflects our dedication
                to environmental sustainability and community well-being.
              </p>
            </section>
          </div>

          <div className="comm-photos-row">
            <div className="photo-item">
              <img src={asset17_0} alt="Community dental and medical clinic" />
            </div>
            <div className="photo-item">
              <img src={asset17_1} alt="Tree plantation and environmental initiative" />
            </div>
          </div>

          <section className="education-section">
            <h2>Education for Empowerment</h2>
            <div className="education-grid">
              <div className="edu-col">
                <p>
                  Alongside healthcare, we are committed to fostering education as a means
                  of empowerment.
                </p>
                <div className="highlight-quote-box">
                  In partnership with the Ekal Vidyalaya movement of Bharat Lok Shiksha
                  Parishad, we have adopted 150 schools across 150 underprivileged
                  villages, aiming to create a lasting impact through education.
                </div>
              </div>

              <div className="edu-col">
                <p>
                  Our holistic approach not only supports learning but also addresses
                  health needs through regular camps focused on ENT, diabetes, eye care,
                  oral hygiene, and check-ups for women and children.
                </p>
                <p>
                  By empowering local teachers with specialised training, we enhance the
                  quality of education and build capacity within communities. This initiative
                  nurtures healthier, more informed, and future-ready generations.
                </p>
              </div>
            </div>
          </section>
        </article>

        <article className="stakeholders-column">
          <p className="eyebrow">Stakeholder Engagement</p>
          <h1 className="heading-stakeholders">
            <span className="blue">Engaging with Stakeholders,</span><br />
            <strong className="yellow">Enriching Progress</strong>
          </h1>

          <p className="lead-stakeholders">
            Transparent engagement with stakeholders ensures that sustainability goals are
            aligned, collective action is encouraged, and long-term, responsible growth is achieved.
          </p>

          <div className="stakeholders-table-container">
            <table className="stakeholders-table">
              <thead>
                <tr>
                  <th>Stakeholders</th>
                  <th>Stakeholder Needs</th>
                  <th>Why We Engage?</th>
                  <th>How We Engage?</th>
                </tr>
              </thead>
              <tbody>
                {stakeholdersData.map((row, idx) => (
                  <tr key={idx}>
                    <td className="stakeholder-cell">
                      <div className="stake-icon-wrap">
                        {row.icon}
                      </div>
                      <strong>{row.name}</strong>
                    </td>
                    <td>
                      <ul className="cell-list">
                        {row.needs.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </td>
                    <td className="why-cell">{row.why}</td>
                    <td>
                      <ul className="cell-list">
                        {row.how.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Pg17;
