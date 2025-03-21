// here's my counter variable
let counter = 0;

// here are the buttons using their IDs
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

// here are the event listeners for the buttons
button1.addEventListener("click", function () {
  setTimeout(() => {
    console.log(counter);
    counter++;
  }, 1000);
});

button2.addEventListener("click", function () {
  console.log(counter);
  counter++;
});

console.log("This is the Delay Clicker Exercise");

const button = document.getElementById("delayButton");

// here's the click event listener
button.addEventListener("click", function () {
  console.log("Button clicked! Waiting 2 seconds...");

  // here's the setTimeout to add a delay
  setTimeout(function () {
    console.log("This text was delayed by 2 seconds");
  }, 2000);
});

// here's a callback function
const logMessage = function () {
  console.log("DOM fully loaded and parsed");
};

// here's the event listener for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", logMessage);

// here's the handler function to log mouse coordinates
function printMousePosition(event) {
  console.log("X: " + event.clientX + ", Y: " + event.clientY);
}

// here's the event listener for the mouse movements
document.addEventListener("mousemove", printMousePosition);

// MOUSE POSITION ONLINE TOOL

// here are the variables to store the sum of the x and y positions
let totalX = 0;
let totalY = 0;

// how many times the mouse has moved
let count = 0;

// function to track the mouse movement
function trackMouse(event) {
  totalX += event.clientX;
  totalY += event.clientY;
  count++;
}

// an event listener to capture mouse movement
document.addEventListener("mousemove", trackMouse);

// adter 5 seconds, calculates and shows the avarage position
setTimeout(function () {
  const avgX = Math.round(totalX / count);
  const avgY = Math.round(totalY / count);
  document.getElementById(
    "result"
  ).textContent = `Average position of the mouse: X = ${avgX}, Y = ${avgY}`;
}, 5000);
