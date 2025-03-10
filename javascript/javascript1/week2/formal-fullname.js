// In order to add this optional formal title before fullname, I write another function
// i use "!" not logical operator to check if name & surname part is empty

function getFullname(firstname, surname, useFormalName) {
  if (!firstname && !surname) {
    return "Name required!";
  }

  let fullname = firstname + " " + surname;

  // here I write a conditional to add lord if useFormalName is true
  if (useFormalName) {
    fullname = "Lord" + fullname;
  }
  return fullname;
}

let fullname3 = getFullname(" Malcolm", "X", true);
let fullname4 = getFullname("", "");
let fullname5 = getFullname("Bella", "Hadid");
let fullname6 = getFullname("Sinead", "O'Connor", false);

console.log(fullname3);
console.log(fullname4);
console.log(fullname5);
console.log(fullname6);

// As required in the assignment, I also write a new function and then add a new parameter.

function getFullname(firstname, surname, useFormalName, gender) {
  if (!firstname && !surname) {
    return "Name required!";
  }
  let fullname = firstname + " " + surname;

  // This conditional therefore adds lord for men and madam for women because we have gender parameter from now on
  if (useFormalName) {
    if (gender === "male") {
      fullname = "Lord " + fullname;
    } else if (gender === "female") {
      fullname = "Madam " + fullname;
    }
  }
  return fullname;
}

console.log(getFullname("Malcolm", "X", true, "male"));
console.log(getFullname("Fatima", "al-Zahra", true, "female"));
console.log(getFullname("Jessy", "Brown", true)); // the situation when the passenger doesn't choose any gender for example
