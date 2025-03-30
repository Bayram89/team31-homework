const recipesUrl =
  "https://raw.githubusercontent.com/Bayram89/Bayram89.github.io/refs/heads/main/recipes.json";

let popularRecipes = [];

function fetchPopularRecipes() {
  fetch(recipesUrl)
    .then((response) => response.json())
    .then((arrayOfRecipes) => {
      popularRecipes = arrayOfRecipes;
      renderPopularRecipes(popularRecipes);
    });
}

async function fetchPopularRecipesAsyncAwait() {
  const response = await fetch(recipesUrl);
  if (!response.ok) {
    console.error("Network response was not ok", response.statusText);
    return;
  }
  const arrayOfRecipes = await response.json();
  popularRecipes = arrayOfRecipes;
  renderPopularRecipes(popularRecipes);
}

fetchPopularRecipesAsyncAwait();

function renderPopularRecipes(recipes) {
  const container = document.querySelector(".popular-recipe-container");

  recipes.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.className = "popular-recipe";

    const ingredientsList = recipe.ingredients
      .map((ingredient) => `<li>${ingredient}</li>`)
      .join("");

    recipeCard.innerHTML = `
            <h3 class="popular-recipe-title">${recipe.title}</h3>
            <img class="popular-img-url" src="${recipe.imageUrl}" alt="${recipe.title}" />
            <ul class="popular-ingredients">
                ${ingredientsList}
            </ul>
        `;

    container.appendChild(recipeCard);
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
