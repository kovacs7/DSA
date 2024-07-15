function selectionSort(arr) {
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

console.log(selectionSort([10, 30, 12, 14, 1, 16, 20, 10, 11]));
