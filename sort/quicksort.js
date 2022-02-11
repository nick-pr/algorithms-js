import { randomData } from '../utils/random.js';

export let quickSort = array => {
    const swap = (data, left, right) => {
        const temp = data[left];
        data[left] = data[right];
        data[right] = temp;
    };

    const partition = (data, pivot, left, right) => {
        while (left <= right) {
            while (array[left] < pivot) {
                left++;
            }
            while (array[right] > pivot) {
                right--;
            }
            if (left <= right) {
                swap(data, left, right);
                left++;
                right--;
            }
        }
        return left;
    };

    const sort = (array, left, right) => {
        if (left >= right) return;

        const pivot = array[Math.floor((right + left) / 2)];
        const index = partition(array, pivot, left, right);
        sort(array, left, index - 1);
        sort(array, index, right);
    };
    sort(array, 0, array.length - 1);
};

const swap = (data, left, right) => {
    const temp = data[left];
    data[left] = data[right];
    data[right] = temp;
};

export let quickSort2 = data => {
    const swap = (data, left, right) => {
        const temp = data[left];
        data[left] = data[right];
        data[right] = temp;
    };
    const partition = (array, left, pivot) => {
        const pivotValue = array[pivot];
        let i = left - 1;
        for (let j = left; j <= pivot - 1; j++) {
            if (array[j] < pivotValue) {
                i += 1;
                swap(array, i, j);
            }
        }
        swap(array, i + 1, pivot);
        return i + 1;
    };
    const sort = (array, left, right) => {
        if (left >= right) return;
        const p = partition(array, left, right);

        sort(array, left, p - 1);
        sort(array, p + 1, right);
    };
    sort(data, 0, data.length - 1);
};

export default quickSort;
