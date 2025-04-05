const secretNumber = 3;

// and then we get elements from the HTML page
const input = document.getElementById("guess-number");
const submitButton = document.getElementById("submit-guess");
const outputElement = document.getElementById("output-guess");

// when the button is clicked
submitButton.addEventListener("click", function () {
  const userGuess = Number(input.value); // get the number from the input

  // Here we make a new promise
  const guessPromise = new Promise(function (resolve, reject) {
    // we need to wait 1 second
    setTimeout(function () {
      // here we check the number that is guessed
      if (userGuess === secretNumber) {
        resolve("You guessed it right!");
      } else {
        reject("Wrong guess. Try again.");
      }
    }, 1000);
  });

  //  here we handle what happens next
  guessPromise
    .then(function (message) {
      outputElement.innerText = message; // shows the success
    })
    .catch(function (error) {
      outputElement.innerText = error;
    })
    .finally(function () {
      //  Always show this message no matter what
      const tryAgainMessage = document.createElement("p");
      tryAgainMessage.innerText = "➕ Try again!";
      outputElement.appendChild(tryAgainMessage);
    });
});
