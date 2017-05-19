function duplicateCount(text){
  text = text.toLowerCase().split('');
  const hashMap = [];
  let results = 0;

  text.forEach(char => {
    if (hashMap[char]) {
      hashMap[char] += 1;
    } else {
      hashMap[char] = 1;
    }
  })

  for (let char in hashMap) {
    hashMap[char] > 1 ? results++ : results;
  }

  return results;
}
