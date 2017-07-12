function isAlt(word) {
  const arr = ['a', 'e', 'i', 'o', 'u'];
  let strArr = word.split(''),
      isVowel = arr.includes(strArr[0]),
      i = 1;

  while (i < strArr.length) {
    if (isVowel == arr.includes(strArr[i])) {
      return false;
    }
    isVowel = arr.includes(strArr[i])
    i++;
  }

  return true;
}
