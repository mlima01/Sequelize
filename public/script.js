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
    
    function displayHalls(event){
        
        const html = response.map(item =>{
            return `
                <tr>
                    <span class="id">${item.id}</span></br>
                </tr>
                <tr>
                    <span class="name">${item.hall_name}</span></br>
                </tr>
                <tr>
                <span class="address">${item.hall_address}</span></br>
                </tr>
            `;
        }).join('');
        rows.innerHTML = html;
    }
    const rows = document.querySelector('tbody')
    }
window.onload = windowActions;