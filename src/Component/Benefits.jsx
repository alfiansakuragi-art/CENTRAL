function Benefits() {
  return (
    <section className="keunggulan section">
      <div className="container">
        <h2 className="section-title">Keunggulan Kami</h2>
        <div className="keunggulan-grid">
          <div className="keunggulan-card">
            <div className="keunggulan-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
            </div>
            <h4>Harga Grosir</h4>
          </div>
          <div className="keunggulan-card">
            <div className="keunggulan-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2l3 6 7 1-5 5 1.5 7L12 18l-6.5 3L7 14 2 9l7-1z" />
              </svg>
            </div>
            <h4>Kualitas Ori</h4>
          </div>
          <div className="keunggulan-card">
            <div className="keunggulan-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 12h13l-3-3m3 3l-3 3M16 6h2l3 4v6h-2" />
                <circle cx="7" cy="18" r="2" />
                <circle cx="17" cy="18" r="2" />
              </svg>
            </div>
            <h4>Pengiriman Cepat</h4>
          </div>
          <div className="keunggulan-card">
            <div className="keunggulan-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2.5 21c0-4 3-6.5 6.5-6.5S15.5 17 15.5 21" />
                <circle cx="18" cy="9" r="2.5" />
                <path d="M17 14.2c2.6.3 4.5 2.3 4.5 5.3" />
              </svg>
            </div>
            <h4>Reseller Welcome</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
