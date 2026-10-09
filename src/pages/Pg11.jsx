import React from "react";
import asset11_1 from '../assets/pg11/machine.webp';
import asset11_2 from '../assets/pg11/training-centre.webp';

const LeftIntro = () => (
  <section className="left-col">
    <div className="eyebrow">Our Training Institute</div>
    <h1>
      <span>TTRC - The Academy of</span>
      <span>Technical Textiles</span>
      <strong>Shaping Skills, Empowering Growth</strong>
    </h1>

    <div className="intro-grid">
      <div className="intro-copy">
        <p className="lead">
          TTRC (Technical Training and Research Centre) was established in 2012
          with a vision to bridge the skill gap in the Technical Textile
          industry. Today, TTRC stands as a testament to excellence.
        </p>
        <p>
          TTRC not only supports industry-led skill development initiatives but
          also provides customers with in-depth technical knowledge on material
          testing.
        </p>
        <p>
          The Centre also has a lab which is NABL-accredited as per ISO 17025:
          2017, a BIS-recognised testing laboratory for all kinds of plastic
          woven sack products as per BIS &amp; ISO Standards.
        </p>
        <p>
          TTRC is also actively involved in developing new product applications
          on the machines manufactured by the Company.
        </p>
      </div>

      <div className="accreditations">
        <div className="accreditation">
          <h2>NABL Accreditation by NABL (India)</h2>
          <p>Under ISO 17025:2017</p>
        </div>
        <div className="rule" />
        <div className="accreditation">
          <h2>ILAC (International Laboratory Accreditation Co-operation)</h2>
          <p>for Testing and Quality Control</p>
        </div>
      </div>
    </div>

    <div className="machine-wrap">
      <div className="yellow-shape shape-a" />
      <div className="yellow-shape shape-b" />
      <img src={asset11_1} alt="Technical textile manufacturing machinery" />
    </div>
  </section>
);

const RightIntro = () => (
  <section className="right-col">
    <div className="two-up">
      <article>
        <h3>Collaborative Growth through Strategic Alliances</h3>
        <p>
          Our MoU with CIPET (Central Institute of Petrochemicals Engineering
          and Technology) strengthens our commitment to sector-wide training
          initiatives. In parallel, NDAs with leading petrochemical and Raffia
          companies enable us to pursue advanced R&amp;D and product development
          projects.
        </p>
        <h3>Certification and Beyond</h3>
        <p>
          As an accredited certifying body, TTRC not only trains but also
          certifies apprentices, delivering a complete solution from learning
          to recognition.
        </p>
        <h3>Expanding Horizons</h3>
        <p>
          Beyond the Raffia sector, we support organisations looking to launch
          apprenticeship programmes, guiding them through setup, structure,
          and incentives. Our goal is to be a trusted partner in workforce
          development, no matter the industry.
        </p>
      </article>

      <article>
        <h3>MTTC (Manufacturing Technology Training Centre)</h3>
        <p>
          Established in 2019, the Manufacturing Technology Training Centre
          (MTTC) is a dedicated in-house training facility aimed at generating
          skilled manpower to meet our internal manufacturing requirements.
        </p>
        <p>
          The MTTC offers courses based on German Dual Vocational Education
          training, which involves a combination of theoretical and practical
          learning. The Centre offers a structured two-year technical
          training programme for internal staff and new recruits.
        </p>
        <h4>The curriculum includes hands-on training and classroom instruction
          for key roles such as:</h4>
        <ul className="mttc-roles">
          <li>Assembly Fitters</li>
          <li>Precision Machinists</li>
          <li>Electrical Assembly Fitters</li>
          <li>Sheet Metal Fabrication Technicians</li>
        </ul>
      </article>
    </div>

    <div className="raffia">
      <div>
        <h3>The Raffia Apprenticeship Programme — Building Talent for Tomorrow</h3>
        <p>
          The programme covers a comprehensive curriculum with modules and
          course qualification packs as part of the Government of India's
          National Skill Mission. From Loom and Tape Winder Operators to
          Extrusion Line Technicians, trainees gain hands-on training,
          knowledge, and confidence to operate complex Raffia machinery and
          take on industry roles with competence.
        </p>
        <p>
          Through formal apprenticeships, we create employment-ready talent
          while also offering companies in the Raffia sector access to a skilled
          workforce.
        </p>
        <div className="stats">
          <div className="stat-pill"><strong>300</strong><span>(as of 31<sup>st</sup> March 2025)<br/>Engineers and Supervisors Trained</span></div>
          <div className="stat-pill"><strong>3,500</strong><span>Operators Trained</span></div>
        </div>
      </div>
    </div>

    <div className="news">
      <h3>TTRC in the News</h3>
      <div className="news-grid">
        <div className="news-img-wrap">
          <img src={asset11_2} alt="TTRC training centre building" />
        </div>
        <div className="news-card">
          <p>
            We marked a key milestone with the successful execution of the
            SASMIRA–TTRC project on polyester yarn weaving (geo-textiles),
            supported by the National Technical Textiles Mission (NTTM),
            Ministry of Textiles, Government of India.
          </p>
          <p>
            On 9<sup>th</sup> January 2025, our CMD, Shri Raj Kumar Lohia, was
            felicitated by Mr. Sanjay Savkare, Hon’ble Cabinet Minister of
            Textiles, Maharashtra, for his leadership in advancing technical
            textile machinery in India.
          </p>
          <p>
            The event also witnessed the launch of the SASMIRA–Lohia Corp™
            Circular Weaving Technology — a breakthrough solution for
            manufacturing high-strength, seamless tubular geo-textiles.
          </p>
        </div>
      </div>
    </div>
  </section>
);

function Pg11() {
  return (
    <div className="page-11 page">
      <div className="dot-pattern" />
      <div className="bg-shape bg-left" />
      <div className="bg-shape bg-right" />
      <div className="content">
        <LeftIntro />
        <RightIntro />
      </div>
    </div>
  );
}

export default Pg11;
