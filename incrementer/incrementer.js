function incrementer(arr) {
  return arr.map((n, i) => (n + i + 1) % 10)
}
