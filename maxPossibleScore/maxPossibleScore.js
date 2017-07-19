function maxPossibleScore(obj, arr) {
  let tot = 0,
      key;

  arr = arr.map(val => val.toString());

  for (key in obj) {
    if (arr.includes(key)) {
      tot += obj[key] * 2;
    } else {
      tot += obj[key];
    }
  }
  return tot;
}
