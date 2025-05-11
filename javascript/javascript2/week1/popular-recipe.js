const recipesUrl =
  "https://raw.githubusercontent.com/Bayram89/Bayram89.github.io/refs/heads/main/recipes.json";

let popularRecipes = [];

function fetchPopularRecipes() {
  fetch(recipesUrl)
    .then((response) => response.json())
    .then((arrayOfRecipes) => {
      popularRecipes = arrayOfRecipes;
      renderPopularRecipes(popularRecipes);
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
    });
}

async function fetchPopularRecipesAsyncAwait() {
  try {
    const response = await fetch(recipesUrl);
    if (!response.ok) {
      console.error("Network response was not ok", response.statusText);
      return;
    }
    const arrayOfRecipes = await response.json();
    popularRecipes = arrayOfRecipes;
    renderPopularRecipes(popularRecipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

fetchPopularRecipesAsyncAwait();

function renderPopularRecipes(recipes) {
  const container = document.querySelector(".popular-recipe-container");
  container.innerHTML = ""; // Clear the container before rendering

  recipes.forEach((recipe) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.innerHTML = `
      <section class="recipe">
      <div class="recipe-container">
        <div class="recipe-info">
        <h2>${recipe.title}</h2>
        <p><strong>Preparation time:</strong> ${recipe.preparation_time} |
           <strong>Total time:</strong> ${recipe.total_time} |
           <strong>Yield:</strong> ${recipe.yield}</p>
        <h3>Ingredients:</h3>
        <ul class="ingredient-list">
          ${recipe.ingredients
            .map(
              (ing) =>
                `<li>${ing.NAME}${ing.AMOUNT ? ": " + ing.AMOUNT : ""}</li>`
            )
            .join("")}
        </ul>
       
        <button class="favourites-button">Add to favourites</button>
        </div>
        <div class="recipe-image">
        <img src="${recipe.picture_url}" alt="${recipe.title}" />
        </div>
      </div>
      </section>
    `;

    recipeDiv
      .querySelector(".favourites-button")
      .addEventListener("click", () => alert("Added to favourites!"));

    container.appendChild(recipeDiv);
  });
}

function findRecipeByTitle(searchWord) {
  const filteredRecipes = popularRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchWord.toLowerCase())
  );

  renderPopularRecipes(filteredRecipes);
}

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");

function searchWord() {
  const searchWord = searchInput.value;
  document.querySelector(".popular-recipe-container").innerHTML = "";
  findRecipeByTitle(searchWord);
}

searchButton.addEventListener("click", searchWord);

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const searchWord = searchInput.value;
    document.querySelector(".popular-recipe-container").innerHTML = "";
    findRecipeByTitle(searchWord);
  }
});

const sortSelect = document.querySelector(".sort-select");

sortSelect.addEventListener("change", () => {
  const sortValue = sortSelect.value;
  let sortedRecipes = [...popularRecipes];

  if (sortValue === "least") {
    sortedRecipes.sort((a, b) => a.ingredients.length - b.ingredients.length);
  } else if (sortValue === "most") {
    sortedRecipes.sort((a, b) => b.ingredients.length - a.ingredients.length);
  }

  // Clear search input when sorting
  searchInput.value = "";

  document.querySelector(".popular-recipe-container").innerHTML = "";
  renderPopularRecipes(sortedRecipes);
});
