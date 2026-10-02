function Review() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            rate: e.target.rate.value,
            review: e.target.review.value,
            createdAt: new Date().toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
        }

        fetch('https://6a637088b30b52361e1a4b30.mockapi.io/BRAND/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                alert('Review berhasil ditambahkan!');
                e.target.reset();
            })
            .catch(error => {
                alert('Gagal menambahkan review');
            });
    }
    return (
        <section id="review" className="review-section">
            <div className="review-header">
                <h1>New Central Review / comment</h1>
                <p>sahabat central boleh banget melakukan review pelayanan / rating kenyamanan di Newcentral loh</p>
                <p>masukan dan saran sahabat central sangat berarti bagi kami</p>
            </div>
            <div className="review-body">
                <div className="review-form">
                    <form onSubmit={handleSubmit} id="form-review">
                        <div className="form-group">
                            <label htmlFor="name">Nama</label>
                            <input type="text" id="name" name="name" placeholder="Masukkan nama anda" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rate">Rating Kepuasan</label>
                            <select name="rate" id="rate">
                                <option value="keren banget">keren banget</option>
                                <option value="banget">keren</option>
                                <option value="lumayan">lumayan</option>
                                <option value="biasa">biasa</option>
                                <option value="kurang puas">kurang puas</option>
                                <option value="buruk">buruk</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="review">Review</label>
                            <textarea id="review" name="review" placeholder="Masukkan review anda" required />
                        </div>
                        <button type="submit">Kirim</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Review;