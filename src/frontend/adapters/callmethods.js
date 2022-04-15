export const getApiCall = async (url, token) => {
    const headers = { 'Content-Type': 'application/json', 'authorization': token }
   await fetch(url, { headers })
        .then(response => response.json())
        .then(data => console.log(data));
}
export const postApiCall = async (url, requestdata, token) => {
    const headers = { 'Content-Type': 'application/json', 'authorization': token }
    const body = requestdata
   await  fetch(url, { headers ,body })
        .then(response => response.json())
        .then(data => console.log(data));

}


export const postAuthCall = async (url, requestdata) => {
    const headers = { 'Content-Type': 'application/json' }
    const body = requestdata
    await fetch(url, { headers ,body })
        .then(response => response.json())
        .then(data => console.log(data));
        

}
