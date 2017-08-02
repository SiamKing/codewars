function deepCount(a){
  let count = 0,
      i;

  for (i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      count++;
      count += deepCount(a[i]);
    } else {
      count++;
    }
  }

  return count;
}
