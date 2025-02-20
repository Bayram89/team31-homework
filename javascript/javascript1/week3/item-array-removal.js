const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "Kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];

const nameToRemove = "Peter";

const index = names.indexOf(nameToRemove);
if (index !== -1) {
  names.splice(index, 1);
}

console.log(names);

//just learned why I can't use the delete method an array. The delete method deletes the value of the array but does not change the length of the array. So, if I use the delete method, I will have an array with an empty value at the index of the deleted value. That's why I should use the splice method to remove an item from an array.
