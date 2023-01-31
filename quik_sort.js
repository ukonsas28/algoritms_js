import { generateRandomArr } from "./index.js";

const quikSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    const supIndex = Math.ceil((arr.length - 1) / 2);
    const supElem = arr[supIndex];

    const less = [];
    const more = [];

    for (let el of arr) {
      if (supElem > el) {
        less.push(el);
      }
      if (supElem < el) {
        more.push(el);
      }
    }

    return [...quikSort(less), supElem, ...quikSort(more)];
  }
};

console.log(quikSort(generateRandomArr(2000000)));
// O(n log n)