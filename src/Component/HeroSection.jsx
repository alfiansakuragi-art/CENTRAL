import { scroll } from "../../services/tools";
function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="hero-eyebrow">✦ Terpercaya sejak 2018</span>
          <h1>
            Pusat Grosir Kosmetik <span>Terlengkap</span> Di Palu
          </h1>
          <p>
            Belanja kosmetik grosir dengan harga terbaik, kualitas original, dan
            pengiriman cepat ke seluruh Indonesia. Cocok untuk reseller maupun
            pemakaian pribadi.
          </p>
          <div className="hero-ctas">
            <a onClick={() => {scroll("product")}} className="btn btn-primary">
              Lihat Katalog Produk
            </a>
            <a onClick={() => {scroll("kontak")}} className="btn btn-outline">
              Tentang Kami
            </a>
          </div>
          <div className="hero-dots">
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="hero-visual">
            <img src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkRXrGtrcvPH5DsZawguSb94Zpzhwi0Xf_oLOBHrZ56pxXw6t3EDobf1Ded2uAWMhgCJDd5xKz0Hh4J76P90J579i6B_qAMeWsobIKRr-gQnNp80OngT70zF7eNFM-ZucESxuDU=s1360-w1360-h1020-rw" alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
