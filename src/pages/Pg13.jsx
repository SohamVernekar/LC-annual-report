import React from "react";
import asset13_0 from '../assets/pg13/bg-13.png';

const roadmap = [
  {
    title: "Adopting a Distributed IoT Architecture:",
    body: "We are transitioning to a distributed architecture for our IoT systems to enhance responsiveness and minimise latency. This shift will help prevent data loss, predict equipment downtime, and monitor machine health more effectively."
  },
  {
    title: "Establishing a Robust Asset Monitoring Framework:",
    body: "We aim to implement a comprehensive asset monitoring system that ensures optimal performance and efficiency across all operations."
  },
  {
    title: "Enhancing Predictive Maintenance with AI and Analytics:",
    body: "By leveraging advanced data analytics and artificial intelligence, we will strengthen our predictive maintenance capabilities, reducing unplanned downtimes and operational costs."
  },
  {
    title: "Optimising Overall Equipment Effectiveness (OEE):",
    body: "Through the integration of digital tools, we are committed to continuously assessing and improving plant efficiency by tracking and optimising OEE metrics."
  },
  {
    title: "Developing Smart Troubleshooting and Defect-Tracking Tools:",
    body: "We are focused on creating intuitive diagnostic and defect-tracking solutions to accelerate issue resolution and uphold the highest quality standards."
  },
  {
    title: "Conducting Energy and Digital Audits for Sustainability:",
    body: "In alignment with our sustainability goals, we will conduct detailed energy and digital audits to uncover opportunities for optimisation and support greener operations."
  }
];

export default function Pg13() {
  return (
    <div className="page-13 page" style={{ "--bg": `url(${asset13_0})` }}>
      <div className="visual-bg" style={{ backgroundImage: `url(${asset13_0})` }} aria-hidden="true" />
      <div className="hud-overlay" aria-hidden="true" />

      <section className="content">
        <section className="left-panel">
          <div className="left-content">
            <h1 className="section-heading">Integrating Technology in Business</h1>
            
            <p>
              Our Digital Innovation Centre (DIC) in Bengaluru, Karnataka focuses on
              advancing IoT and Artificial Intelligence to enhance existing machines
              and develop new digital products for emerging markets. With a mission to
              digitise manufacturing processes, DIC reduces rework, improves
              efficiency, and enhances product quality, aligned with Industry 4.0
              principles.
            </p>
            <p>
              Specialised teams in smart machines, embedded systems, sales,
              marketing, and culture collaborate to deliver innovative digital
              solutions. DIC’s platforms enable real-time plant monitoring,
              seamless data integration, and instant remote assistance.
            </p>
            <p>
              Through these innovations, DIC empowers clients to optimise
              operations, minimise downtime, and leverage advanced analytics—reinforcing
              our Company’s commitment to continuous innovation and sustainable growth.
            </p>
            <div className="highlight-callout">
              <p>
                In line with this vision, the DIC team in Bengaluru recently
                launched an enhanced version of its mobile app, designed to
                revolutionise machine data monitoring.
              </p>
            </div>
            <p>
              The upgraded app now enables users to monitor machines across various
              sites in real time. New features include access to historical data and
              custom reports, an improved user interface, and faster, more stable
              performance, empowering users with greater flexibility, insight, and
              control.
            </p>
          </div>
        </section>

        <section className="right-panel">
          <div className="roadmap-card">
            <h2>Future-Ready Digital Roadmap</h2>
            <p className="roadmap-intro">
              As we look ahead, our pioneering innovations are set to enhance
              operational efficiency, ensure long-term growth, and extend our impact
              beyond the technical textile industry.
            </p>
            <p className="focus-areas-label">Key focus areas include:</p>

            <div className="roadmap-list">
              {roadmap.map((item, idx) => (
                <div className="roadmap-item" key={idx}>
                  <div className="roadmap-header">
                    <span className="diamond-bullet">◆</span>
                    <strong>{item.title}</strong>
                  </div>
                  <p className="roadmap-body">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
