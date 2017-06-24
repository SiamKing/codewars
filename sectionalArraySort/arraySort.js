function sectSort(arr, start, length) {
  let newArr;

  if (length === undefined || length === 0) {
    newArr = arr.splice(start);
  } else {
    newArr = arr.splice(start, length);
  }

  newArr = newArr.sort((a,b) => a - b);
  arr.splice(start, 0 , newArr);
  return [].concat(...arr);
}
