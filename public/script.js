//In your front-end JS scripts, 
//do a fetch request using async/await 
//to your server that will return all dining 
//halls on campus.
//The API for this already 
//exists in the new repository.

async function windowActions(){
    const endpoint = '/api/dining'
    const request = await fetch(endpoint)
    const data = await request.json()

    console.log(data)
         
    }
window.onload = windowActions;