import { randomData } from '../utils/random.js';
import { arrayCopy } from '../utils/arrayTools.js';

export let mergeSort = data => {
    const sort = (data, temp, left, right) => {
        if (left >= right) return;
        const mid = Math.floor(left + (right - left) / 2);
        sort(data, temp, left, mid);
        sort(data, temp, mid + 1, right);
        merge(data, temp, left, mid, right);
    };
    const merge = (data, temp, leftStart, mid, rightEnd) => {
        const leftEnd = mid;
        const rightStart = mid + 1;
        let i = leftStart;
        let j = rightStart;
        let k = leftStart;
        while (i <= leftEnd && j <= rightEnd) {
            if (data[i] < data[j]) {
                temp[k] = data[i];
                i += 1;
            } else {
                temp[k] = data[j];
                j += 1;
            }
            k += 1;
        }
        arrayCopy(data, i, temp, k, leftEnd - i + 1);
        arrayCopy(data, j, temp, k, rightEnd - j + 1);
        arrayCopy(temp, leftStart, data, leftStart, rightEnd - leftStart + 1);
    };
    const temp = new Array(data.length);
    sort(data, temp, 0, data.length - 1);
};
