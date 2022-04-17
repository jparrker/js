document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  
  const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       //console.log(data.drinks[0].strDrink)
       displayDrink(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


function displayDrink(data){
  const cocktail = data.drinks[0];
  const cocktailDiv = document.getElementById('cocktail')
  const cocktailName = cocktail.strDrink
  const heading = document.createElement('h1')
  heading.innerHTML = cocktailName
  cocktailDiv.appendChild(heading)
 
  //get and append image
  const cocktailImg = document.createElement('img');
  cocktailImg.src = cocktail.strDrinkThumb
  cocktailDiv.appendChild(cocktailImg)
 
  //put image of drink as an overlay
  document.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb + "')"

  //get and display ingredients, check for null
  const cocktailIngredients = document.createElement('ul')
  cocktailDiv.appendChild(cocktailIngredients)

  const getIngredients = Object.keys(cocktail) 
  .filter(function(ingredient) {
    return ingredient.indexOf("strIngredient") == 0
  })
  .reduce(function(ingredients, ingredient) {
    if (cocktail[ingredient] != null) {
      ingredients[ingredient] = cocktail[ingredient]
    }
    
    return ingredients
  }, {})
  
  for (let key in getIngredients) {
    let value = getIngredients[key]
    listItem = document.createElement('li')
    listItem.innerHTML = value;
    cocktailIngredients.appendChild(listItem)
}

}