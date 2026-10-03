import worldMap from '../assets/pg7/world-map-base.webp'

function Pg7() {

  const bluePoints = [
    { x: 46.305, y: 16.499 }, { x: 92.252, y: 18.703 }, { x: 93.071, y: 23.598 }, { x: 2.829, y: 24.363 },
    { x: 54.449, y: 28.442 }, { x: 46.697, y: 30.065 }, { x: 50.633, y: 30.946 }, { x: 53.813, y: 31.075 },
    { x: 16.153, y: 31.545 }, { x: 47.113, y: 32.418 }, { x: 52.949, y: 32.726 }, { x: 11.362, y: 33.265 },
    { x: 50.054, y: 33.892 }, { x: 66.013, y: 35.806 }, { x: 55.629, y: 35.93 }, { x: 50.817, y: 37.425 },
    { x: 53.366, y: 37.699 }, { x: 52.899, y: 39.247 }, { x: 53.994, y: 40.177 }, { x: 58.801, y: 40.434 },
    { x: 66.548, y: 40.443 }, { x: 59.74, y: 41.486 }, { x: 64.381, y: 41.699 }, { x: 63.115, y: 42.401 },
    { x: 53.044, y: 42.617 }, { x: 83.0, y: 42.757 }, { x: 56.26, y: 42.973 }, { x: 49.686, y: 43.931 },
    { x: 79.79, y: 44.177 }, { x: 57.454, y: 44.408 }, { x: 64.655, y: 44.856 }, { x: 72.015, y: 45.176 },
    { x: 56.794, y: 45.679 }, { x: 58.734, y: 46.212 }, { x: 45.592, y: 46.767 }, { x: 56.923, y: 47.304 },
    { x: 65.84, y: 47.41 }, { x: 48.259, y: 48.007 }, { x: 70.629, y: 49.853 }, { x: 50.654, y: 49.883 },
    { x: 54.849, y: 50.11 }, { x: 58.611, y: 50.828 }, { x: 60.788, y: 50.98 }, { x: 70.409, y: 51.729 },
    { x: 61.504, y: 51.778 }, { x: 17.702, y: 52.22 }, { x: 24.405, y: 52.221 }, { x: 45.162, y: 52.732 },
    { x: 62.642, y: 52.741 }, { x: 71.522, y: 53.614 }, { x: 47.219, y: 54.085 }, { x: 55.144, y: 54.514 },
    { x: 22.046, y: 56.18 }, { x: 20.918, y: 56.281 }, { x: 43.321, y: 56.478 }, { x: 21.467, y: 57.152 },
    { x: 59.144, y: 57.257 }, { x: 72.731, y: 57.358 }, { x: 22.344, y: 57.834 }, { x: 46.958, y: 58.193 },
    { x: 74.626, y: 58.863 }, { x: 79.646, y: 59.12 }, { x: 44.139, y: 59.285 }, { x: 47.49, y: 59.892 },
    { x: 48.791, y: 59.917 }, { x: 27.478, y: 60.085 }, { x: 78.932, y: 60.41 }, { x: 46.925, y: 60.507 },
    { x: 57.342, y: 60.588 }, { x: 68.2, y: 61.162 }, { x: 45.615, y: 61.407 }, { x: 29.835, y: 61.499 },
    { x: 44.71, y: 61.511 }, { x: 25.856, y: 61.99 }, { x: 50.609, y: 63.457 }, { x: 55.755, y: 64.194 },
    { x: 82.091, y: 64.781 }, { x: 73.143, y: 64.964 }, { x: 24.21, y: 64.964 }, { x: 75.49, y: 65.523 },
    { x: 57.355, y: 65.647 }, { x: 54.8, y: 66.121 }, { x: 52.788, y: 67.078 }, { x: 54.887, y: 68.222 },
  ]

  const greenPoints = [
    { x: 49.235, y: 38.785 }, { x: 19.303, y: 41.472 }, { x: 68.495, y: 50.818 }, { x: 67.679, y: 58.528 },
  ]

  return (
    <main className="page page-seven">
      <section className="hero-grid">
        <div>
          <h1 className="kicker">
            Geographical Presence
            <br />
            <span className="blue">Rooted Locally,</span>
            <br />
            <span className="yellow">Respected Globally</span>
          </h1>
          <p className="lead">
            Built on a strong foundation of innovation and trust, Lohia has earned the respect of partners and customers
            in around 100 countries, proving that local values can drive global excellence.
          </p>
        </div>
        <div className="presence">
          <h2>Global Presence:</h2>
          <div className="country-list">
            Afghanistan | Algeria | Angola | Argentina | Azerbaijan | Bangladesh | Bhutan | Bolivia | Brazil | Bulgaria |
            Burkina Faso | Burundi | Cameroon | Canada | Chile | China | Colombia | Dominican Rep. | DRC | Ecuador |
            Egypt | El Salvador | Estonia | Ethiopia | Georgia | Germany | Ghana | Greece | Guatemala | Guinea | Guyana |
            Honduras | India | Indonesia | Iraq | Côte d&apos;Ivoire | Japan | Jordan | Kazakhstan | Kenya | Kuwait |
            Kyrgyzstan | Lebanon | Liberia | Libya | Lithuania | Madagascar | Malawi | Malaysia | Mali | Mauretania |
            Mauritius | Mexico | Morocco | Mozambique | Myanmar | Nepal | Nicaragua | Nigeria | Oman | Pakistan |
            Paraguay | Peru | Philippines | Poland | Portugal | Qatar | Romania | Rwanda | Saudi Arabia | Senegal |
            Serbia | South Africa | South Korea | Spain | Sri Lanka | Sudan | Eswatini | Syria | Tanzania | Thailand |
            Togo | Tunisia | Türkiye | Turkmenistan | UAE | Uganda | Ukraine | USA | Uzbekistan | Venezuela | Vietnam |
            Yemen | Zambia | Zimbabwe
          </div>
        </div>
      </section>

      <section className="map-section" aria-label="Global presence map">
        <div className="map-viewport" id="mapViewport" aria-label="Map view">
          <div className="map-content" id="mapContent">
            <img className="map-base" src={worldMap} alt="World map showing LohiaCorp global presence" loading="lazy" decoding="async" />
            <div id="markers">
              {bluePoints.map((point, index) => (
                <span
                  key={`blue-${index}`}
                  className="marker blue"
                  aria-label="Global presence location"
                  style={{
                    '--x': `${point.x}%`,
                    '--y': `${point.y}%`,
                    '--delay': `${0.5 + index * 0.018}s`,
                  }}
                />
              ))}
              {greenPoints.map((point, index) => (
                <span
                  key={`green-${index}`}
                  className="marker green"
                  aria-label="Manufacturing location"
                  style={{
                    '--x': `${point.x}%`,
                    '--y': `${point.y}%`,
                    '--delay': `${0.8 + index * 0.15}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="info-grid">
        <div className="location-box">
          <h3 className="location-title">
            <span className="pin-icon" aria-hidden="true" />
            Manufacturing Locations
          </h3>
          <ul>
            <li>India – Kanpur, Bengaluru</li>
            <li>Italy – Como</li>
            <li>USA – Burlington, North Carolina</li>
          </ul>
        </div>
        <div className="disclaimer">
          <h4>Disclaimer</h4>
          <p>This map is a creative representation designed to illustrate our presence and reach. It is intended for visual depiction and may not reflect precise geographical boundaries.</p>
        </div>
      </section>
    </main>
  )
}

export default Pg7
