function flipper(strArr){
  let revArr = [];
  strArr.forEach(str => {
    if (str.length == 1) {
      revArr.unshift(str);
    } else {
      str = str.toLowerCase();
      revArr.unshift(str.slice(0, str.length - 1) + str[str.length - 1].toUpperCase());
    }
  })
  
  return revArr.join(' ');
}
