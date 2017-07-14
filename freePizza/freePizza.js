function pizzaRewards(customers, minOrders, minPrice) {
  let rewardedCustomers =[];

  for (let key in customers) {
    if (customers[key].filter(price => price >= minPrice).length >= minOrders) {
      rewardedCustomers.push(key)
    }
  }
  return rewardedCustomers;
}
