function Jastip() {
    return (
        <section id="jastip" className="promo-section">
            <div className="promo-card">
                <div className="promo-card-header">
                    <h1>NewCentral Jastip</h1>
                    <p>Kita juga ada jasa jastip ya sahabat central.. silahkan hubungi nomor dibawah untuk detail jastipnya</p>
                </div>
                <div className="promo-card-bottom">
                    <button className="btn btn-primary btn-listing" onClick={() => window.location.href = "https://wa.me/628129991459"}>Info Jastip</button>
                </div>
            </div>
        </section>
    )
}

export default Jastip