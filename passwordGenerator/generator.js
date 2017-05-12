function passwordGen(){
  var random1 = randomNumGen(),
      random2 = randomNumGen(),
      random3 = randomNumGen();

  var pw = randomStrGen(random1, random2) + randomStrGen(random3, random2).toUpperCase() + randomStrNumGen();

  return lengthChecker(pw);
}

function randomNumGen() {
  return Math.round(Math.random() * 10);
}

function randomStrNumGen(rand1, rand2) {
  return ((Math.random() + 1).toString(10)+'000000').slice(2, rand1 + rand2);
}

function randomStrGen(rand1, rand2) {
  return ((Math.random() + 1).toString(36)+'00000000000000000').slice(2, rand1 + rand2);
}

function lowerCaseChecker(pw) {
  if (/\b[a-z]\b/.test(pw)) {
    return pw;
  } else {
     return pw += 'a';
  }
}

function upperCaseChecker(pw) {
  if (/\b[A-Z]\b/.test(pw)) {
    return pw;
  } else {
    return pw += 'Z';
  }
}

function digitChecker(pw) {
  if (/\b\d+\b/.test(pw)) {
    return pw;
  } else {
    return pw += '1';
  }
}

function lengthChecker(pw) {
  if (pw.length > 20) {
    pw = pw.split('').slice(10).join('');
  } else if (pw.length < 6) {
    pw += randomStrGen(2, 3);
  }
  pw = lowerCaseChecker(pw);
  pw = upperCaseChecker(pw);
  pw = digitChecker(pw);
  return pw.length > 20 || pw.length < 6 ? lengthChecker(pw) : pw;
}
