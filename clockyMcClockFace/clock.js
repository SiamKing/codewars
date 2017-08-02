var whatTimeIsIt = function(angle) {
  let hour = Math.floor(angle / 30) == 0 ? 12 : Math.floor(angle / 30),
      minutes = Math.floor((angle % 30) * 2);

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hour}:${minutes}`;
}
