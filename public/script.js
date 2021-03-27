//In your front-end JS scripts, 
//do a fetch request using async/await 
//to your server that will return all dining 
//halls on campus.
//The API for this already 
//exists in the new repository.

async function windowActions(){
    const endpoint = '/api/dining';
    const request = await fetch(endpoint);
    const data = await request.json();
    

    for (item in data) {
        dataArr = data[item];
        //console.log(dataArr)
        for (i in dataArr){
            
            row.innerHTML +=
                    `<tr>
                    <th>${dataArr[i].hall_id}</th>
                    <th>${dataArr[i].hall_name}</th>
                    <th>${dataArr[i].hall_address}</th>
                    </tr>`};
            

        }}
        
    
     
    
        
    const row = document.querySelector("tbody")
    
window.onload = windowActions;