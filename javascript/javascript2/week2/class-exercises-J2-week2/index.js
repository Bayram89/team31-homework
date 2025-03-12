const newMentors = mentors
  // Copying mentors into newMentors
  .map(function (mentor) {
    return mentor;
  })
  // Filter the mentors with a name starting with A
  .filter((mentor) => {
    return mentor.name.startsWith("A");
  })
  // Sort the filtered mentors by years of experience
  .sort(function (itemA, itemB) {
    if (itemA.yearOfExperience > itemB.yearOfExperience) {
      return -1;
    }

    if (itemA.yearOfExperience < itemB.yearOfExperience) {
      return 1;
    }

    return 0;
  });
// ## Excercise 5: Fusion!!
// Use the results of the Excercise 3 and sort them from the lowest to the highest. Then create a new array containing their names.
const pizzaAndItalianRestaurants = restaurantNames1
  .filter((restaurant) => {
    if (restaurant.type === "pizza" || restaurant.type === "italian") {
      return true;
    } else {
      return false;
    }
  })
  .sort(function (itemA, itemB) {
    if (itemA.rating > itemB.rating) {
      return 1;
    }
    if (itemA.rating < itemB.rating) {
      return -1;
    }
    return 0;
  })
  .map(function (resto) {
    return resto.name;
  });
