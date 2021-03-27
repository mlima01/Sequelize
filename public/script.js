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
    console.log(halls)
    function displayHall(json){
        let cols = Object.keys(json[0]);

        let headers = cols.map( col =>{
            `<th> ${col}</th>`).join("");

            let rows = json
            .map(row => {
              let tds = cols.map(col => `<td>${row[col]}</td>`).join("");
              return `<tr>${tds}</tr>`;
            }).join("");
        
        row = document.querySelector('tbody')
        row.innerHTML = displayHall(halls);

window.onload = windowActions;