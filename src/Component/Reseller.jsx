function Reseller() {
    return (
        <section id="reseller" className="promo-section reseller-section">
            <div className="promo-card reseller-promo-card">
                <div className="promo-card-header">
                    <h1>NewCentral Reseller</h1>
                    <p>min.. saya mau jadi reseller central, konsultasinya ke siapa ya ?</p>
                    <p>sahabat central boleh konsultasikan ke nomor dibawah ini melalui whatsapp ya</p>
                </div>
                <div className="promo-card-body">
                    <h2>Tertarik bergabung & bermitra dengan NewCentral?</h2>
                    <p>Klik tombol dibawah untuk langsung terhubung dengan tim kami ya</p>
                </div>
                <div className="promo-card-bottom">
                    <button className="btn btn-primary btn-reseller" onClick={() => window.location.href = "https://wa.me/6282227269568"}>Daftar Reseller Sekarang</button>
                </div>
            </div>
        </section>
    )
}

export default Reseller;