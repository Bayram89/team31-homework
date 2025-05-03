console.log("==== PART 4====");

const orderNumber2 = [1, 2, 2]; // These are Pesto, Pep og Pep without any discounts
console.log("Order:", orderNumber2);

const totalPrice2 =
  pizzaPrices[order[1]] + pizzaPrices[order[2]] + pizzaPrices[order[2]];
console.log("Total price:", totalPrice2.toFixed(2), "DKK");

// Adding 20% off the first pizza
const discount2 = pizzaPrices[order[0]] * 0.2;

// new discounted total price
const discountedPrice2 = totalPrice2 - discount2;

// Results
console.log("Discount of first pizza:", discount2.toFixed(2), "DKK");

// Plastic bag

const addPlasticBag = 5 + ".00" + " DKK";
console.log("Added plastic bag:", addPlasticBag);

const priceWithBag = discountedPrice2 + addPlasticBag;

const vat = discountedPrice2 * 0.25;

const finalPrice = discountedPrice2 + vat + addPlasticBag;

console.log("VAT (25% on discounted price):", vat.toFixed(2), "DKK");

// Stuck!
