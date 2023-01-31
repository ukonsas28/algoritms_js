export const generateSortArr = (arrLength) => {
  const result = [];

  for (let i = 0; i < arrLength; i += 1) {
    result.push(i);
  }

  return result;
};

export const generateRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const generateRandomArr = (arrLength) => {
  const result = [];

  for (let i = 0; i < arrLength; i += 1) {
    result.push(generateRandomValue(0, arrLength));
  }

  return result;
};
