function iqTest(numbers){
  const numbersArr = numbers.split(' '),
        evenArr = numbersArr.filter(num => !(num & 1)),
        oddArr = numbersArr.filter(num => num & 1);

  return evenArr.length > oddArr.length ? numbersArr.indexOf(oddArr[0]) + 1 : numbersArr.indexOf(evenArr[0]) + 1;
}
