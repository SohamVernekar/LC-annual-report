import React from 'react';
import asset15_0 from '../assets/pg15/bp.webp';
import asset15_1 from '../assets/pg15/earth.webp';
import asset15_2 from '../assets/pg15/tp.webp';

function Pg15() {
  return (
    <div className="page-15 page15">
      <div
        className="page15__background"
        style={{ backgroundImage: `url(${asset15_1})` }}
        aria-hidden="true"
      />
      <div className="page15__overlay" aria-hidden="true" />
      
      {/* Top and bottom pixelated chevrons */}
      <img src={asset15_2} alt="" className="page15__symbol page15__symbol--top" draggable="false" aria-hidden="true" />
      <img src={asset15_0} alt="" className="page15__symbol page15__symbol--bottom" draggable="false" aria-hidden="true" />

      <div className="page15__content">
        <div className="page15__left">
          <h1 className="page15__left-title">
            <span>Sustainable</span>
            <span>through</span>
          </h1>
        </div>

        <div className="page15__right">
          <h2 className="page15__right-title">
            <span>Growth</span>
            <span>Responsible</span>
            <strong>Practices</strong>
          </h2>

          <p className="page15__description">
            Our commitment to sustainable growth is anchored in environmental
            responsibility, social inclusivity, and strong governance, ensuring
            long-term value for our business, communities, and the planet. Guided
            by a well-defined ESG framework and purposeful Corporate Social
            Responsibility initiatives, we strive to achieve meaningful, holistic
            progress across every aspect of our operations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pg15;
