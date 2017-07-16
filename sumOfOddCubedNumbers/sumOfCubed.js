function cubeOdd(arr) {
  let tot = 0,
      i;

  for (i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      if (arr[i] & 1) {
        tot += Math.pow(arr[i], 3);
      }
    } else {
      return undefined;
    }
  }

  return tot;
}
