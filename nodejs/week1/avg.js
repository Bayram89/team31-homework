// Here we first get command line arguments, ignoring the first two elements
const args = process.argv.slice(2);

// But if there're basically no argument, then we print a message and exit
if (args.length === 0) {
  console.log("Please provide numbers");
  process.exit(1);
}

// Convert all command line arguments to numbers using map
const numbers = args.map(Number);

// Check if any argument is not a valid number
if (numbers.some(isNaN)) {
  console.log("Please provide only numbers");
  process.exit(1);
}

// We're calculating the sum of all the numbers in the numbers array
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// We also calculate the average and divide the sum by the number of elements in the numbers array
const average = sum / numbers.length;

// And here we print the average
console.log(`The average of ${numbers.join(", ")} is ${average}`);
