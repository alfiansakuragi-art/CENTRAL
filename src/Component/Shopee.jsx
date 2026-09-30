function Shopee() {
    return (
        <section id="shopee" className="promo-section shopee-section">
            <div className="promo-card shopee-promo-card">
                <div className="promo-card-header">
                    <h1>NewCentral Shopee</h1>
                    <p>sahabat central juga bisa order melalui shopee, tentunya terdapat discount dan voucher yang tidak kalah menarik dan gratis ongkir</p>
                </div>
                <div className="promo-card-body shopee-card-body">
                    <img src="https://1000logos.net/wp-content/uploads/2021/02/Shopee-logo.png" alt="logo shopee" className="shopee-body-logo" />
                    <h2>Belanja hemat di Shopee dengan diskon & voucher menarik</h2>
                    <p>Klik tombol dibawah untuk langsung ke official store kami ya</p>
                </div>
                <div className="promo-card-bottom">
                    <button className="btn btn-primary btn-shopee" onClick={() => window.location.href = "https://shopee.co.id/new_central?mmp_pid=an_11390300694&uls_trackid=56otupmr03lf&utm_campaign=-&utm_content=-&utm_medium=affiliates&utm_source=an_11390300694&utm_term=fmqfiy7d3h67"}>Belanja Sekarang</button>
                </div>
            </div>
        </section>
    )
}

export default Shopee;