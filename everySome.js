//everySome.js  every & some 

function every(arr, test) {
  for (var i=0; i<arr.length; i++) {
    if (! test(arr[i])) {
      return false;
    }
  };
  return true;
}

function some(arr, test) {
  for (var i=0; i<arr.length; i++) {
    if (test(arr[i])) {
      return true;
    }
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));



