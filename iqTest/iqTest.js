function iqTest(numbers){
  const evenArr = [],
        oddArr = [],
        numbersArr = numbers.split(' ');

  numbersArr.forEach(num => {
    if (num & 1) {
      oddArr.push(num);
    } else {
      evenArr.push(num);
    }
  });

  return evenArr.length > oddArr.length ? numbersArr.indexOf(oddArr[0]) + 1 : numbersArr.indexOf(evenArr[0]) + 1;
}
