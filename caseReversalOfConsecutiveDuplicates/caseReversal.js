function reverseCase(str) {
  let indices = [],
      identical,
      strArr = str.split(''),
      i, j;

  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1] || str[i] === str[i - 1]) {
      indices.push(i);
    }
  }

  indices = [...new Set(indices)];

  indices.forEach(index => {
    identical = strArr.splice(index, 1).toString();
    identical = identical.toUpperCase() === identical ? identical.toLowerCase() : identical.toUpperCase();
    strArr.splice(index, 0, identical)
  })

  return strArr.join('');
}
