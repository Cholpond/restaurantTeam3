const allMealsBtn = document.querySelector(".firstAllBtn");
const breakfastBtn = document.querySelector(".breakfastBtn")
const lunchBtn = document.querySelector(".lunchBtn")
const shakesBtn = document.querySelector(".shakesBtn")
const dinnerBtn = document.querySelector(".dinnerBtn")


function getAllMeals(){
    console.log('clicked')
}



breakfastBtn.addEventListener('click', getBreakfast())
lunchBtn.addEventListener('click', getLunch())
shakesBtn.addEventListener('click', getShakes())
dinnerBtn.addEventListener('click', getDinner())