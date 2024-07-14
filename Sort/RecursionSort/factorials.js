// https://btholt.github.io/complete-intro-to-computer-science/recursion/

function factorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}

/* 

  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7
 
 */

function nestedAdd(array) {
  let sum = 0;
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        sum += nestedAdd(array[i]);
      } else {
        sum += array[i];
      }
    }
  }
  return sum;
}

// console.log(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11]));
