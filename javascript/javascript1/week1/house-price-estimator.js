console.log("==== Housey pricey (A house price estimator) ====");

// We've got to calculate the price of the house roughly ... based on the formula given
// gardenSize both for julia & Peter is clear, and to find the volume of a house  width * height * depth all have to multiplied, a quick google search suggests.

function calculateHousePrice(gardenSize, depth, height, width) {
  //Learnt we use function to calculate
  const volume = depth * height * width; //This is to calculate the volume of the house
  const price = volume * 2.5 * 1000 + gardenSize * 300;
  return price;
}

//What Peter has actually in his house

const pGardenSize = 100;
const pDepth = 10;
const pHeight = 10;
const pWidth = 8;
const pPaid = 2500000;

// In order to calculate P's house price
const pPrice = calculateHousePrice(pGardenSize, pDepth, pHeight, pWidth);
console.log(
  "Peter's calculated house price is",
  pPrice,
  "but he has paid 2500000" + "."
);

//Now to find out if the calculated price is higher eller lower than what Peter's paying

if (pPrice > pPaid) {
  console.log("Peter is paying too little!");
} else if (pPrice < pPaid) {
  console.log("Peter is paying too much!");
}

//What Julia has in her house

const jGardenSize = 70;
const jDepth = 11;
const jHeight = 8;
const jWidth = 5;
const jPaid = 1000000;

// In order to calculate J's house price
const jPrice = calculateHousePrice(jGardenSize, jDepth, jHeight, jWidth);
console.log(
  "Julia's calculated house price is",
  jPrice,
  "but she has paid 1000000" + "."
);
//Now finding out if the calculated price is higher or lower that what Julia's paying

if (jPrice > jPaid) {
  console.log("Julia is paying too little!");
} else if (jPrice < jPaid) {
  console.log("Julia is paying too much!");
}
