function reverseCase(str) {
  return str.replace(/([a-zA-Z])\1+/g, char => char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase());
}


function isPrime(num) {
  if (num === 0 || !(num & 1) && num > 2) {
    return false;
  }

  const sqrNum = Math.round(Math.sqrt(num));
  let i = 3;

  for (; i <= sqrNum; i += 2) {
    if (num % i == 0) {
      return i;
    }
  }
  return true;
}
