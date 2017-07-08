function beggars(values, n){
  let begPounds = [],
      tot,
      i,
      j;

  for (i = 0; i < n; i++) {
    j = i;
    tot = 0;
    while (j < values.length) {
      tot += values[j];
      j += n;
    }
    begPounds.push(tot);
  }
  return begPounds;
}
