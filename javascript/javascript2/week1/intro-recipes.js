function insertSiteTitle() {
    const siteTitle = document.createElement("header");
    siteTitle.classList.add("site-header");
    siteTitle.innerHTML = `
      <a href="/" class="site-logo">
        <img src="./last.png" alt="Fork&Flavor Logo" style="height: 100px; vertical-align: middle; margin-right: 10px;">
        <span>Fork&amp;Flavor</span>
      </a>
    `;
    document.body.prepend(siteTitle);
  }
  
  const risalamandeRecipe = {
    id: 0,
    title: "Risalamande",
    picture_url: "https://www.valdemarsro.dk/wp-content/2012/11/ris-ala-mande.jpg",
    ingredients: [
      { NAME: "1 lt whole milk" },
      { NAME: "180 gr rice porridge" },
      { NAME: "1 vanilla pod" },
      { NAME: "70 gr sugar" },
      { NAME: "100 gr almonds" },
      { NAME: "1 pinch salt" },
      { NAME: "400 ml whipping cream" }
    ],
  };
  
  const gloggRecipe = {
    id: 1,
    title: "Gløgg",
    picture_url: "https://gourministeriet.dk/wp-content/uploads/2024/11/IMG_6017-scaled.jpg",
    description: "Gløgg is a traditional Scandinavian mulled wine drink, perfect for cold winter days.",

    ingredients: [
      { NAME: "500 ml orange zest" },
      { NAME: "200 ml water" },
      { NAME: "275 gr sugar" },
      { NAME: "5 whole cloves" },
      { NAME: "2 cinnamon sticks" },
      { NAME: "Spice", AMOUNT: undefined },
      { NAME: "100 gr raisins" },
      { NAME: "50 gr slipped almonds" }
    ],
  };
  
  function renderRecipe(recipe) {
   
    const recipeDiv = document.createElement("div");
    recipeDiv.innerHTML = `
      <section class="recipe">
        <div class="recipe-container">
          <div class="recipe-info">
            <h2>${recipe.title}</h2>
            <p><strong>Preparation time:</strong> 30 mins |
               <strong>Total time:</strong> 4 hours |
               <strong>Yield:</strong> 5-6 servings</p>
            <h3>Ingredients:</h3>
            <ul class="ingredient-list">
              ${recipe.ingredients.map(ing => `<li>${ing.NAME}${ing.AMOUNT ? ': ' + ing.AMOUNT : ''}</li>`).join("")}
            </ul>
            <button class="print-button">Print</button>
            <button class="favourites-button">Add to favourites</button>
          </div>
          <div class="recipe-image">
            <img src="${recipe.picture_url}" alt="${recipe.title}" />
          </div>
        </div>
      </section>
    `;
  
    recipeDiv.querySelector(".print-button").addEventListener("click", () => window.print());
    recipeDiv.querySelector(".favourites-button").addEventListener("click", () => alert("Added to favourites!"));
  
    document.body.append(recipeDiv);
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    insertSiteTitle();
    renderRecipe(risalamandeRecipe);
    renderRecipe(gloggRecipe);
  });