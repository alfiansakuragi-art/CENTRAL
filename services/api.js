const fetchData = (URL, METHOD, BODY) => {
    return fetch(URL, {
        method: METHOD,
        body: {
            name: BODY.name,
            noHp: BODY.noHp,
            review: BODY.review
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('request gagal')
            }
            return response.json()
        })

        .then((data) => {
            return data
        })
}

export const getApi = (URL, state) => {
    fetchData(URL)
        .then((data) => {
            state(data)
        })
}