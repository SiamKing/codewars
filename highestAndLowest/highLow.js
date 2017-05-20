function highAndLow(numbers){
  numbers = numbers.split(' ').map(num => +num);
  const max = Math.max(...numbers),
        min = Math.min(...numbers);
  return `${max} ${min}`
}
