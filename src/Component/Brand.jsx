import { useEffect, useState } from "react";
import { getApi } from "../../services/api";

function Brand() {
  const [brand, setBrand] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedBrand(value === "" ? null : value);
  };
  const filter =
    selectedBrand === null
      ? []
      : brand.filter((item) =>
        item.name
          .toLocaleLowerCase()
          .includes(selectedBrand.toLocaleLowerCase()),
      );

  useEffect(() => {
    getApi("https://6a637088b30b52361e1a4b30.mockapi.io/BRAND/BRAND", setBrand);
  }, []);

  return (
    <section id="brand" className="section brand-section">
      <div className="container">
        <div className="brand-header">
          <span className="hero-eyebrow">Cek Brand</span>
          <h2 className="section-title">Cek Brand Kamu di NewCentral</h2>
          <p className="brand-subtitle">
            sahabat central boleh cek brand favorite apakah ada di NewCentral loh
          </p>

          <div className="brand-search-wrapper">
            <div className="brand-search-box">
              <svg
                className="brand-search-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                className="brand-search-input"
                onChange={handleChange}
                type="text"
                placeholder="Cari brand kamu (contoh: skintific / glad2glow)..."
                value={selectedBrand || ""}
              />
              {selectedBrand && (
                <button
                  type="button"
                  className="brand-clear-btn"
                  onClick={() => setSelectedBrand(null)}
                  aria-label="Hapus pencarian"
                >
                  ✕
                </button>
              )}
            </div>
            <div className="brand-count-badge">
              <span>{filter.length} brand ditemukan</span>
            </div>
          </div>
        </div>

        {filter.length > 0 ? (
          <div className="brand-grid">
            {filter.map((item) => (
              <div key={item.id} className="brand-card">
                <div className="brand-card-top">
                  <span className="brand-tier-badge">{item.tier || "Official"}</span>
                </div>
                <div className="brand-card-body">
                  <div className="brand-avatar">
                    {item.name ? item.name.charAt(0).toUpperCase() : "B"}
                  </div>
                  <h3 className="brand-name">{item.name}</h3>
                  <span className="brand-category">{item.kategori || "Beauty & Care"}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="brand-empty-state">
            <div className="brand-empty-icon">🔍</div>
            <h4>Brand tidak ditemukan</h4>
            <p>
              {selectedBrand
                ? `Tidak ada hasil untuk kata kunci "${selectedBrand}". Coba cari dengan kata kunci lain.`
                : "Ketik nama brand pada kolom pencarian di atas untuk mulai mencari."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Brand;
