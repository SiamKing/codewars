const replacementArr = [[/[hw]/g, ''], [/[bfpv]/g, 1], [/[cgjkqsxz]/g, 2], [/[dt]/g, 3], [/[l]/g, 4], [/[mn]/g, 5], [/[r]/g, 6]];

var soundex = function(names) {
  names = names.toLowerCase();
  const firstLetters = firstLetter(names);

  let i = 0;
  while (i < replacementArr.length) {
    names = names.replace(replacementArr[i][0], replacementArr[i][1]);
    i++;
  }

  names = checkLength(replaceVowels(replaceOneDigit(names)), firstLetters);

  return names.toUpperCase();
}

function firstLetter(names) {
  return names.split(' ').map(name => name[0] )
}

function replaceVowels(names) {
  let namesSplit = names.split(' '),
      newName = '';

  return namesSplit.map(name => {
    newName = name.slice(1);
    newName = newName.replace(/[aeiouy]/g, '')
    return name[0] + newName;
  }).join(' ')

}

function replaceOneDigit(names) {
  let i = 1;

  while (i <= names.length) {
    if (names[i] === names[i - 1]) {
      let num = `${names[i]}${names[i - 1]}`
      names = names.replace(num, names[i]);
      i -= 1;
    }
    i++;
  }
  return names;
}

function checkLength(names, firstLetters) {
  return names.split(' ').map((name, index) => {
    let i = name.replace(/[^0-9]/g,"").length;

    if (firstLetters[index] == 'h' || firstLetters[index] == 'w') {
      if (name.replace(/[^a-z]/g, '').length < 1) {
        name = firstLetters[index] + name;
      } else {
        name = firstLetters[index] + name.slice(1);
      }
    } else {
      name = firstLetters[index] + name.slice(1);
    }

    while (i < 4) {
      name += '0';
      i = name.replace(/[^0-9]/g,"").length
    }
    name = name.slice(0, 4)
    return name;
  }).join(' ');
}
