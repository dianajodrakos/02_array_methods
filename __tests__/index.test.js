import { mapArray, filterArray, findIndex, reduceArray } from '../index.js';

describe('Array Methods', () => {

  describe('mapArray', () => {
    it('creates a new array with the results of calling a function on every item in the original array', () => {
      const array = [1, 2, 3, 4];
      const callback = item => item + 1;
            
      const expected = [2, 3, 4, 5];
      const actual = mapArray(array, callback);
            
      expect(actual).toEqual(expected);
      expect(actual).not.toEqual(array);
    });
  });

  describe('filterArray', () => {
    it('creates a new array of all items whose callback returns a truthy value', () => {
      const array = [1, 2, 3, 4];
      const callback = item => item % 2;

      const expected = [2, 4];
      const actual = filterArray(array, callback);

      expect(actual).toEqual(expected);
      expect(actual).not.toEqual(array);
    });
  });

  describe('findIndex', () => {
    it('returns the index of the first item in the array whose callback returns a truthy value', () => {
      const array = [1, 2, 3, 4];
      const callback = item => item % 2;
  
      const expected = 1;
      const actual = findIndex(array, callback);
  
      expect(actual).toEqual(expected);
      expect(actual).not.toEqual(array);
    });
  });

  describe('reduceArray', () => {
    it('returns an accumulator with the results of calling a function on every item in the original array', () => {
      const array = [1, 2, 3, 4];
      const callback = (accumulator, item) => accumulator + item;

      const expected = 10;
      const actual = reduceArray(array, callback);

      expect(actual).toEqual(expected);
      expect(actual).not.toEqual(array);
    });

    it('returns an accumulator using an initial value with the results of calling a function on every item in the original array', () => {
      const array = [1, 2, 3, 4];
      const callback = (accumulator, item) => accumulator + item;
      const initialValue = 5;
      
      const expected = 15;
      const actual = reduceArray(array, callback, initialValue);

      expect(actual).toEqual(expected);
      expect(actual).not.toEqual(array);
    });
  });

  describe('everyArray', () => {
    it('returns true because every item in an array evaluated by a callback functions return true', () => {

    });

    it('returns false every item in an array evaluated by a callback functions doesn\'t return true', () => {

    });
  });
});
