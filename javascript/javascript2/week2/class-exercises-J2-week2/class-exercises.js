const restaurants = [
  {
    name: "Burger Haven",
    address: "123 Burger Lane, Foodtown",
    type: "burger",
    rating: 4.2,
  },
  {
    name: "Sushi World",
    address: "456 Sushi St, Roll City",
    type: "sushi",
    rating: 3.8,
  },
  {
    name: "Pizza Paradise",
    address: "789 Cheese Blvd, Slice City",
    type: "pizza",
    rating: 4.0,
  },
  {
    name: "Pasta Palace",
    address: "321 Noodle Ave, Spaghetti Town",
    type: "italian",
    rating: 4.6,
  },
  {
    name: "Taco Time",
    address: "654 Taco Way, Salsa City",
    type: "mexican",
    rating: 3.5,
  },
  {
    name: "Vegan Delight",
    address: "987 Green St, Plant City",
    type: "vegan",
    rating: 4.7,
  },
  {
    name: "Steakhouse Supreme",
    address: "159 Meat St, Grill Town",
    type: "steakhouse",
    rating: 4.9,
  },
  {
    name: "Sushi Express",
    address: "753 Fish Rd, Roll City",
    type: "sushi",
    rating: 3.9,
  },
  {
    name: "Italian Bistro",
    address: "852 Pasta St, Spaghetti Town",
    type: "italian",
    rating: 4.4,
  },
  {
    name: "Pizza Corner",
    address: "951 Pepperoni Pl, Slice City",
    type: "pizza",
    rating: 3.7,
  },
  {
    name: "Taco Fiesta",
    address: "246 Salsa St, Salsa City",
    type: "mexican",
    rating: 4.5,
  },
  {
    name: "Vegan Bistro",
    address: "369 Greenway, Plant City",
    type: "vegan",
    rating: 4.1,
  },
  {
    name: "BBQ Barn",
    address: "753 Smoke Rd, Grill City",
    type: "steakhouse",
    rating: 4.2,
  },
  {
    name: "Dessert Oasis",
    address: "852 Sweet Tooth St, Sugar City",
    type: "dessert",
    rating: 4.9,
  },
  {
    name: "Burger Joint",
    address: "159 Patty Pl, Foodtown",
    type: "burger",
    rating: 3.6,
  },
  {
    name: "Taco Shack",
    address: "159 Taco Rd, Salsa City",
    type: "mexican",
    rating: 3.8,
  },
];
for (let i = 0; i < restaurants.length; i++) {
  console.log(restaurants[i]);
}
restaurants.forEach((restaurant) => {
  console.log(restaurant);
});

const restaurants2 = [
  { name: "McDonald's", location: "Christianshavn" },
  { name: "Burger King", location: "Rådhusplads" },
  { name: "Noma", location: "Indre By" },
  { name: "Geranium", location: "København Ø" },
];
// ##Exercises 2
// 1. Create a new array containing the restaurant names **using a traditional loop**.
const restaurantNames1 = [];

for (let i = 0; i < restaurants.length; i++) {
  restaurantNames1.push(restaurants[i].name);
}

console.log("Using for loop:", restaurantNames1);

// ##Exercises 2
//2Create a new array containing the restaurant names **using an array function**.

const restaurantNames2 = restaurants.map((restaurant) => restaurant.name);

console.log("Using map function:", restaurantNames2);

// const arr = []
// arr[1] = 1; YES
// arr [2] = 2; YES
// arr = [1,2] NO
//arr = 1,2 NO

const restaurants3 = [
  { name: "Luigi's Pizzeria", cuisine: "italian", location: "New York" },
  { name: "KFC", cuisine: "fast", location: "Los Angeles" },
  { name: "Sushi World", cuisine: "japanese", location: "San Francisco" },
];

console.log("Italian and Pizza Restaurants:");

for (let i = 0; i < restaurants3.length; i++) {
  if (
    restaurants3[i].cuisine === "italian" ||
    restaurants3[i].cuisine === "pizza"
  ) {
    console.log(restaurants3[i].name);
  }
}

// ## Excercise 3
// 1. List all the `italian` and `pizza` restaurants in the console **using a traditional loop**.
const italianAndPizzaRestaurants = [];
let i = 0;
while (i < restaurants.length) {
  if (restaurants[i].type === "pizza" || restaurants[i].type === "italian") {
    italianAndPizzaRestaurants.push(restaurants[i]);
  }

  i++;
}
console.log(italianAndPizzaRestaurants);

// 2. List all the `italian` and `pizza` restaurants in the console **using an array function**.

const pizzaAndItalianRestaurants = restaurants.filter(function (restaurant) {
  if (restaurant.type === "pizza" || restaurant.type === "italian") {
    return true;
  } else {
    return false;
  }
});

console.log(pizzaAndItalianRestaurants);

restaurants.sort((a, b) => b.rating - a.rating);
console.log(restaurants);
