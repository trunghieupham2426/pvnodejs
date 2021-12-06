// ========== LINEAR SEARCH =======
const arr = [12, 3, 2, 5, 8, 10, 9, 11];
function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
} // O(n)

// BINARY SEARCH ONLY SEARCH ON SORTED ARRAY
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);
  while (arr[middle] !== value && left <= right) {
    if (arr[middle] < value) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = Math.floor((right + left) / 2);
  }
  if (arr[middle] === value) {
    return middle;
  } else {
    return -1;
  }
}
