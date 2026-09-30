function Listing() {
    return (
        <section id="listing" className="promo-section listing-section">
            <div className="promo-card listing-promo-card">
                <div className="promo-card-header">
                    <h1>NewCentral Listing</h1>
                    <p>saya mau daftarkan produk ke newcentral.. gmn ya caranya ?</p>
                    <p>sahabat central boleh konsultasikan ke nomor dibawah ini melalui whatsapp ya</p>
                </div>
                <div className="promo-card-body">
                    <h2>ingin daftarkan brandmu ke newcentral?</h2>
                    <p>konsultasikan ke sini ya</p>
                </div>
                <div className="promo-card-bottom">
                    <button className="btn btn-primary btn-listing" onClick={() => window.location.href = "https://wa.me/6282114677313"}>Hubungi Admin</button>
                </div>
            </div>
        </section>
    )
}

export default Listing;