import { useEffect, useState } from "react";
import { scroll } from "../../services/tools";

function HeroSection() {
  const foto = [
    "https://asset.tribunnews.com/qJQijt8t_FYJlE45Joc6mmxG5fg=/1200x675/filters:upscale():quality(30):format(webp):focal(0.5x0.5:0.5x0.5)/palu/foto/bank/originals/Suasana-pada-saat-re-opening-toko-Stationery-Cosmetics-Jumat-17f.jpg",
    "https://tutura.id/assets/images/news/tinymce/Toko_Central_Cosmetic.jpg",
  ];

  const [picture, setPicture] = useState(foto[0]);
  const [attempt, setAttempt] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setAttempt((prev) => (prev + 1) % foto.length);
        setVisible(true);
      }, 300);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setPicture(foto[attempt]);
  }, [attempt]);
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="hero-eyebrow">✦ Terpercaya sejak 2018</span>
          <div className="hero-detail">
            <h1>
              Pusat Grosir Kosmetik <span>Terlengkap</span> Di Palu
            </h1>
            <p>
              Belanja kosmetik grosir dengan harga terbaik, kualitas original, dan
              pengiriman cepat ke seluruh Indonesia. Cocok untuk reseller maupun
              pemakaian pribadi.
            </p>
          </div>
          <div className="hero-dots">
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>
          <div className="hero-ctas">
            <a
              onClick={() => {
                scroll("kontak");
              }}
              className="btn btn-primary"
            >
              Tentang Kami
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src={picture}
            alt="foto"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity .3s ease-in-out",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
