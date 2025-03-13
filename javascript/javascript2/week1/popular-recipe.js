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
    title: "Baked Feta Pasta",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/baked-feta-pasta-vertical-2-66967df327079.jpg?crop=0.835xw:1.00xh;0.0714xw,0&resize=980:*",
    ingredients: [
      "2 pints of cherry tomatoes",
      "1 shallot, quartered",
      "3 cloves garlic, smashed",
      "1/2 cup extra-virgin olive oil, divided",
      "Kosher salt",
      "Pinch of crushed red pepper flakes",
      "200 gr block feta",
      "3 sprigs fresh thyme",
      "150 gr pasta",
    ],
  },
  {
    id: 3,
    title: "Sushi Bake",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/del089923-tiktok-sushi-bake-web-355-rv-index-64e384af47bdc.jpg?crop=0.323xw:0.969xh;0.211xw,0.0306xh&resize=980:*",
    ingredients: [
      "1/2 cups cooked sushi rice",
      "1/2 tsp rice vinegar",
      "1/2 tsp kosher salt",
      "2 tsp canola oil",
      "2 tsp kewpie mayonnaise",
      "1 tsp soy sauce",
      "2 tsp wasabi",
      "3 scallions, sliced, divided",
      "1/4 cup furikake, divided",
      "1/2 avocado, sliced or chopped",
      "1/4 cup finely chopped cucumber",
      "Toasted sesame seeds and small nori sheets, for serving",
    ],
  },
  {
    id: 4,
    title: "TikTok Ramen",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/delish-210701-tiktok-ramen-01-landscape-jg-1630098065.jpg?crop=0.454xw:1.00xh;0.233xw,0&resize=980:*",
    ingredients: [
      "2 packages instant ramen",
      "2 tsp unsalted butter",
      "1/2 red bell pepper",
      "1 small carrot, peeled, trimmed, and thinly sliced into rounds",
      "2 cloves garlic, minced",
      "3 large eggs",
      "Chopped scallions, for serving",
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
