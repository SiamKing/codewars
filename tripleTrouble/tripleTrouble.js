function tripleTrouble(one, two, three){
  let combinedStr = '',
      i;

  for (i = 0; i < one.length; i++) {
    combinedStr += one[i] + two[i] + three[i];
  }
  return combinedStr;
 }
