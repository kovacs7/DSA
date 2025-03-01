
// https://btholt.github.io/complete-intro-to-computer-science/bubble-sort/
/*
worst & average case time - O(n2) | best case sorted list O(n)
space-O(1)
*/

// animation - https://yongdanielliang.github.io/animation/web/BubbleSortNew.html

function bubbleSort(nums) {
  let swapped = false;
  do {
    swapped = false;
    let iterations = 0;
    for (let i = 0; i < nums.length  - iterations; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
        ++iterations;
      }
    }
  } while (swapped);
  return nums
}

function bubbleSort(nums) {
  for (let i = nums.length - 1; i >= 1; i--){
    let didSwap = 0
    for ( let j = 0 ; j <= i - 1; j++){
      if (nums[j] > nums[j+1]){
        const temp = nums[j]
        nums[j] = nums[j+1]
        nums[j+1] = temp
        didSwap = 1
      }
    }
    if (!didSwap) break;
  }
  return nums
}

// console.log(bubbleSort([10, 12, 14, 1, 16, 20, 10, 11]));