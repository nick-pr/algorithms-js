const isPalindrome = string => {
    let leftIndex = 0;
    let rightIndex = string.length - 1;

    while (rightIndex - leftIndex > 0) {
        const left = string[leftIndex];
        const right = string[rightIndex];
        if (left !== right) return false;

        leftIndex++;
        rightIndex--;
    }
    return true;
};

console.log(isPalindrome('baab'));
