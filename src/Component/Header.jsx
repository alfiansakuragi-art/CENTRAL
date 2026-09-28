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
              scroll("brand");
              setChoose("brand")
            }}
            className={choose === "brand" ? "active" : ""}
          >
            Cek brand
          </a>
          <a
            onClick={() => {
              scroll("kontak");
              setChoose("testi")
            }}
            className={choose === "testi" ? "active" : ""}
          >
            Tentang Kami
          </a>
        </nav>
        <div className="nav-right">
          <a
            onClick={() => {
              toWhatsapp("085396592892");
            }}
            className="btn btn-primary"
            id="action-btn-shoop"
          >
            Chat admin
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
        <a href="#brand">Cek brand</a>
        <a href="#tentang">Tentang Kami</a>
      </div>
    </header>
  );
}

export default Header;
