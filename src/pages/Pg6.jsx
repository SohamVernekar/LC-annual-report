import agrotex from '../assets/pg6/01_Agrotex.png'
import buildtex from '../assets/pg6/02_Buildtex.png'
import geotex from '../assets/pg6/03_Geotex.png'
import packtex from '../assets/pg6/04_Packtex.png'
import special from '../assets/pg6/05_Special_Applications.png'
import machinery from '../assets/pg6/machinery.png'

function Pg6() {
  return (
    <div className="page page-six">
      <main className="content">
        {/* LEFT column: kicker, heading, and 3 application cards */}
        <section className="left">
          <p className="kicker">Product Applications</p>
          <h1>
            Strengthening Industries,
            <strong>Advancing Progress</strong>
          </h1>

          <div className="application-list application-list--left">
            <article className="app">
              <div className="photo"><img src={agrotex} alt="Agrotex" loading="lazy" decoding="async" /></div>
              <div className="box">
                <h3>Agrotex</h3>
                <p>Agro-textiles are playing an important role in the fields of agriculture, horticulture, animal husbandry,
                  and fishing. The wide-width fabrics play a crucial role in protecting crops and livestock from environmental
                  stresses while enhancing yields and sustainability.</p>
              </div>
            </article>

            <article className="app">
              <div className="photo"><img src={buildtex} alt="Buildtex" loading="lazy" decoding="async" /></div>
              <div className="box">
                <h3>Buildtex</h3>
                <p>This comprises a wide variety of products and solutions, such as tarpaulin, roof underlayment, scaffolding
                  fabric, that are engineered for strength and durability to meet specific demands of construction and building
                  applications.</p>
              </div>
            </article>

            <article className="app">
              <div className="photo"><img src={geotex} alt="Geotex" loading="lazy" decoding="async" /></div>
              <div className="box">
                <h3>Geotex</h3>
                <p>Geo-textiles are durable and permeable wide-width fabrics designed for use in civil engineering and
                  geotechnical applications such as road construction, embankments, retaining walls, erosion control, and
                  soil contamination prevention.</p>
              </div>
            </article>
          </div>
        </section>

        {/* RIGHT column: 2 more app cards + machinery image (FIXED: no longer absolute-positioned) */}
        <section className="right">
          <div className="application-list application-list--right">
            <article className="app">
              <div className="photo"><img src={packtex} alt="Packtex" loading="lazy" decoding="async" /></div>
              <div className="box">
                <h3>Packtex</h3>
                <p>A key category, it offers flexible packaging, storage, and protection solutions, with capacities ranging
                  from 5 kg to 2,000 kg for a wide range of industrial, agricultural, and consumer products. The favourable
                  weight-to-capacity ratio ensures that minimal weight is added while securing goods. Reinforced with UV
                  additives and inner liners/coatings, the woven fabrics are built for outdoor storage, and are water- and
                  dust-proof.</p>
              </div>
            </article>

            <article className="app">
              <div className="photo"><img src={special} alt="Special Applications" loading="lazy" decoding="async" /></div>
              <div className="box">
                <h3>Special Applications</h3>
                <p>This category encompasses high-performance solutions engineered for unique and demanding applications
                  across various industries. These include dunnage and silage bags for secure cargo packaging and protection,
                  carpet backing and jute replacement yarn for enhancing flooring and textile applications, and ropes/twines
                  and VCI fabrics for versatile solutions in construction and corrosion prevention.</p>
              </div>
            </article>
          </div>

          {/* FIXED: .machine is now in normal flow — no escaping its grid column */}
          <div className="machine">
            <img src={machinery} alt="LohiaCorp machinery" loading="lazy" decoding="async" />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Pg6
