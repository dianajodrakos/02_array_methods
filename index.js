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

  console.log('filteredArray', filteredArray);

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

