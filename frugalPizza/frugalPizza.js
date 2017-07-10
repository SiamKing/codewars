function pizzaPrice(diameter, price) {
  let squareInches = Math.pow(diameter / 2, 2) * Math.PI;
  return Number.isInteger(Math.round(diameter)) && Number.isInteger(Math.round(price)) ? Math.round(price / squareInches * 100) / 100 : 0;
}
