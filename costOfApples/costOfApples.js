function apples(kilos, price) {
  let discount = 0,
      i;

  for (i = 1; i < 12; i += 2) {
    if (kilos >= i) {
      discount += .05;
    } else {
      break;
    }
  }
  return +(kilos * price - (kilos * price * discount)).toFixed(4);
}
