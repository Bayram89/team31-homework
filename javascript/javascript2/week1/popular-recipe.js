const popularRecipes = [
  {
    id: 1,
    title: "Flaming Hot Nachos",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/flaming-hot-nachos-vertical-6570e53a67667.jpg?crop=0.8332502078137989xw:1xh;center,top&resize=980:*.jpg",
    ingredients: [
      "½ cup sour cream",
      "500 gr ground beef",
      "2 cups crushed Flamin' Hot Cheetos",
      "20 gr tortilla chips",
      "150 gr shredded Mexican cheese",
      "1 can black olives, drained",
      "1 can black beans, drained",
      "1 red onion, chopped",
      "2 cloves garlic, chopped",
      "¼ tsp cumin",
      "Salt & pepper",
    ],
  },
  {
    id: 2,
    title: "Classic Margherita Pizza",
    imageUrl:
      "https://www.acouplecooks.com/wp-content/uploads/2019/06/Margherita-Pizza-Recipe-006.jpg",
    ingredients: [
      "Pizza dough",
      "Fresh mozzarella",
      "Fresh basil leaves",
      "Tomato sauce",
      "Extra virgin olive oil",
      "Salt to taste",
    ],
  },
  {
    id: 3,
    title: "Chicken Stir Fry",
    imageUrl:
      "https://www.recipetineats.com/wp-content/uploads/2019/08/Chicken-Stir-Fry_9.jpg",
    ingredients: [
      "500g chicken breast",
      "2 cups mixed vegetables",
      "3 cloves garlic",
      "Soy sauce",
      "Sesame oil",
      "Ginger",
      "Green onions",
    ],
  },
  {
    id: 4,
    title: "Greek Salad",
    imageUrl:
      "https://www.aheadofthyme.com/wp-content/uploads/2016/03/authentic-greek-salad-7.jpg",
    ingredients: [
      "Cucumber",
      "Tomatoes",
      "Red onion",
      "Kalamata olives",
      "Feta cheese",
      "Extra virgin olive oil",
      "Oregano",
      "Salt and pepper",
    ],
  },
];

function renderPopularRecipes(recipes) {
  const container = document.querySelector(".popular-recipe-container");

  recipes.forEach((recipe) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.className = "popular-recipe";

    const ingredientsList = recipe.ingredients
      .map((ingredient) => `<li>${ingredient}</li>`)
      .join("");

    recipeDiv.innerHTML = `
            <h3 class="popular-recipe-title">${recipe.title}</h3>
            <img class="popular-img-url" src="${recipe.imageUrl}" alt="${recipe.title}" />
            <ul class="popular-ingredients">
                ${ingredientsList}
            </ul>
        `;

    container.appendChild(recipeDiv);
  });
}
renderPopularRecipes(popularRecipes);

function findRecipeByTitle(searchWord) {
  const filteredRecipes = popularRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchWord.toLowerCase())
  );

  renderPopularRecipes(filteredRecipes);
}

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", () => {
  const searchWord = searchInput.value;
  document.querySelector(".popular-recipe-container").innerHTML = "";
  findRecipeByTitle(searchWord);
});

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
