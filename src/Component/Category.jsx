function Category() {
  return (
    <section className="section">
      <div className="container">
        <div className="kategori-grid">
          <div className="kategori-card">
            <div className="kategori-thumb">
              <svg
                width="70"
                height="70"
                viewBox="0 0 64 64"
                fill="none"
                stroke="#912544"
                strokeWidth="1.8"
              >
                <circle cx="32" cy="26" r="14" />
                <path
                  d="M20 44c0-8 5-12 12-12s12 4 12 12"
                  strokeLinecap="round"
                />
                <path d="M18 50h28" strokeLinecap="round" />
              </svg>
            </div>
            <div className="kategori-body">
              <h3>Perawatan Wajah</h3>
              <p>
                Serum, pelembap, dan skincare wajah pilihan untuk semua jenis
                kulit.
              </p>
            </div>
          </div>
          <div className="kategori-card">
            <div className="kategori-thumb">
              <svg
                width="70"
                height="70"
                viewBox="0 0 64 64"
                fill="none"
                stroke="#912544"
                strokeWidth="1.8"
              >
                <rect x="26" y="10" width="12" height="26" rx="4" />
                <path d="M22 36h20l-4 18a6 6 0 01-6 5h0a6 6 0 01-6-5z" />
              </svg>
            </div>
            <div className="kategori-body">
              <h3>Makeup</h3>
              <p>
                Lipstik, foundation, dan palet makeup dengan pigmentasi terbaik.
              </p>
            </div>
          </div>
          <div className="kategori-card">
            <div className="kategori-thumb">
              <svg
                width="70"
                height="70"
                viewBox="0 0 64 64"
                fill="none"
                stroke="#912544"
                strokeWidth="1.8"
              >
                <rect x="18" y="20" width="28" height="30" rx="8" />
                <rect x="24" y="10" width="16" height="12" rx="4" />
              </svg>
            </div>
            <div className="kategori-body">
              <h3>Perawatan Kulit</h3>
              <p>
                Lotion, sunscreen, dan produk perawatan tubuh untuk kulit sehat.
              </p>
            </div>
          </div>
          <div className="kategori-card">
            <div className="kategori-thumb">
              <svg
                width="70"
                height="70"
                viewBox="0 0 64 64"
                fill="none"
                stroke="#912544"
                strokeWidth="1.8"
              >
                <circle cx="24" cy="40" r="12" />
                <line x1="33" y1="31" x2="48" y2="14" />
                <line x1="44" y1="10" x2="52" y2="18" />
              </svg>
            </div>
            <div className="kategori-body">
              <h3>Aksesoris</h3>
              <p>
                Kuas, spons, dan aksesoris makeup penunjang tampilan sempurna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
