async function getMeals(){
    const endpoint = '/api/wholeMeals';
    const request = await fetch(endpoint);
    const meal_data = await request.json();
    return meal_data
}



async function windowActions(){
    const meals = await getMeals();
    console.table(meals.data);


    for (item in meals.data) {
        dataArr = meals.data[item];
        
        row.innerHTML +=
                `<tr>
                <th>${dataArr.meal_id}</th>
                <th>${dataArr.meal_name}</th>
                <th>${dataArr.meal_category}</th>
                <th>${dataArr.calories}</th>
                <th>${dataArr.serving_size}</th>
                <th>${dataArr.cholesterol}</th>
                <th>${dataArr.sodium}</th>
                <th>${dataArr.carbs}</th>
                <th>${dataArr.protein}</th>
                <th>${dataArr.fat}</th>
                </tr>`};
            

        
    }

        
    
     
    
        
    const row = document.querySelector("tbody")
    
window.onload = windowActions;