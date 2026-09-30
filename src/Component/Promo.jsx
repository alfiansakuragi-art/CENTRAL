function Promo() {
    return (
        <section id="promo" className="promo-section">
            <div className="promo-card">
                <div className="promo-card-header">
                    <h1>NewCentralPromo</h1>
                    <p>min.. saya mau belanja, tapi tunggu discount dulu, ada gak ya ?</p>
                    <p>sahabat central boleh cek list discount di link ini ya</p>
                </div>
                <div className="promo-card-body">
                    <h2>Jangan lewatkan promo spesial dari NewCentral</h2>
                    <p>Klik tombol dibawah untuk detail promo ya</p>
                </div>
                <div className="promo-card-bottom">
                    <button className="btn btn-primary" onClick={() => window.location.href = "https://docs.google.com/spreadsheets/d/1_CGXJek__hQJw3s0NJo9boGElO7ieDBM/htmlview#gid=572540176"}>Cek Promo</button>
                </div>
            </div>
        </section>
    )
}

export default Promo;