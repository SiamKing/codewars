function mutateMyStrings(stringOne, stringTwo){
  let str = stringOne;
  stringOne = stringOne.split('');

  for (let i = 0; i < stringOne.length; i++) {
    if (stringOne[i] !== stringTwo[i]) {
      stringOne.splice(i, 1, stringTwo[i]);
      str += '\n' + stringOne.join('');
    }
  }
  return str + '\n';
}
