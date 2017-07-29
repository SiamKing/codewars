function bmi(weight, height) {
  let bMI = weight / Math.pow(height, 2);
  if (bMI <= 18.5) {
    return 'Underweight';
  } else if (bMI <= 25) {
    return 'Normal';
  } else if (bMI <= 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}
