const button = document.getElementById("get-mood-joke"); // Here we get the button element from the DOM
const moodSelect = document.getElementById("mood"); // Here is the mood drop
const output = document.getElementById("output"); // Here is where we show a joke

function displayMessage(text, isError = false) {
  output.innerHTML = "";
  const p = document.createElement("p");
  p.textContent = text;
  output.appendChild(p);
}
button.addEventListener("click", async () => {
  // First we stop the user from clicking again while the joke is loading
  button.disabled = true;
  output.textContent = ""; // We clear the output

  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/jokes/random"
    );
    const data = await response.json();
    const mood = moodSelect.value; // We get the mood from the drop down
    const punchline =
      mood === "bad" ? data.punchline.toUpperCase() : data.punchline;

    displayMessage(data.setup + " " + punchline);
  } catch (error) {
    displayMessage("Oops! Couldn't get a joke.", true);
  } finally {
    button.disabled = false; // We're turning the button back on no matter what happens success or error
    console.log("done!");
  }
});
