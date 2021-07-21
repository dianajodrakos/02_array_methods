export const mapArray = (arr, callback) => {
  const mappedArray = [];
  for(let i = 0; i < arr.length; i++) {
    mappedArray.push(callback(arr[i]));
  }
  return mappedArray;
};
