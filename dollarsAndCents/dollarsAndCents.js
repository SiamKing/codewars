function formatMoney(amount){
  return amount % 1 != 0 ? `$${parseFloat(Math.round(amount * 100) / 100).toFixed(2)}` : `$${amount}.00`;
}
