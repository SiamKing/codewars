function hiddenWord(num) {
  var numberKey = { '6': 'a', '1': 'b', '7': 'd', '4': 'e', '3': 'i', '2': 'l', '9': 'm', '8': 'n', '0': 'o', '5': 't' };

  return num.toString().split('').reduce((tot, num) => tot + numberKey[num], '')
}


function getMaxProfit(stockPrices) {
  let i = stockPrices.length - 2,
      highPrice = stockPrices[i + 1],
      profits = [];

  while (i >= 0) {
    if (highPrice > stockPrices[i]) {
      profits.push(highPrice - stockPrices[i]);
    } else {
      highPrice = stockPrices[i]
    }
    i--;
  }

  return profits;

}
