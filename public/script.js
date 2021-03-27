//In your front-end JS scripts, 
//do a fetch request using async/await 
//to your server that will return all dining 
//halls on campus.
//The API for this already 
//exists in the new repository.

async function windowActions(){
    const endpoint = '/api/dining';
    const request = await fetch(endpoint);
    const halls = await request.json();
    console.log(typeof(halls))
    const html =  halls.forEach(item => {
        
        console.log("here is ${item}:" ,item);
        return `
                <tr>
                    <span class="name"></span></br>
                 </tr>   
            `;
        }).join('');
        rows.innerHTML = html;

    }
    const rows = document.querySelector('tbody')
    
window.onload = windowActions;