import { generateSortArr, generateRandomValue } from "./index.js";

const binarSearch = (arr, find) => {
  let maxIndex = arr.length - 1;
  let minIndex = 0;

  while (minIndex <= maxIndex) {
    let mid = Math.ceil((maxIndex + minIndex) / 2);
    if (arr[mid] === find) {
      return arr[mid];
    }
    if (arr[mid] > find) {
      maxIndex = mid - 1;
    } else {
      minIndex = mid + 1;
    }
  }
  return null;
};

console.log(binarSearch(generateSortArr(100), generateRandomValue(0, 99)));

//O(log n)
