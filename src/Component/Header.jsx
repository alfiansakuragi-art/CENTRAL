import { useState } from "react";
import { scroll } from "../../services/tools";
import { toWhatsapp } from "../../services/tools";

function Header() {
  const [mode, setMode] = useState("");
  const [choose, setChoose] = useState("beranda");
  return (
    <header>
      <div className="navbar">
        <a href="#" className="logo">
          <div className="logo-mark">NCP</div>
          <div className="logo-text">
            <span className="top">NEW</span>
            <span className="bottom">CENTRAL</span>
          </div>
        </a>
        <nav className="nav-links">
          <a
            onClick={() => {
              scroll("hero");
              setChoose("beranda")
            }}
            className={choose === "beranda" ? "active" : ""}
          >
            Beranda
          </a>
          <a
            onClick={() => {
              scroll("product");
              setChoose("product")
            }}
            className={choose === "product" ? "active" : ""}
          >
            Produk
          </a>
          <a
            onClick={() => {
              scroll("testi");
              setChoose("testi")
            }}
            className={choose === "testi" ? "active" : ""}
          >
            Tentang Kami
          </a>
          <a
            onClick={() => {
              scroll("kontak");
              setChoose("kontak")
            }}
            className={choose === "kontak" ? "active" : ""}
          >
            Kontak
          </a>
        </nav>
        <div className="nav-right">
          <a
            onClick={() => {
              toWhatsapp("6285823023823");
            }}
            className="btn btn-primary"
          >
            Belanja Sekarang
          </a>
          <button
            className="hamburger"
            onClick={() => {
              setMode(mode === "open" ? "" : "open");
            }}
            aria-label="Buka menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${mode}`}>
        <a href="#beranda" className="active">
          Beranda
        </a>
        <a href="#produk">Produk</a>
        <a href="#tentang">Tentang Kami</a>
        <a href="#kontak">Kontak</a>
        <a href="#akun">Akun Saya</a>
      </div>
    </header>
  );
}

export default Header;
