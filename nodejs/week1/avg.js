// Here we first get command line arguments, ignorring the first two elements
const args = process.argv.slice(2);

// But if there're basically no argument, then we print a message and exit
if (args.length === 0) {
  console.log("Please provide numbers");
  process.exit(1);
}

// Here with this loop we convert each comment line argument from strings to numbers
const numbers = [];
for (let i = 0; i < args.length; i++) {
  const num = Number(args[i]);
    // If any of the arguments is not a number, we print a message and exit
  if (isNaN(num)) {
    console.log("Please provide only numbers");
    process.exit(1);
  }
  numbers.push(num);
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
