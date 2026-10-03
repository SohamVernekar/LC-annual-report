import React from "react";
import asset8_0 from "../assets/pg8/bg8.webp";
import asset8_1 from "../assets/pg8/page8-symbol.webp";

const Pg8 = () => {
  return (
    <div className="page-8 page8">
      <div
        className="page8__background"
        style={{ backgroundImage: `url(${asset8_0})` }}
      />
      <div className="page8__overlay" />
      <div className="page8__geometry page8__geometry--left" />
      <div className="page8__geometry page8__geometry--right" />
      <img
        src={asset8_1}
        alt=""
        className="page8__symbol"
        draggable="false"
      />
      <div className="page8__content">
        <div className="page8__left">
          <h1 className="page8__left-title">
            Rooted in<br />Integrity,
          </h1>
        </div>
        <div className="page8__right">
          <h2 className="page8__right-title">
            <span>Shaped by</span>
            <strong>Values</strong>
          </h2>
          <p className="page8__description">
            Managing with purpose and accountability, we inspire confidence
            and aim to deliver excellence that stands the test of time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pg8;
