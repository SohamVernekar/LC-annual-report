import React from 'react';
import asset16_0 from '../assets/pg16/bg-16.png';
import asset16_1 from '../assets/pg16/conference.jpg';
import asset16_2 from '../assets/pg16/prize.jpg';
import asset16_3 from '../assets/pg16/solar.jpg';

function Pg16() {
  return (
    <div className="page-16 page">
      <div className="bg-backdrop" style={{ backgroundImage: `url(${asset16_0})` }} aria-hidden="true" />

      <section className="content">
        <section className="left-column">
          <p className="eyebrow">Environmental, Social, and Governance Initiatives</p>

          <h1 className="heading-esg">
            <span className="blue">Governed by Principles,</span><br />
            <strong className="yellow">Guided by Purpose</strong>
          </h1>

          <p className="lead-text">
            At Lohia, our commitment to Environmental, Social, and Governance (ESG)
            principles is integral to how we operate and grow. We recognise that long-term
            business success is inseparable from our responsibility to the environment, the
            communities we serve, and the standards by which we govern ourselves.
          </p>

          <h2 className="sub-heading-env">
            A Deep Focus on Preserving<br />Environmental Integrity
          </h2>

          <div className="env-grid">
            <article className="energy-efficiency-col">
              <h3>Energy Efficiency Initiatives</h3>
              <p>
                We have implemented several measures and continue to focus on reducing our
                energy consumption across our manufacturing units.
              </p>
              <p>
                Modernisation efforts include the upgrade of air compressors, installation of
                Variable Frequency Drives (VFDs), and the deployment of high-efficiency chillers.
                These upgrades are complemented by a real-time visual monitoring system that
                helps optimise energy use during DG set operations.
              </p>
              <p>
                In a major move toward smart energy use, all conventional lighting has been
                replaced with LED systems, leading to substantial savings through their lower
                power consumption and longer lifespan. Further optimisation was achieved by
                reducing compressed air usage and installing valve booster systems, boosting
                overall efficiency while minimising energy loss.
              </p>
              <p>
                Additionally, load detection alarm systems have been introduced to automatically
                identify high energy usage and shut down non-essential equipment, ensuring energy
                is used only where it is needed. All these initiatives have led to a significant
                reduction in our energy consumption.
              </p>
              <p>
                To foster a culture of awareness and accountability, we also conduct regular
                safety and energy training programmes, empowering employees to contribute to
                sustainability goals.
              </p>
            </article>

            <article className="solar-col">
              <h3>Harnessing Renewable Energy</h3>

              <div className="solar-banner">
                <img src={asset16_3} alt="Chaubepur solar power plant" />
                <div className="solar-stat-overlay">
                  <div className="solar-stat-shape">
                    <div className="stat-pct">17%</div>
                    <div className="stat-desc">
                      Reduction in Electricity Consumption<br />at the Chaubepur Plant Alone
                    </div>
                  </div>
                </div>
              </div>

              <p>
                We have installed a 2,000 kWp solar power system at the Chaubepur plant
                (Uttar Pradesh), while an additional 775 kWp solar installation powers
                operations at the LPS, Panki (Uttar Pradesh) unit.
              </p>
              <p>
                These initiatives have already yielded impressive results, enhancing both
                sustainability and operational efficiency.
              </p>
            </article>
          </div>
        </section>

        <section className="right-column">
          <h2 className="heading-people">
            <span className="blue">A People-First</span><br />
            <strong className="yellow">Organisation</strong>
          </h2>

          <p className="people-intro">
            Our approach to human capital is designed to go beyond traditional HR practices by
            focusing not just on productivity, but on the overall well-being, development,
            engagement, and recognition of every individual.
          </p>

          <div className="people-pillars-grid">
            <article className="pillar-item">
              <h3>Prioritising Well-being</h3>
              <p>
                Our WeCare sessions cover both physical and emotional wellness, ranging from
                Yoga and Desk Yoga to expert talks by health specialists on various issues.
                Regular health check-up camps and blood donation drives further encourage
                proactive health management. These efforts not only promote physical resilience
                but also help employees adopt healthier, informed lifestyle choices.
              </p>
            </article>

            <article className="pillar-item">
              <h3>Aarambh Induction Programme</h3>
              <p>
                Our 4-day induction, Aarambh, provides new employees with a comprehensive
                overview of Lohia’s values, functions, and facilities, laying the groundwork for
                a meaningful and connected start to their journey with us.
              </p>
            </article>

            <article className="pillar-item">
              <h3>Digital-First HR</h3>
              <p>
                iLearn SAATHI marks a significant milestone in our digital learning journey,
                giving employees flexible access to 50+ bite-sized e-learning courses aligned
                with our competency framework with modules ranging from 2–10 minutes, and total
                course durations of 30–60 minutes, Learning fits effortlessly into daily work.
                Managers can assign targeted courses, linking individual development with business
                goals. Complemented by classroom sessions and iLearn PAL, the platform fosters a
                collaborative, self-driven learning culture, empowering every employee to grow
                personally and professionally.
              </p>
            </article>

            <article className="pillar-item">
              <h3>Celebrating Excellence</h3>
              <p>
                Through our Annual Rewards and Recognition programmes, we ensure that exceptional
                efforts are publicly celebrated and rewarded. These moments of recognition spark
                motivation, build confidence, and reinforce a performance-driven environment where
                employees feel proud of their contributions.
              </p>
            </article>
          </div>

          <div className="governance-section">
            <div className="gov-left-col">
              <h2 className="gov-title">
                Our Robust Governance<br />Framework
              </h2>
              <p>
                Our governance framework is built on the principles of transparency,
                accountability, and ethical conduct. We are committed to upholding the highest
                standards of corporate governance, ensuring that all decisions are guided by
                integrity and aligned with the long-term interests of our stakeholders.
              </p>
              <p>
                Our Board of Directors, bringing diverse sets of expertise and experience,
                provides strategic oversight while fostering a culture of responsibility and
                compliance across the organisation. Through well-defined policies, internal
                controls, and regular disclosures, we strive to maintain trust and deliver
                sustainable value. We remain committed to enhancing our governance practices in
                line with evolving regulatory expectations and global best practices.
              </p>
            </div>

            <div className="gov-right-col">
              <div className="gov-photo-wrap">
                <img src={asset16_1} alt="Lohia team conference and strategic governance" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Pg16;
