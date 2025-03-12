function categorizeAge(age) {
  if (age >= 0 && age <= 12) {
    console.log("Child");
  } else if (age >= 13 && age <= 19) {
    console.log("Teenager");
  } else if (age >= 20) {
    console.log("Adult");
  } else {
    console.log("Invalid age");
  }
}

function checkNumber(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

function isLeapYear(year) {
  if (year % 4 === 0) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

categorizeAge(10);
categorizeAge(16);
categorizeAge(25);

checkNumber(5);
checkNumber(-3);
checkNumber(0);

isLeapYear(2024);
isLeapYear(2023);
