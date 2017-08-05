function numberToPower(number, power){
  return Array(power).fill(number).reduce((tot, num) => tot * num, 1)
}
