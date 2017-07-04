function howManyMeasurements(n) {
 var count = 0;
 while (n > 1) {
   n = Math.ceil(n / 3);
   count++;
  }
  return count;
}
