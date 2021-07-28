export const mapArray = (arr, callback) => {
  const mappedArray = [];
  for(let i = 0; i < arr.length; i++) {
    mappedArray[i] = callback(arr[i]);
  }
  return mappedArray;
};

export const filterArray = (arr, callback) => {
  const filteredArray = [];
  let filteredIndex = 0;

  for(let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === 0) {
      filteredArray[filteredIndex] = arr[i];
      filteredIndex++;
    }
  }

  return filteredArray;
};

export const findIndex = (arr, callback) => {
  let index = '';
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i]) === 0) {
      return index = i;
    }
  }
  return index;
};

export const reduceArray = (arr, callback, initialValue) => {
  let acc = initialValue ? initialValue : 0;

  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if(item) {
      acc = callback(acc, item);
    }
  }
  return acc;
};

export const everyArray = (arr, callback) => {

};
