async function getMeals(){
    const endpoint = '/api/meals';
    const request = await fetch(endpoint);
    const meal_data = await request.json();
    return meal_data
}



async function windowActions(){
    console.log("loaded window")
    const meals = await getMeals();
    console.table(meals);


    // for (item in data) {
    //     dataArr = data[item];
    //     console.log(dataArr)
    //     for (i in dataArr){
            
    //         row.innerHTML +=
    //                 `<tr>
    //                 <th>${dataArr[i].meal_id}</th>
    //                 <th>${dataArr[i].meal_name}</th>
    //                 <th>${dataArr[i].meal_category}</th>
    //                 </tr>`};
            

    //     }}
}
        
    
     
    
        
    //const row = document.querySelector("tbody")
    
window.onload = windowActions;