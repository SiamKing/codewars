function findLongest(array){
  let highNum = 0;

  array.forEach(num => {
    if (num > highNum && num.toString().length !== highNum.toString().length) {
      highNum = num;
    }
  })

  return highNum;
}
