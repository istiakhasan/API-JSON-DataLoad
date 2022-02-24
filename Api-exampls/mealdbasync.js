const searchFood=()=>{
    const searchField=document.getElementById('search-field')
    const searchText=searchField.value;
    //clear data
    searchField.value=''

    //error message
    if(searchText==''){
        //please write something to display
        console.log('search text empty')
    }
     else{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        //load data
        fetch(url)
        .then(res=>res.json())
        .then(data=>displaySearchResults(data.meals))
     }
}


const displaySearchResults=meals=>{

 const searchResult=document.getElementById('search-result')
  const notFound=document.getElementById('not-found')
 //searchResult.innerHTML='';//type one for remove previous search result
 searchResult.textContent='';//another way for remove previous search result
 
 if(meals==null){
    const div=document.createElement('h3');
    div.classList.add('text-center','text-danger')
  
    div.innerText="No data found";
    notFound.appendChild(div)
    notFound.style.display='block'
    console.log("robin")
 }else{
    meals.forEach(meal=>{
         notFound.style.display='none'
     
        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div onClick="loadMealDetail('${meal.idMeal}')" class="card h-100">
        <img src=${meal.strMealThumb} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
        </div>
      </div>
        `;
         searchResult.appendChild(div)
        
    })
 }

}
const loadMealDetail=async mealId=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    const res=await fetch(url);
    const data=await res.json();
    displayMealDetail(data.meals[0])
    
    // fetch(url)
    // .then(res=>res.json())
    // .then(data=>displayMealDetail(data.meals[0]))
}

const displayMealDetail=meal=>{
    console.log(meal)
    const mealDetails=document.getElementById('meal-details')
    mealDetails.textContent=''
 console.log(mealDetails)
 const div=document.createElement('div')
 div.classList.add('card')
 div.innerHTML=`
 <img src=${meal.strMealThumb} class="card-img-top" alt="...">
 <div class="card-body">
   <h5 class="card-title">${meal.strMeal}</h5>
   <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
   <a href=${meal.strYoutube} class="btn btn-primary">Go somewhere</a>
 </div>
 `;
 mealDetails.appendChild(div)

}