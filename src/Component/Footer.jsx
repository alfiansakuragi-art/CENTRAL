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
              NewCentralPalu adalah pusat belanja kosmetik grosir terpercaya dan terlengkap
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
            <h5>Bisa kah kalo pake QRIS?</h5>
            <p>Bisa ya, sahabat central</p>
            <p>dengan ketentuan minimal belanja 50k.. untuk offline Cashier</p>
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
              <span>Email: newcentralplw@gmail.com</span>
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
