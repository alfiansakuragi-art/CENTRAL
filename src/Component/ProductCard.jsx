function ProductCard() {
  return (
    <section id="product">
      <div className="container">
        <h2 className="section-title">Bestseller Bulan Ini</h2>
        <div className="produk-grid">
          <div className="produk-card">
            <div className="produk-thumb">
              <svg width="70" height="90" viewBox="0 0 64 88">
                <rect
                  x="18"
                  y="24"
                  width="28"
                  height="52"
                  rx="8"
                  fill="#912544"
                />
                <rect
                  x="24"
                  y="10"
                  width="16"
                  height="16"
                  rx="4"
                  fill="#e7c98a"
                />
              </svg>
              <button className="fav-btn" aria-label="Simpan">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s-7-4.5-9.5-9C0.5 7 3 3 7 3c2.2 0 3.8 1.2 5 3 1.2-1.8 2.8-3 5-3 4 0 6.5 4 4.5 9-2.5 4.5-9.5 9-9.5 9z" />
                </svg>
              </button>
            </div>
            <div className="produk-body">
              <h4>Serum Wajah Lokal Premium</h4>
              <div className="produk-price">Rp 500.000</div>
              <div className="stars">
                ★★★★★ <span className="count">(0)</span>
              </div>
              <button className="btn btn-primary btn-sm">
                Tambah ke Keranjang
              </button>
            </div>
          </div>

          <div className="produk-card">
            <div className="produk-thumb">
              <svg width="60" height="90" viewBox="0 0 64 88">
                <rect
                  x="26"
                  y="10"
                  width="12"
                  height="26"
                  rx="4"
                  fill="#2c1a20"
                />
                <path
                  d="M22 36h20l-4 18a6 6 0 01-6 5h0a6 6 0 01-6-5z"
                  fill="#c94363"
                />
              </svg>
              <button className="fav-btn" aria-label="Simpan">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s-7-4.5-9.5-9C0.5 7 3 3 7 3c2.2 0 3.8 1.2 5 3 1.2-1.8 2.8-3 5-3 4 0 6.5 4 4.5 9-2.5 4.5-9.5 9-9.5 9z" />
                </svg>
              </button>
            </div>
            <div className="produk-body">
              <h4>Lipstik Kosmetik Terlaris</h4>
              <div className="produk-price">Rp 300.000</div>
              <div className="stars">
                ★★★★★ <span className="count">(0)</span>
              </div>
              <button className="btn btn-primary btn-sm">
                Tambah ke Keranjang
              </button>
            </div>
          </div>

          <div className="produk-card">
            <div className="produk-thumb">
              <svg width="60" height="90" viewBox="0 0 64 88">
                <rect
                  x="18"
                  y="20"
                  width="28"
                  height="30"
                  rx="8"
                  fill="#e6f0f4"
                  stroke="#912544"
                  strokeWidth="1.5"
                />
                <rect
                  x="24"
                  y="10"
                  width="16"
                  height="12"
                  rx="4"
                  fill="#912544"
                />
              </svg>
              <button className="fav-btn" aria-label="Simpan">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s-7-4.5-9.5-9C0.5 7 3 3 7 3c2.2 0 3.8 1.2 5 3 1.2-1.8 2.8-3 5-3 4 0 6.5 4 4.5 9-2.5 4.5-9.5 9-9.5 9z" />
                </svg>
              </button>
            </div>
            <div className="produk-body">
              <h4>Lotion Perawatan Kulit Stamuser</h4>
              <div className="produk-price">Rp 500.000</div>
              <div className="stars">
                ★★★★★ <span className="count">(0)</span>
              </div>
              <button className="btn btn-primary btn-sm">
                Tambah ke Keranjang
              </button>
            </div>
          </div>

          <div className="produk-card">
            <div className="produk-thumb">
              <svg width="70" height="80" viewBox="0 0 64 76">
                <ellipse cx="32" cy="46" rx="24" ry="22" fill="#e7c98a" />
                <rect
                  x="20"
                  y="8"
                  width="24"
                  height="20"
                  rx="8"
                  fill="#2c1a20"
                />
              </svg>
              <button className="fav-btn" aria-label="Simpan">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s-7-4.5-9.5-9C0.5 7 3 3 7 3c2.2 0 3.8 1.2 5 3 1.2-1.8 2.8-3 5-3 4 0 6.5 4 4.5 9-2.5 4.5-9.5 9-9.5 9z" />
                </svg>
              </button>
            </div>
            <div className="produk-body">
              <h4>Kosmetik Foundation Hemat Stoknya</h4>
              <div className="produk-price">Rp 500.000</div>
              <div className="stars">
                ★★★★★ <span className="count">(0)</span>
              </div>
              <button className="btn btn-primary btn-sm">
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
