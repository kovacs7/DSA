// O(n2)
// In selection sort, you have to select minimum then swap but can also do select max and them swap as well.

function selectionSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }

  return(arr)
}

function selectionSort(arr) {
  if (arr === undefined) return "Please enter the required Array.";
  for (let i = arr.length - 1; i > 0; i--) {
    let max = arr[0];
    let max_index = 0;
    for (let j = 1; j <= i; j++) {
      if (arr[j] > max) {
        max_index = j;
        max = arr[j];
      }
    }
    const temp = arr[i];
    arr[i] = arr[max_index];
    arr[max_index] = temp;
  }
  return arr;
}

console.log(selectionSort([10, 12, 14, 1, 16, 20, 10, 11]));

// unique string value object with number of repeatition questions

function strings(str) {
  const arr = str.split("");
  // unique value array
  const uniqueArray = arr.filter(
    (value, index, arr) => arr.indexOf(value) === index
  );
  // filter by unique value array
  const resultObject = {};
  for (let i = 0; i < uniqueArray.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (uniqueArray[i] === arr[j]) {
        ++count;
      }
    }
    if (
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(
        uniqueArray[i]
      )
    ) {
      resultObject[uniqueArray[i]] = count;
    }
  }
  return resultObject;
}

console.log(strings("W1@34u9BYDuddqfyu"));
