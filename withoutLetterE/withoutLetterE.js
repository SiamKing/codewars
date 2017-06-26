function find_E(str){
  if (str == null) {
    return null;
  }
  if (str == '') {
    return '';
  }
  let countE = (str.toLowerCase().match(/e/g) || []).length
  return countE == 0 ? 'There is no "e".' : countE + "";
}
