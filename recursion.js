import {
  generateRandomArr,
  generateRandomValue,
  generateSortArr,
} from "./index.js";

const arrSum = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[0] + arrSum(arr.slice(1));
  }
};

const arr1 = generateRandomArr(5);
console.log(arr1, arrSum(arr1));

const arrLength = (arr) => {
  if (arr.length === 1) {
    return arr.length;
  } else {
    return 1 + arrLength(arr.slice(1));
  }
};

const arr2 = generateRandomArr(46);
console.log(arr2, arrLength(arr2));

const arrMax = (arr) => {
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  } else {
    const compValue = arrMax(arr.slice(1));
    return arr[0] > compValue ? arr[0] : compValue;
  }
};

const arr3 = generateRandomArr(20);
console.log(arr3, arrMax(arr3));

const recursionBinarSearch = (arr, find) => {
  if (arr.length === 1) {
    return arr[0] === find ? arr[0] : null;
  } else {
    const midIndex = Math.ceil((arr.length - 1) / 2);
    if (find === arr[midIndex]) {
      return arr[midIndex];
    }
    if (arr[midIndex] > find) {
      return recursionBinarSearch(arr.slice(0, midIndex), find);
    } else {
      return recursionBinarSearch(arr.slice(midIndex, arr.length), find);
    }
  }
};

const findValue = generateRandomValue(0, 15);
console.log(findValue, recursionBinarSearch(generateSortArr(15), findValue)); 
