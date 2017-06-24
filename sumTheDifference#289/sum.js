function sumtheDifference(equation) {
  equation = equation.replace(/[()0]/g, '').split(' ')
  let arr = [];
  equation.forEach(val => isNaN(+val) || val == '' ? val : arr.push(val))
  console.log(arr)
  let newArr = [];
  arr.forEach(val => {
    if (val.length > 1) {
      if (val.includes('-')) {
        if (val.length > 2) {
          newArr.push(val.slice(0, 2));
          let i = 2
          while (i < val.length) {
            newArr.push(val.slice(i, i + 1));
            i++;
          }
        } else {
          newArr.push(val)
        }
      } else {
        let i = 0
        while (i < val.length) {
          newArr.push(val.slice(i, i + 1));
          i++;
        }
      }
    } else {
        newArr.push(val);
    }
  })
  console.log(newArr)
  let evenSum = newArr.reduce((tot, val) => +val % 2 == 0 ? tot + +val : tot, 0)
  let oddSum = newArr.reduce((tot, val) => +val & 1 ? tot + +val : tot, 0)
  return evenSum - oddSum;

}
