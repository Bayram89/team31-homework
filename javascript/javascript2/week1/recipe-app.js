document.querySelector(".print-button").addEventListener("click", function () {
  window.print();
});

// Handle adding new ingredients
document
  .getElementById("add-ingredient")
  .addEventListener("click", function () {
    let ingredientInput = document.getElementById("ingredient-input");
    let ingredientList = document.getElementById("new-ingredients");
    if (ingredientInput.value.trim() !== "") {
      let li = document.createElement("li");
      li.textContent = ingredientInput.value;
      ingredientList.appendChild(li);
      ingredientInput.value = "";
    }
  });

// Handle adding new recipes
document
  .getElementById("recipe-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let recipeName = document.getElementById("recipe-name").value;
    let ingredientList = document.getElementById("new-ingredients").children;
    if (ingredientList.length < 5) {
      alert("Add at least 5 ingredients!");
      return;
    }
    let newRecipe = document.createElement("section");
    newRecipe.innerHTML = `<h2>${recipeName}</h2><h3>Ingredients:</h3><ul>${[
      ...ingredientList,
    ]
      .map((li) => `<li>${li.textContent}</li>`)
      .join("")}</ul>`;
    document.body.appendChild(newRecipe);
    document.getElementById("recipe-form").reset();
    document.getElementById("new-ingredients").innerHTML = "";
  });
