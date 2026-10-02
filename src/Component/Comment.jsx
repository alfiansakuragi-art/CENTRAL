import { useEffect, useState } from "react"

function Comment() {
    const [comment, setComment] = useState([])
    useEffect(() => {
        fetch('https://6a637088b30b52361e1a4b30.mockapi.io/BRAND/comment')
            .then(response => response.json())
            .then(data => setComment(data))
    }, [])

    return (
        <section className="comment-section">
            <div className="container">
                <div className="comment-header">
                    <h2>Customer Review</h2>
                    <p className="comment-subtitle">Apa kata sahabat Central tentang pelayanan dan produk kami</p>
                </div>
                <div className="comment-body">
                    {comment.map((item) => (
                        <div className="comment-card" key={item.id}>
                            <div className="comment-card-header">
                                <div className="comment-avatar">
                                    {item.name ? item.name.charAt(0).toUpperCase() : "central anonym"}
                                </div>
                                <div className="comment-user-info">
                                    <p className="comment-name">{item.name}</p>
                                    {item.rate && <p className="comment-rating">Rating : {item.rate}</p>}
                                </div>
                            </div>
                            <p className="comment-text">{item.review}</p>
                            <p className="comment-date">dibuat pada: {item.createdAt}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default Comment