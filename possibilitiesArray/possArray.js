function isAllPossibilities(x){
  x = x.sort((a,b) => a - b);
  let y = [...Array(x.length).keys()];

  if (x.toString() == y.toString() && x.length !== 0) {
    return true;
  }
  return false;
}
