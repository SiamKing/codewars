function isAllPossibilities(x){
  if (x.length == 0) {
    return false;
  }
  let i = 0;
  while (i < x.length) {
     if (x.includes(i)) {
       i++;
      } else {
        return false;
      }
  }
  return true;
}
