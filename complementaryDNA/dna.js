function DNAStrand(dna){
  var str = ''

  dna.split('').forEach(char => {
    if (char == 'A') {
      str += 'T';
    } else if (char == 'T') {
      str += 'A';
    } else if (char == 'C') {
      str += 'G';
    } else if (char == 'G') {
      str += 'C';
    }
  })

  return str;
}
