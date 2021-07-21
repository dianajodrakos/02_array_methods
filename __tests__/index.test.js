import { mapArray } from '../index.js';

describe('Array Methods', () => {

  describe('mapArray', () => {
    it('creates a new array with the results of calling a function on every item in the original array', () => {
      const array = [1, 2, 3];
      const callback = (item) => item + 1;
            
      const expected = [2, 3, 4];
      const actual = mapArray(array, callback);
            
      expect(expected).toEqual(actual);
      expect(array).not.toEqual(actual);
    });
  });

  describe('filterArray', () => {
    it('creates a new array of all items whose callback returns a truthy value', () => {

    });
  });
});
