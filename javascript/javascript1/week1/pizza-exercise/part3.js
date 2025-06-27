console.log("==== PART 3 ====");

let owner = "Maria";
console.log("Owner:", owner);

const restaurantName = "Carlo's Pizzaria";
console.log("Restaurant:", restaurantName);

const pizzasName = [
  "Margherita Pizza",
  "Pesto Pizza",
  "Pepperoni Pizza",
  "BBQ Chicken Pizza",
  "White Pizza",
];

const pizzaPrices = [90, 120, 120, 130, 110];

console.log("Our Menu:");

console.log("#1", pizzasName[0], "-", pizzaPrices[0], "DKK");
console.log("#2", pizzasName[1], "-", pizzaPrices[1], "DKK");
console.log("#3", pizzasName[2], "-", pizzaPrices[2], "DKK");
console.log("#4", pizzasName[3], "-", pizzaPrices[3], "DKK");
console.log("#5", pizzasName[4], "-", pizzaPrices[4], "DKK");

const order = [0, 1, 1, 2, 4];

let totalPrice =
  pizzaPrices[0] +
  pizzaPrices[1] +
  pizzaPrices[1] +
  pizzaPrices[2] +
  pizzaPrices[4];
console.log("Order:", order);
console.log("Total price: " + totalPrice.toFixed(2) + " DKK");

console.log("----> Bonus Task <----");

// Now applying 20% discount on the first 2 pizzas. This I could not do alone by myself

const discount = (pizzaPrices[order[0]] + pizzaPrices[order[1]]) * 0.2;

// New discounted total price
const discountedPrice = totalPrice - discount;

// Results
console.log("Discount (20% off first two pizzas):", discount.toFixed(2), "DKK");

console.log(
  "Total price with 20% discount on the first two pizzas:",
  discountedPrice.toFixed(2),
  "DKK"
);

// Vegetarian array t = v, f = not v

const vegetarian = [true, true, false, false, true];

// Putting (v) for veg pizzas

console.log("----> Updated Menu with Vegetarian Option <----");

console.log(
  "#1",
  vegetarian[0] ? pizzasName[0] + " (v)" : pizzasName[0],
  "-",
  pizzaPrices[0],
  "DKK"
);

console.log(
  "#2",
  vegetarian[1] ? pizzasName[1] + " (v)" : pizzasName[1],
  "-",
  pizzaPrices[1],
  "DKK"
);

console.log(
  "#3",
  vegetarian[2] ? pizzasName[2] + " (v)" : pizzasName[2],
  "-",
  pizzaPrices[2],
  "DKK"
);

console.log(
  "#4",
  vegetarian[3] ? pizzasName[3] + " (v)" : pizzasName[3],
  "-",
  pizzaPrices[3],
  "DKK"
);

console.log(
  "#5",
  vegetarian[4] ? pizzasName[4] + " (v)" : pizzasName[4],
  "-",
  pizzaPrices[4],
  "DKK"
);
