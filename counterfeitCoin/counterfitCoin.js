function howManyMeasurements(n) {
  return n == 1 ? n - 1 : 1 + howManyMeasurements(Math.ceil(n / 3));
}
