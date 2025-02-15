// Making a function down below and this way it can calculate it whenever I call it
// Then writing conditional statements(if/else) and this way it decides what I should be wearing

function whatToPutOn(temperature) {
  if (temperature < -1) {
    return "a thick long jacket, wool socks, real boots and a long underwear";
  } else if (temperature < 3) {
    return "a coat, a jumper and a beanie";
  } else if (temperature < 10) {
    return "a normal jacket and jeans";
  } else if (temperature < 15) {
    return "a long sleeved polo, trainers, a light jacket";
  } else if (temperature < 30) {
    return "sandals, and a t-shirt ";
  }
}
let clothesToPutOn = whatToPutOn(21);
console.log(clothesToPutOn);
