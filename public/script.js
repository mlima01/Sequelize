function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }


async function getMeals(){
    const endpoint = '/api/wholeMeals';
    const request = await fetch(endpoint);
    const meal_data = await request.json();
    return meal_data
}



async function windowActions(){
    const results = await getMeals();
    // console.table(meals.data);
    const meals = results.data
    const mealArray = [1,2,3,4,5,6,7,8,9,10,];
    const selected = mealArray.map(element => {
        const random = getRandomIntInclusive(0, meals.length - 1);
        
        return meals[random];
    })
   
    console.log(selected)
    for (item in selected) {
        dataArr = selected[item];
        
        row.innerHTML +=
                `<tr>
                <td>${dataArr.meal_id}</td>
                <td>${dataArr.meal_name}</td>
                <td>${dataArr.meal_category}</td>
                <td>${dataArr.calories}</td>
                <td>${dataArr.serving_size}</td>
                <td>${dataArr.cholesterol}</td>
                <td>${dataArr.sodium}</td>
                <td>${dataArr.carbs}</td>
                <td>${dataArr.protein}</td>
                <td>${dataArr.fat}</td>
                </tr>`};
            

        
    }

        
    
     
    
        
    const row = document.querySelector("tbody")
    
window.onload = windowActions;