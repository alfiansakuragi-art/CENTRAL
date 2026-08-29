function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer id="kontak">
      <div className="container">
        <h2 className="footer-title">NCP FAQ</h2>
        <div className="footer-grid">
          <div className="footer-col">
            <h5>Tentang Kami</h5>
            <p>
              NewCentralPalu adalah pusat belanja kosmetik grosir terpercaya
              dengan produk original, harga bersaing dengan berbagai varian
              discount serta pelayanan yang ramah tamah
            </p>
          </div>

          <div className="footer-col">
            <h5>Ah ribet Males antri, bisa kah melalui online?</h5>
            <p>Bisa ya sahabat central..</p>
            <p>
              silahkan pencet tombol dibawah ini untuk menuju ke admin online
              kami
            </p>
            <button className="btn btn-primary">HUBUNGI KAMI</button>
          </div>
          <div className="footer-col">
            <h5>Saya mau belanja tapi tunggu discount saja min</h5>
            <p>kami juga menyediakan display discount yang sedang berjalan dibawah ini ya</p>
            <button className="btn btn-primary">Cek Promo</button>
            <p>atau sahabat central bisa tanya langsung ke admin newcentral</p>
            <button className="btn">Chat Mimin</button>
          </div>

          <div className="footer-col">
            <h5>Bisa ga sih bayar QRIS/TRANSFER ?</h5>
            <p>Bisa ya, sahabat central</p>
            <p>dengan ketentuan minimal belanja 50k..</p>
          </div>

          <div className="footer-col" id="akun">
            <h5>Informasi Kontak</h5>
            <div className="contact-item">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <span> Jl tadulako Besusu Tengah, Kec. Palu Tim., Kota Palu</span>
            </div>
            <div className="contact-item">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <span>Email: info@kosmetikgrosir.id</span>
            </div>
            <div className="contact-item">
              <svg viewBox="0 0 24 24">
                <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.3a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2z" />
              </svg>
              <span>No. HP: 0838-9236680</span>
            </div>
            <div className="contact-item">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>Jam Operasional: 09.00 - 22.00</span>
            </div>

            <div className="socials">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>
              <a href="#" aria-label="TikTok">
                <svg viewBox="0 0 24 24">
                  <path d="M14 3v11.5a3.5 3.5 0 11-3.5-3.5" />
                  <path d="M14 3c0 2.5 2 4.5 4.5 4.5" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24">
                  <path d="M15 8h-2a2 2 0 00-2 2v2H9v3h2v7h3v-7h2.5l.5-3H14v-1.5A1.5 1.5 0 0115.5 9H16z" />
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24">
                  <path d="M4 20l1.4-4.2A8 8 0 1112 20a7.9 7.9 0 01-4.2-1.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 NewCentralPalu~~. develope by: alfian
      </div>
    </footer>
  );
}

export default Footer;
