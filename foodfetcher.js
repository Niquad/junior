let foodChart = [
    {days: "Sunday", time:[
        {period:"Breakfast", food: "Yam and Egg"},
        {period:"Lunch", food: "Fruit Salad and Chicken"},
        {period:"Dinner", food: "Okro Soup and Eba"}
        ]
    },
    {days: "Monday", time:[
        {period:"Breakfast", food: "Rice and Stew"},
        {period:"Lunch", food: "Bread and Tea"},
        {period:"Dinner", food: "Amala and Ewedu"}
        ]
    },
    {days: "Tuesday", time:[
        {period:"Breakfast", food: "Beans and Dodo"},
        {period:"Lunch", food: "Corn Flakes"},
        {period:"Dinner", food: "Semo and Egusi"}
        ]
    },
    {days: "Wednesday", time:[
        {period:"Breakfast", food: "Porridge"},
        {period:"Lunch", food: "Jollof Rice and turkey"},
        {period:"Dinner", food: "Efo and Pounded Yam"}
        ]
    },
    {days: "Thursday", time:[
        {period:"Breakfast", food: "Dodo and egg"},
        {period:"Lunch", food: "Golden morn"},
        {period:"Dinner", food: "Wheat and ogbono"}
        ]
    },
    {days: "Friday", time:[
        {period:"Breakfast", food: "Rice and beans"},
        {period:"Lunch", food: "Garri and Kuli Kuli"},
        {period:"Dinner", food: "Pie"}
        ]
    },
    {days: "Saturday", time:[
        {period:"Breakfast", food: "Pap and akara"},
        {period:"Lunch", food: "Bread and beans"},
        {period:"Dinner", food: "Okro Soup and Amala"}
        ]
    }                           
]
let selectDays = document.querySelector("#day")
let selectTime = document.querySelector("#time")
var table = document.querySelector('#foodItem');
let array =[]

for(let i = 0 ; i < foodChart.length; i++){
    selectDays.innerHTML +=`<option value ="${foodChart[i].days}">${foodChart[i].days}</option>`
}
for(let i = 0; i < foodChart[0].time.length; i++){
    selectTime.innerHTML+=`<option value="${foodChart[0].time[i].period}">${foodChart[0].time[i].period}</option>`
}
function fetchData(){
    
    table.innerHTML='';
    for(let i = 0; i < array.length; i++){
        table.innerHTML += `
            <tr>
                <td class="text-white">${i+1}</td>
                <td class="text-white">${array[i].days}</td>
                <td class="text-white">${array[i].period}</td>
                <td class="text-white">${array[i].food}</td>
                <td>
                    <span class="ml-auto" onclick="deleteFood(${i})"><i class="fa-solid fa-trash-can"></i></span>
                </td>
            </tr>
        `;   
    };
    
}
function chooseMeal(){
    let resultAlert = false
    if (selectDays.value == "" || selectTime.value == ""){
        return alert ("Make a selection")
    }
    else if(resultAlert){
        alert ("items already selected")
       console.log(resultAlert);
    }
    else{
        let Meal = {days:selectDays.value, 
                    period: selectTime.value
        };    
        var foodMeal = {}
        foodChart.forEach(el=>{
            if(el.days == Meal.days){
                el.time.forEach(list =>{
                    if(list.period == Meal.period){
                        // Meal.period == list.period,
                        Meal.food = list.food  
                        // foodMeal = list.food          
                    }
                })
            }
        })
        array.push(Meal)
        // console.log(foodMeal);
        fetchData()
    }
    console.log(array.days);
}
fetchData()

function deleteFood(meal) {
    array.splice(meal, 1)
    fetchData()   
}

// let food = [
//     {Days: "Sunday", Time: [
//         {Period : "Breakfast", Food : "Rice"},
//         {Period : "Lunch", Food : "Beans"},
//         {Period : "Dinner", Food : "Eggs"}
//     ]
//     }
// ]
// let days = document.getElementById('#days');
// let period = document.getElementById("#period");

// for (let i = 0; i < food.length; i++) {
//     days.innerHTML += `<option>${Food[i].Days}</option>`
// }
// for (let i = 0; i < food.length; i++) {
//    period.innerHTML += `<option>${food[i].Time[i].Period}</option>`   
// }