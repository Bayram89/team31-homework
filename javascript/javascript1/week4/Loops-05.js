function print1to10() {
  for (let i = 1; i < 11; i++) {
    console.log(i);
  }
}
print1to10();

function print10to1() {
  for (let i = 10; i > 0; i--) {
    console.log(i);
  }
}
print10to1();

function printEvenNumbers() {
  for (let i = 2; i < 21; i = i + 2) {
    console.log(i);
  }
}
printEvenNumbers();

function printArrayItems(array) {
  for (let item of array) {
    console.log(item);
  }
}
const names = ["john", "jane", "joe"];
printArrayItems(names);

function printArrayItemsBackwards(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}
printArrayItemsBackwards(names);
