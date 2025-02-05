console.log("==== Goodboy-Oldboy (A dog age calculator) ====");

// First things first, I am expected to create the following variables. They are:

let dogYearOfBirth; //When is the dog born? aka. Dog's birth year?
dogYearOfBirth = 2021; //I put my dog's birth year here

let dogYearFuture = 2045; //How old will the dog be in future year?

let dogYear; //After we have calculated dog's age AND one dog year is the equivalent of seven human years! Good to know!
dogYear = dogYearFuture - dogYearOfBirth; //Here I calculate dog's age and multiply by 7 to find dog's age in human years

let shouldShowResultInDogYears; //Here we use boolean variable due to T/F
shouldShowResultInDogYears = true; //true = dog years, false = human years

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
