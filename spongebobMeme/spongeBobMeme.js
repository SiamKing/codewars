function spongeMeme(sentence) {
  return sentence.split('').map((char, i) => {
    if (i % 2) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join('')
}
