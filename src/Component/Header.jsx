import { useState } from "react";
import { scroll } from "../../services/tools";
import { toWhatsapp } from "../../services/tools";

function Header() {
  const [mode, setMode] = useState("");
  const [choose, setChoose] = useState("beranda");
  return (
    <header>
      <div className="navbar">
        <a href="#" className="logo-ncp">
          <img className="logo" src="https://scontent.fupg6-1.fna.fbcdn.net/v/t39.30808-6/294160788_430569722425408_5573010397589931382_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5YQGS5h3toAQ7kNvwFnoPZO&_nc_oc=AdoEhn9a1OjQunTFs0F8IRZGPRDkKdfEWv5DLbdwjxucCvc98EzDU_BhX3-duBHnieM&_nc_zt=23&_nc_ht=scontent.fupg6-1.fna&_nc_gid=sGsY9unO_1yXEccjBi0w4w&_nc_ss=7b289&oh=00_AQPucrgHeLWfLXStTujPKRCWndmqO7CZXKcFAmdDyvOyjw&oe=6AC2FBAC" alt="logo" />
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
              scroll("promo");
              setChoose("promo")
            }}
            className={choose === "promo" ? "active" : ""}
          >
            Promo
          </a>
          <a
            onClick={() => {
              scroll("shopee");
              setChoose("shopee")
            }}
            className={choose === "shopee" ? "active" : ""}
          >
            Shopee
          </a>
          <a
            onClick={() => {
              scroll("reseller");
              setChoose("reseller")
            }}
            className={choose === "reseller" ? "active" : ""}
          >
            Reseller
          </a>
          <a
            onClick={() => {
              scroll("listing");
              setChoose("listing")
            }}
            className={choose === "listing" ? "active" : ""}
          >
            Listing
          </a>
          <a
            onClick={() => {
              scroll("jastip");
              setChoose("jastip")
            }}
            className={choose === "jastip" ? "active" : ""}
          >
            Jastip
          </a>
          <a
            onClick={() => {
              scroll("kontak");
              setChoose("kontak")
            }}
            className={choose === "kontak" ? "active" : ""}
          >
            Tentang Kami
          </a>
        </nav>
        <div className="nav-right">
          <a
            onClick={() => {
              scroll("review");
            }}
            className="btn btn-primary"
            id="action-btn-shoop"
          >
            Comment / Review?
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
        <a href="#promo">Promo</a>
        <a href="#shopee">Shopee</a>
        <a href="#reseller">Reseller</a>
        <a href="#listing">Listing</a>
        <a href="#jastip">Jastip</a>
        <a href="#review">Review</a>
        <a href="#kontak">Tentang Kami</a>
      </div>
    </header>
  );
}

export default Header;
