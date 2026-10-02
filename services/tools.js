export const scroll = (target) => {
    document.getElementById(target).scrollIntoView({
        behavior: "smooth",
    })
}

export const toWhatsapp = (number, message = "halo min") => {

    const text = encodeURI(message)
    window.location.href = `https://wa.me/${number}?text=${text}`
}

