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

function createChart(arr) {
	//console.log(arr[0])
    const chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Meals and Macros"
        },
        axisX:{
            labelAutoFit: true
        },
        toolTip: {
            shared: true
        },
        legend:{
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "stackedBar",
            name: "Protein",
            showInLegend: "true",
            dataPoints: [
                { label: arr[0].meal_name, y: arr[0].protein },
                { label: arr[1].meal_name, y: arr[1].protein },
                { label: arr[2].meal_name, y: arr[2].protein },
                { label: arr[3].meal_name, y: arr[3].protein },
                { label: arr[4].meal_name, y: arr[4].protein },
                { label: arr[5].meal_name, y: arr[5].protein },
                { label: arr[6].meal_name, y: arr[6].protein }
            ]
        },
        {
            type: "stackedBar",
            name: "Fat",
            showInLegend: "true",
            dataPoints: [
                { label: arr[0].meal_name, y: arr[0].fat },
                { label: arr[1].meal_name, y: arr[1].fat },
                { label: arr[2].meal_name, y: arr[2].fat },
                { label: arr[3].meal_name, y: arr[3].fat },
                { label: arr[4].meal_name, y: arr[4].fat },
                { label: arr[5].meal_name, y: arr[5].fat },
                { label: arr[6].meal_name, y: arr[6].fat }
            ]
        },
        {
            type: "stackedBar",
            name: "Carbs",
            showInLegend: "true",
            dataPoints: [
                { label: arr[0].meal_name, y: arr[0].carbs },
                { label: arr[1].meal_name, y: arr[1].carbs },
                { label: arr[2].meal_name, y: arr[2].carbs },
                { label: arr[3].meal_name, y: arr[3].carbs },
                { label: arr[4].meal_name, y: arr[4].carbs },
                { label: arr[5].meal_name, y: arr[5].carbs },
                { label: arr[6].meal_name, y: arr[6].carbs }
            ]
        },
        {
            type: "stackedBar",
            name: "Cholesterol",
            showInLegend: "true",
            dataPoints: [
                { label: arr[0].meal_name, y: arr[0].cholesterol },
                { label: arr[1].meal_name, y: arr[1].cholesterol },
                { label: arr[2].meal_name, y: arr[2].cholesterol },
                { label: arr[3].meal_name, y: arr[3].cholesterol },
                { label: arr[4].meal_name, y: arr[4].cholesterol },
                { label: arr[5].meal_name, y: arr[5].cholesterol },
                { label: arr[6].meal_name, y: arr[6].cholesterol }
            ]
        },
        {
            type: "stackedBar",
            name: "Sodium",
            showInLegend: "true",
            dataPoints: [
                { label: arr[0].meal_name, y: arr[0].sodium },
                { label: arr[1].meal_name, y: arr[1].sodium },
                { label: arr[2].meal_name, y: arr[2].sodium },
                { label: arr[3].meal_name, y: arr[3].sodium },
                { label: arr[4].meal_name, y: arr[4].sodium },
                { label: arr[5].meal_name, y: arr[5].sodium },
                { label: arr[6].meal_name, y: arr[6].sodium }
            ]
        }]
    });
    chart.render();
    
    function toggleDataSeries(e) {
        if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }
    
    }

async function windowActions(){
    const results = await getMeals();
    // console.table(meals.data);
    const meals = results.data
    const mealArray = [1,2,3,4,5,6,7,8,9,10,];
    let arr = [];
    const selected = mealArray.map(element => {
        const random = getRandomIntInclusive(0, meals.length - 1);
        console.log(random)
        return meals[random];
    })
   
    //console.log(selected)
    createChart(selected); 
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