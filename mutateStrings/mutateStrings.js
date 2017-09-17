function mutateMyStrings(stringOne, stringTwo){
  let str = stringOne;
  stringOne = stringOne.split('');

  for (let i = 0; i < stringOne.length; i++) {
    if (stringOne[i] !== stringTwo[i]) {
      stringOne[i] = stringTwo[i];
      str += '\n' + stringOne.join('');
    }
  }
  return str + '\n';
}

function mutateMyStrings(stringOne, stringTwo){
  let str = stringOne,
      i = 0,
      arrayOne = stringOne.split('');

  while (stringOne !== stringTwo) {
    if (stringOne[i] !== stringTwo[i]) {
      arrayOne[i] = stringTwo[i];
      stringOne = arrayOne.join('');
      str += '\n' + stringOne;
    }
    i++;
  }
  return str + '\n';
}
