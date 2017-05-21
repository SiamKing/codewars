function sequenceClassifier(arr){
  let len = arr.length

  if (arr[0] < arr[len - 1]) {
    return increasing(arr);
  } else if (arr[0] > arr[len - 1]) {
    return decreasing(arr);
  } else {
    return unorderedOrConstant(arr);
  }

}

function increasing(arr) {
 let type = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return 0;
    } else if (arr[i] == arr[i - 1]) {
      type = 2;
    }
  }
  return type;
}

function decreasing(arr) {
  let type = 3;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      return 0;
    } else if (arr[i] == arr[i - 1]) {
      type = 4;
    }
  }
  return type;
}

function unorderedOrConstant(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      return 0;
    }
  }

  return 5;
}
     
