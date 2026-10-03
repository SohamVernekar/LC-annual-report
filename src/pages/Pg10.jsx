import React from 'react'

import asset10_0 from '../assets/pg10/anupam agarwal.webp';
import asset10_1 from '../assets/pg10/basant seth.webp';
import asset10_2 from '../assets/pg10/bg10.webp';
import asset10_3 from '../assets/pg10/dinesh kumar mithal.webp';
import asset10_4 from '../assets/pg10/gaurav lohia.webp';
import asset10_5 from '../assets/pg10/gaurav swaroop.webp';
import asset10_6 from '../assets/pg10/keith reddy padmaja reddy.webp';
import asset10_7 from '../assets/pg10/naresh kumar gupta.webp';
import asset10_8 from '../assets/pg10/paritosh kumar mukherjee.webp';
import asset10_9 from '../assets/pg10/potrait bg.webp';
import asset10_10 from '../assets/pg10/raj kumar lohia.webp';
import asset10_11 from '../assets/pg10/rajendra kumar arya.webp';
import asset10_12 from '../assets/pg10/shikha srivastava.webp';
import asset10_13 from '../assets/pg10/ujjal de.webp';

const committeeNames = {
  yellow: 'Audit Committee',
  blue: 'Nomination and Remuneration Committee',
  green: 'Corporate Social Responsibility Committee',
  red: 'Risk Management Committee',
  teal: 'Stakeholder Relationship Committee'
};

const directorsLeft = [
  {
    image: asset10_10,
    name: 'Mr. Raj Kumar Lohia',
    role: 'Chairman and Managing Director',
    badges: [
      { role: 'C', color: 'yellow' },
      { role: 'M', color: 'blue' },
      { role: 'M', color: 'teal' }
    ]
  },
  { image: asset10_8, name: 'Mr. Paritosh Kumar Mukherjee', role: 'Whole-time Director', badges: [] },
  {
    image: asset10_11,
    name: 'Mr. Rajendra Kumar Arya',
    role: 'Whole-time Director',
    badges: [{ role: 'M', color: 'red' }]
  },
  { image: asset10_4, name: 'Mr. Gaurav Lohia', role: 'Whole-time Director and Chief Operating Officer', badges: [] },
  {
    image: asset10_13,
    name: 'Mr. Ujjal De',
    role: 'Non-Executive Director',
    badges: [{ role: 'M', color: 'green' }]
  },
  {
    image: asset10_5,
    name: 'Mr. Gaurav Swarup',
    role: 'Independent Director',
    badges: [{ role: 'C', color: 'blue' }]
  }
];

const directorsRight = [
  {
    image: asset10_3,
    name: 'Mr. Dinesh Kumar Mittal',
    role: 'Independent Director',
    badges: [
      { role: 'C', color: 'red' },
      { role: 'M', color: 'green' }
    ]
  },
  {
    image: asset10_1,
    name: 'Mr. Basant Seth',
    role: 'Independent Director',
    badges: [
      { role: 'C', color: 'yellow' },
      { role: 'M', color: 'blue' },
      { role: 'M', color: 'green' },
      { role: 'M', color: 'teal' }
    ]
  },
  {
    image: asset10_6,
    name: 'Ms. Keith Reddy Padmaja Reddy',
    role: 'Independent Director',
    badges: [{ role: 'M', color: 'yellow' }]
  },
  {
    image: asset10_7,
    name: 'Mr. Naresh Kumar Gupta',
    role: 'Independent Director',
    badges: [
      { role: 'C', color: 'green' },
      { role: 'M', color: 'yellow' },
      { role: 'M', color: 'red' }
    ]
  }
];

const kmp = [
  {
    image: asset10_0,
    name: 'Mr. Anupam Agarwal',
    role: 'Chief Financial Officer',
    badges: [{ role: 'M', color: 'red' }]
  },
  { image: asset10_12, name: 'Ms. Shikha Srivastava', role: 'Company Secretary and Compliance Officer', badges: [] }
];

function Badges({ items }) {
  if (!items || !items.length) return null;
  return (
    <div className="pg10-badges">
      {items.map((b, i) => (
        <span
          key={i}
          className={`pg10-badge pg10-badge-${b.color}`}
          title={`${b.role === 'C' ? 'Chairman' : 'Member'} - ${committeeNames[b.color] || ''}`}
        >
          {b.role}
        </span>
      ))}
    </div>
  );
}

function Person({ person }) {
  return (
    <article className="pg10-person">
      <div className="pg10-portrait-frame">
        <div className="pg10-portrait-logo" aria-hidden="true" />
        <img className="pg10-person-img" src={person.image} alt={person.name} />
      </div>
      <div className="pg10-person-name">{person.name}</div>
      <div className="pg10-person-role">{person.role}</div>
      <Badges items={person.badges} />
    </article>
  );
}

function Legend() {
  const items = [
    ['yellow', 'Audit Committee'],
    ['blue', 'Nomination and Remuneration Committee'],
    ['green', 'Corporate Social Responsibility Committee'],
    ['red', 'Risk Management Committee'],
    ['teal', 'Stakeholder Relationship Committee']
  ];
  return (
    <div className="pg10-legend">
      {items.map(([c, label], i) => (
        <div className="pg10-legend-row" key={i}>
          <span className={`pg10-legend-dot ${c}`}></span>
          <span>{label}</span>
        </div>
      ))}
      <div className="pg10-legend-divider"></div>
      <div className="pg10-legend-row-inline">
        <div className="pg10-legend-sub">
          <span className="pg10-badge pg10-badge-gray">C</span>
          <span>Chairman</span>
        </div>
        <div className="pg10-legend-sub">
          <span className="pg10-badge pg10-badge-gray">M</span>
          <span>Member</span>
        </div>
      </div>
    </div>
  );
}

function Pg10() {
  return (
    <div className="page-10 page" style={{ '--bg': `url("${asset10_2}")` }}>
      <section className="pg10-content">
        <div className="pg10-intro">
          <h1>Our Visionary<br /><strong>Leaders</strong></h1>
          <p>With strong and experienced leadership at the helm, we uphold robust governance policies that<br className="desktop-only" /> ensure transparency, accountability, and integrity.</p>
        </div>

        <div className="pg10-columns">
          <section className="pg10-left-column">
            <h2>Board of Directors</h2>
            <div className="pg10-people-grid pg10-left-grid">
              {directorsLeft.map((p, i) => <Person person={p} key={i} />)}
            </div>
          </section>

          <section className="pg10-right-column">
            <div className="pg10-people-grid pg10-right-grid">
              {directorsRight.map((p, i) => <Person person={p} key={i} />)}
            </div>

            <div className="pg10-kmp-section">
              <h2>Key Managerial Personnel (KMP)</h2>
              <div className="pg10-kmp-layout">
                <div className="pg10-people-grid pg10-kmp-grid">
                  {kmp.map((p, i) => <Person person={p} key={i} />)}
                </div>
                <Legend />
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Pg10;
