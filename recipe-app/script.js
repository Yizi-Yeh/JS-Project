const meals = document.getElementById('meals');


getRandomMeal();

// function getRandomMeal() {
//     fetch("https://www.themealdb.com/api/json/v1/1/random.php")
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   }

async function getRandomMeal(){
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")

    const resData = await res.json()
    
    const randomMeal = resData.meals[0]

    console.log(randomMeal)

    addMeal(randomMeal,true)

}

async function getMealById(id){
   const meal =  await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
}


async function  getMealByserarch(term){
    const meals =  await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
    );
}


function addMeal(mealData,random = false ) {
     const meal = document.createElement("div")
     meal.classList.add('meal')

     meal.innerHTML = `
     <div class="meal-header">

     ${random ? `<span class="random"> Random Receipe </span>` :''}

     <img src="${mealData.strMealThumb}" />

    </div>

   <div class="meal-body">
     <h4>${mealData.strMeal}</h4>
     <button class="fav-btn">
       <i class="fas fa-heart"> </i>
     </button>
   </div>`;

   meal.querySelector('.meal-body .fav-btn').addEventListener('click',(e)=>{
   e.target.classList.toggle('active')
});

meals.appendChild(meal);
}


