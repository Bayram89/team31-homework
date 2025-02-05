console.log("==== Ez Namey (Startup name generator) ====");

// Two arrays down here:
const firstWords = [
  "Ecological",
  "Future",
  "Clean",
  "Smart",
  "Pure",
  "Green",
  "Friendly",
  "Natural",
  "Solar",
  "Clever",
];
const secondWords = [
  "Thrive",
  "Solutions",
  "Cycle",
  "Roots",
  "Pulse",
  "Horizon",
  "Sphere",
  "Corporation",
  "Hub",
  "Space",
];

// Making a random index between 0 to 9
const randomNumber = Math.floor(Math.random() * 10);

// Making the startup name by combining these two random words
const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

// Now logging the startup names & how many characters it has
console.log("The startup is " + [startupName]);
console.log("and it has", [startupName.length], " characters.");

// Now 4 project names is required in the instructions. For this we need "function"
function generateStartupName() {
  const randomIndex = Math.floor(Math.random() * 10);
  const startupName = firstWords[randomIndex] + " " + secondWords[randomIndex];
  return startupName;
}

// Generating and logging 4 startup project names
for (let i = 0; i < 4; i++) {
  const startupName = generateStartupName();
  console.log("Startup Name " + (i + 1) + ": " + startupName);
}
