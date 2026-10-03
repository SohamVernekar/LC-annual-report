function ReportFooter() {
  return (
    <footer className="pitch-footer" id="contact">
      <div className="pitch-footer__inner">
        <div className="pitch-footer__brand">
          <p className="pitch-footer__eyebrow">LohiaCorp &middot; Annual Report 2024&ndash;25</p>
          <h2>
            Built on Legacy.
            <span> Advancing Through Innovation.</span>
          </h2>
          <p className="pitch-footer__copy">
            Integrated machinery for the woven raffia industry &mdash; trusted in
            around 100 countries across packaging, agriculture, construction and geotextiles.
          </p>
          <div className="pitch-footer__actions">
            <a href="#cover" className="pitch-btn pitch-btn--solid">Back to Cover</a>
            <a href="#portfolio" className="pitch-btn pitch-btn--ghost">Explore Portfolio</a>
          </div>
        </div>
        <div className="pitch-footer__meta">
          <div>
            <h3>Headquarters</h3>
            <p>Kanpur &middot; Bengaluru, India</p>
          </div>
          <div>
            <h3>Global Units</h3>
            <p>Italy &middot; USA</p>
          </div>
          <div>
            <h3>Focus</h3>
            <p>R&amp;D &middot; IoT &middot; Circularity</p>
          </div>
        </div>
      </div>
      <div className="pitch-footer__bar">
        <span>&copy; 2025 LohiaCorp Limited. All rights reserved.</span>
        <span>Standalone FY25 figures. Map for illustration only.</span>
      </div>
    </footer>
  )
}

export default ReportFooter
