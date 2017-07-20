function avgArray(arr) {
  let subArrLen = arr[0].length,
      aveArr = [],
      subTot,
      i,
      j;

  for (i = 0; i < subArrLen; i++) {
    subTot = 0;
    for (j = 0; j < arr.length; j++) {
     subTot += arr[j][i];
    }
    aveArr.push(subTot / arr.length);
  }

  return aveArr;
}
