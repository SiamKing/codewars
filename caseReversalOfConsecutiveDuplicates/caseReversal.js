function reverseCase(str) {
  return str.replace(/([a-zA-Z])\1+/g, char => char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase());
}
