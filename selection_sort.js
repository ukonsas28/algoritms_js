import { generateRandomArr } from "./index.js";

const selectionSort = (arr) => {
  const sortArr = [...arr];
  const result = [];

  while (result.length < arr.length) {
    let minValue = null;

    for (let value of sortArr) {
      if (typeof minValue === "object") {
        minValue = value;
      }
      if (value < minValue) {
        minValue = value;
      }
    }

    result.push(minValue);
    sortArr.splice(sortArr.indexOf(minValue), 1);
  }

  return result;
};

const arr = generateRandomArr(10);

console.log(arr, selectionSort(arr));

// log(n^2)
