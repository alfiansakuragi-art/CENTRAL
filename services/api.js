const fetchData = (URL) => {
    return fetch(URL)
    .then((response) => {
        if(!response.ok) {
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