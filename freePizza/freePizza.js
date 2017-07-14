function pizzaRewards(customers, minOrders, minPrice) {
  let currentCustomer,
      rewardedCustomers =[],
      i;

  for (let key in customers) {
    currentCustomer = [];
    for (i = 0; i < customers[key].length; i++) {
      if (customers[key][i] >= minPrice) {
        currentCustomer.push(customers[key][i])
      }
    }
    if (currentCustomer.length >= minOrders) {
      rewardedCustomers.push(key);
    }
  }
  return rewardedCustomers;
}
