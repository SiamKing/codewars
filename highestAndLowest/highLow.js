function highAndLow(numbers){
  numbers = numbers.split(' ')
  return Math.max(...numbers) + ' ' + Math.min(...numbers);
}

function highAndLow(numbers){
  numbers = numbers.split(' ').map(num => +num).sort((a,b) => a - b);
  return `${numbers[numbers.length - 1]} ${numbers[0]}`
}
