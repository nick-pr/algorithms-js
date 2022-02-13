import { bubbleSort } from './bubbleSort.js';
import { quickSort2 as quickSort } from './quickSort.js';
import { mergeSort } from './mergeSort.js';

describe.each([
    ['Bubble Sort', bubbleSort],
    ['Quick Sort', quickSort],
    ['Merge Sort', mergeSort],
])('%s', (_, sort) => {
    it('Should not return anything', () => {
        const array = [12, 3, 4, 5];
        const result = sort(array);
        expect(result).toBeUndefined();
    });
    it('Sorts even length array', () => {
        const array = [5, 1, 3, 8, 2, 9];
        sort(array);
        expect(array).toEqual([1, 2, 3, 5, 8, 9]);
    });
    it('Sorts odd length array', () => {
        const array = [19, 18, 121, 2, 5];
        sort(array);
        expect(array).toEqual([2, 5, 18, 19, 121]);
    });
    it('Sorts array with length of 2', () => {
        const array = [5, 3];
        sort(array);
        expect(array).toEqual([3, 5]);
    });
    it('Correctly handles an array of length 1', () => {
        const array = [5];
        sort(array);
        expect(array).toEqual([5]);
    });
});
