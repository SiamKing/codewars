function giveChange(amount) {
  const denomArr = [100, 50, 20, 10, 5];
  let arr = [],
      roundedNum;

  denomArr.forEach(num => {
    roundedNum = Math.floor(amount / num);
    arr.push(roundedNum);
    amount -= roundedNum * num;
  })
  arr.push(amount);

  return arr.reverse();
}
