export const mapArray = (arr, callback) => {
  const mappedArray = [];
  for(let i = 0; i < arr.length; i++) {
    mappedArray.push(callback(arr[i]));
  }
  return mappedArray;
};

export const filterArray = (arr, callback) => {
  const filteredArray = [];
  for(let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === 0) {
      filteredArray.push(arr[i]);
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
