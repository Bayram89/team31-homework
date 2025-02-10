console.log("==== Goodboy-Oldboy (A dog age calculator) ====");

// First things first, I am expected to create the following variables. They are:

const dogYearOfBirth = 2021; //When is the dog born? aka. Dog's birth year? I put my dog's birth year here

const dogYearFuture = 2045; //How old will the dog be in future year?

const dogYear = dogYearFuture - dogYearOfBirth; //After we have calculated dog's age AND one dog year is the equivalent of seven human years! Good to know!

let shouldShowResultInDogYears = true; //Here we use boolean variable due to T/F

if (shouldShowResultInDogYears) {
  console.log(
    "Your dog will be " +
      dogYear * 7 +
      " dogs year old in " +
      dogYearFuture +
      "."
  );
} else {
  console.log(
    "Your dog will be " + dogYear + " human years old in " + dogYearFuture + "."
  );
}
