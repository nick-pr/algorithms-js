export function bubbleSort(array) {
    // [5,1,3,8,2,9]
    let unsortedLength = array.length;
    while (unsortedLength >= 2) {
        for (let i = 0; i < unsortedLength - 1; i++) {
            const left = array[i];
            const right = array[i + 1];

            if (left > right) {
                array[i] = right;
                array[i + 1] = left;
            }
        }
        unsortedLength--;
    }
}
