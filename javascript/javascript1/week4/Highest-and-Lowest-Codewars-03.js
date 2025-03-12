function highAndLow(numbers) {
  let numArray = numbers.split(" ");
  let numList = numArray.map(Number);
  let highest = Math.max(...numList);
  let lowest = Math.min(...numList);
  return highest + " " + lowest;
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));
