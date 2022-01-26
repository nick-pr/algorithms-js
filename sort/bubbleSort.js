export function bubbleSort(array) {
    // 1. Integer to representing the length of the array that hasn't been sorted.
    // -- Initialally this would be set the array's length.
    let unsortedLength = array.length;

    // 2. Helper Function to swap indicies.
    const swap = (i1, i2) => {
        const temp = array[i2];
        array[i2] = array[i1];
        array[i1] = temp;
    };

    // 3. Outer loop that shrinks as unsorted data gets smaller.
    while (unsortedLength >= 2) {
        // 4. Inner loop that traverses the acutual unsorted data.
        for (let i = 0; i < unsortedLength - 1; i++) {
            // 5. If left is bigger than right, swap them.
            if (array[i] > array[i + 1]) swap(i, i + 1);
        }
        // 6. Decrements the unsorted length.
        unsortedLength--;
    }
}
