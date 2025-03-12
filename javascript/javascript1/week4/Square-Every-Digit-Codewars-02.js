function squareDigits(num) {
  let numStr = num.toString();
  let result = "";

  for (let i = 0; i < numStr.length; i++) {
    let digit = Number(numStr[i]);
    result = result + (digit * digit).toString();
  }
  return Number(result);
}
console.log(squareDigits(3212));
console.log(squareDigits(2112));
console.log(squareDigits(0));
