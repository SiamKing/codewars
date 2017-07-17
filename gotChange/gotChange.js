const denomArr = [100, 50, 20, 10, 5, 1];

function giveChange(amount) {
  let arr = [],
      roundedNum;

  return denomArr.map(num => {
    roundedNum = Math.floor(amount / num);
    amount = amount % num;
    return roundedNum;
  }).reverse()

}
