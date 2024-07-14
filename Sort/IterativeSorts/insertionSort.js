// https://btholt.github.io/complete-intro-to-computer-science/insertion-sort/
// There are other fancy ways as well.


/*
worst & average case time - O(n2) | best case sorted list O(n2)
space-O(1)
*/

// animation- https://yongdanielliang.github.io/animation/web/InsertionSortNew.html

function insertionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i - 1; j >= 0; j--) { 
      if (nums[j] > nums[i - count]) {
        let temp = nums[i - count];
        nums[i - count] = nums[j];
        nums[j] = temp;
      }
      ++count;
    }
  }
  return nums;
}



/*
worst & average case time - O(n2) | best case sorted list O(n)
space-O(1)
*/

function insertionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i - 1; nums[j] > nums[i - count] && j >= 0; j--) { // see the changes here
      let temp = nums[i - count];
      nums[i - count] = nums[j];
      nums[j] = temp;
      ++count;
    }
  }
  return nums;
}