export const getApiCall = async (url, token) => {
    const headers = { 'Content-Type': 'application/json', 'authorization': token }
    return (await fetch(url, { headers })
        .then(response => response.json())
        .then(json => {
            return new Promise((resolve, reject) => {
                return resolve(json)
            })
        }
        ))
}
export const postApiCall = async (url, requestdata, token) => {
    const headers = { 'Content-Type': 'application/json', 'authorization': token }
    const body = requestdata
    return (await fetch(url, { headers, body })
        .then(response => response.json())
        .then(json => {
            return new Promise((resolve, reject) => {
                return resolve(json)
            })
        }
        ))

}


export const postAuthCall = async (url, requestdata) => {
    const headers = { 'Content-Type': 'application/json' }
    const body = requestdata
    await fetch(url, { headers, body })
        .then(response => response.json())
        .then(data => console.log(data));


}
