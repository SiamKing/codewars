function highAndLow(numbers){
  numbers = numbers.split(' ').map(num => +num);
  const max = Math.max(...numbers),
        min = Math.min(...numbers);
  return `${max} ${min}`
}

function highAndLow(numbers){
  numbers = numbers.split(' ').map(num => +num).sort((a,b) => a - b);
  return `${numbers[numbers.length - 1]} ${numbers[0]}`
}
