// 1. Fav foods

const favFoods = [
  "Dates",
  "Olives",
  "Figs",
  "Salt",
  "Vinegar",
  "Black cumin",
  "Honey",
];
for (const food of favFoods) {
  console.log(food);
}

// 2. Sum of numbers

function sumArray(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}
const numbers = [5, 10, -98, 17.5, 365, -2.5];
console.log(sumArray(numbers));

// 3. Removing the last element, aka .pop &
//    adding a new element at the end, aka .push

const newNumbers = [10, 20, 30, 40, 50];
newNumbers.pop();
newNumbers.push(60);
console.log(newNumbers);

// 4. The biggest number
function biggestNumber(numbers) {
  let biggest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
      biggest = numbers[i];
    }
  }
  return biggest;
}
const newNumbers2 = [10, 20, 30, 40, 60];
console.log(biggestNumber(newNumbers2));
