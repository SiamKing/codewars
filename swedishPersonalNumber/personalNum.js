function validatePersonalNumber (num) {
  var regex = new RegExp(/^(19[0-9][0-9]|200[0-9]|201[0-6])([0-1][0-9])([0-3][0-9])[+-]?([0-9][0-9][0-9][0-9])$/)
  return regex.test(num);
}
