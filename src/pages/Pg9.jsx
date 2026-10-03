import React from "react";
import asset9_0 from "../assets/pg9/bg9.png";
import asset9_1 from "../assets/pg9/founder.png";

function Pg9() {
  return (
    <div className="page-9 page">
      <div className="background" style={{ backgroundImage: `url(${asset9_0})` }} />
      <div className="portrait-wrap">
        <img src={asset9_1} alt="Chairman and Managing Director" className="portrait" />
      </div>
      <section className="content">
        <div className="left-column">
          <div className="heading">
            <div className="eyebrow">From the</div>
            <h1>Chairman and Managing<br className="desktop-break" /> Director's Desk</h1>
          </div>
        </div>
        <div className="quote-column">
          <div className="quote-mark">“</div>
          <p className="quote">
            FY25 has been a year of<br className="desktop-break" />
            focused consolidation for<br className="desktop-break" />
            Lohia. In an environment<br className="desktop-break" />
            marked by both opportunities<br className="desktop-break" />
            and challenges, we have<br className="desktop-break" />
            relied on our core strengths<br className="desktop-break" />
            while endeavouring to adapt<br className="desktop-break" />
            with agility.
          </p>
        </div>
        <article className="letter">
          <p className="salutation">Dear Shareholders,</p>
          <p>I present to you Lohia Corp’s Annual Report for FY24-25, post successful implementation of the Scheme of Arrangement.</p>
          <p>This year’s theme of the Report <strong>“Built on Legacy, Advancing through Innovation”</strong>, recognises our legacy and our thrust to lead by innovation.</p>
          <p>Lohia Corp has become a name synonymous with <em>Integrity, Quality &amp; Value.</em> We stand today on a strong foundation laid by decades of resilience and performance. While we cherish our legacy, we are conscious that legacy alone is not enough in a global market that’s constantly evolving. We continue to invest in and focus on innovation - in our people, processes, and products; without losing sight of our core values.</p>
          <p>During FY25, our consolidated revenue from operations reached ₹13,768.72 million, EBITDA stood at ₹2,286.02 million and profit after tax was ₹1,178.41 million. These results reflect our continued focus on operational efficiency and delivering value across our businesses.</p>
          <p>We are expanding our product portfolio with a focus on recycling machines, resulting from our commitment to innovation and sustainability.</p>
          <p>By embracing digital transformation and building organisational agility, we are confident of navigating global uncertainties and unlocking long-term value for all the stakeholders.</p>
          <p>On behalf of the Board, I would like to express heartfelt gratitude to our employees, customers, bankers, statutory authorities and all the business partners whose support and trust continue to inspire us to aim higher and lead with purpose.</p>
          <p className="regards">With regards,</p>
          <p className="signature">Raj Kumar Lohia</p>
          <p className="designation">Chairman and Managing Director</p>
        </article>
      </section>
    </div>
  );
}

export default Pg9;
