function findDeletedNumber(arr, mixArr) {
  if (!arr.length) {
    return 0;
  } else if (!mixArr.includes(arr[0])) {
    return arr[0];
  } else {
    return findDeletedNumber(arr.splice(1), mixArr);
  }
}
