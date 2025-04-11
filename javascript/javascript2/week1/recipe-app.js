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
document.addEventListener("DOMContentLoaded", function () {
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
});