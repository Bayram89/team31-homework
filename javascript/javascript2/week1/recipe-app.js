document.querySelector(".print-button").addEventListener("click", function () {
  window.print();
});

//  adding new ingredients
document
  .querySelector("#add-ingredient")
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

//  adding new recipes
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

const recipeObject = {
  id: 1,
  title: "Gløgg",
  picture_url:
    "https://gourministeriet.dk/wp-content/uploads/2024/11/IMG_6017-scaled.jpg",
  description:
    "Gløgg is a traditional Scandinavian mulled wine drink, perfect for cold winter days. This warm, spiced beverage combines the flavors of orange, cinnamon, and cloves with raisins and almonds for a festive holiday treat.",
  ingredients: [
    { NAME: "500 ml orange zest" },
    { NAME: "200 ml water" },
    { NAME: "275 gr sugar" },
    { NAME: "5 whole cloves" },
    { NAME: "2 cinnamon sticks" },
    { NAME: "Spice", AMOUNT: undefined },
    { NAME: "100 gr raisins" },
    { NAME: "50 gr slipped almonds" },
  ],
  description_list: [
    "Gløgg is my go-to winter drink—warm, spiced, and just the right amount of cozy. ",
    "I first had it in Sweden and never looked back.",
    "The best part? The raisins and almonds at the bottom, like a little treat with every cup. ",
    "If you haven’t tried it, you’re missing out!",
  ],
  instructions: [
    "1. Bring water to boil in a large pot",
    "2. Add sugar and stir until dissolved",
    "3. Add orange zest, cloves, and cinnamon sticks",
    "4. Simmer on low heat for 30 minutes",
    "5. Add spices and continue simmering for 10 minutes",
    "6. Add raisins and almonds",
    "7. Heat through for 5 minutes",
    "8. Serve hot in mugs",
  ],
};

// Creating Gløgg Recipe dynamically on JS
const secondRecipeIntro = document.createElement("section");
secondRecipeIntro.innerHTML = `
<h1>${recipeObject.title}</h1>
${recipeObject.description_list.map((desc) => `<p>${desc}</p>`).join("")}
`;
const secondRecipeInstructions = document.createElement("section");
secondRecipeInstructions.innerHTML = `
<h2>Instructions</h2>
${recipeObject.instructions.map((desc) => `<p>${desc}</p>`).join("")}

`;

const secondRecipeSection = document.getElementById("recipe-2");
secondRecipeSection.insertAdjacentElement("beforebegin", secondRecipeIntro);
secondRecipeSection.insertAdjacentElement("afterend", secondRecipeInstructions);

const newRecipeDiv = document.createElement("div");
newRecipeDiv.innerHTML = `
<section class="recipe">
  <div class="recipe-container">
    <div class="recipe-info">
      <h2>${recipeObject.title}</h2>
      <p>
    <strong>Preparation time:</strong> 30 mins |
    <strong>Total time:</strong> 4 hours | <strong>Yield:</strong> 5-6
    servings
      </p>
      <h3>Ingredients:</h3>
      <ul class="ingredient-list">
    ${recipeObject.ingredients
      .map(
        (ingredient) =>
          `<li>${ingredient.NAME}${
            ingredient.AMOUNT ? ": " + ingredient.AMOUNT : ""
          }</li>`
      )
      .join("")}
      </ul>
      <button class="print-button">Print</button>
      <button class="favourites-button">Add to favourites</button>
    </div>
    <div class="recipe-image">
      <img
    src="${recipeObject.picture_url}"
    alt="${recipeObject.title}"
      />
    </div>
  </div>
    </section>
`;
secondRecipeSection.appendChild(newRecipeDiv);

newRecipeDiv
  .querySelector(".print-button")
  .addEventListener("click", function () {
    window.print();
  });

newRecipeDiv
  .querySelector(".favourites-button")
  .addEventListener("click", function () {
    alert("Added to favourites!");
  });

const startTimerBtn = document.getElementById("start-timer");
const minutesInput = document.getElementById("minutes");
const timerDisplay = document.getElementById("timer-display");

startTimerBtn.addEventListener("click", function () {
  // Validate input
  if (!minutesInput.value || minutesInput.value <= 0) {
    alert("Please enter a valid number greater than 0!");
    return;
  }
  // getting minutes from input and convert to seconds
  const minutes = minutesInput.value;
  const seconds = minutes * 60;

  // deactivating the start button and adding visual feedback
  this.disabled = true;
  this.classList.add("disabled");

  // keeping track of remaining time
  let timeLeft = seconds;

  // updating timer every second
  const timer = setInterval(function () {
    // calculating minutes and seconds to show
    const minutesLeft = Math.floor(timeLeft / 60);
    const secondsLeft = timeLeft % 60;

    timerDisplay.textContent = `Time Remaining: ${minutesLeft}:${secondsLeft}`;

    timeLeft--;

    // checking if timer is finished
    if (timeLeft < 0) {
      clearInterval(timer);
      alert("Time is up!");
      timerDisplay.textContent = "Timer finished";
      startTimerBtn.disabled = false;
      startTimerBtn.classList.remove("disabled");
    }
  }, 1000);
});

// timer for tracking time spent on page
let seconds = 0;
const activeTimeDisplay = document.getElementById("active-time");

const updateTimeSpent = setInterval(() => {
  seconds++;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // converting numbers to strings and after this adding leading zero if it's really the case
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes.toString();
  const formattedSeconds =
    remainingSeconds < 10
      ? "0" + remainingSeconds
      : remainingSeconds.toString();

  activeTimeDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
}, 1000);
