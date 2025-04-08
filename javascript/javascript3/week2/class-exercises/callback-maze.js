const startButton = document.getElementById("start");
const output = document.getElementById("output-escape");

function setupRoom1() {
  console.log("Setting up Room 1");
  setTimeout(enterRoom1, 1000);
}

function enterRoom1() {
  output.innerText = "Entered Room 1";
  console.log("Setting up Room 2");
  setTimeout(enterRoom2, 1500);
}

function enterRoom2() {
  output.innerText = "Found a key in Room 2";
  console.log("Setting up Room 3");
  startButton.addEventListener("click", onSecondClick, { once: true });
}

function onSecondClick() {
  setTimeout(unlockRoom3, 2000);
}

function unlockRoom3() {
  output.innerText = "Unlocked Room 3";
  console.log("Setting up Room 4");
  setTimeout(promptEscape, 1000);
}

function promptEscape() {
  output.innerText = "Press any key to escape!";
  document.addEventListener("keydown", escapeRoom, { once: true });
}

function escapeRoom() {
  output.innerText = "Escaped the room!";
}

// This is our initial event listener
startButton.addEventListener("click", setupRoom1);
