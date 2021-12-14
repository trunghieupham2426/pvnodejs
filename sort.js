function bubbleSort(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }

  return arr;
}

console.log(bubbleSort([3, 1, 4, 2, 0]));

//  =========

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}

console.log(selectionSort([3, 4, 1, 2, 9]));

// //////
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(i, j);
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort([1, 2, 3, 5, 4]));

//0 3 4 1 2 -5 9
//    i s
// 0 1 3 4 2 -5 9
//       i s
// 0 1 2 3 4 -5 9
//         i  s
