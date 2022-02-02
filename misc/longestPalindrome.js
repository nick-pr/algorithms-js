// Given a string, return the longest palendrominc subsequence.

// 'abaccccdef' => cccc
// 'abcdefcccc' => cccc
// racecar
const longestPalindrome = string => {
    const stringArray = string.split('');
    return stringArray
        .reduce((largestPalindrome, current, index, stringArray) => {
            const currentPalindrome = [current];
            let leftIndex = index - 1;
            let rightIndex = index + 1;

            if (current === stringArray[leftIndex]) {
                currentPalindrome.unshift(stringArray[leftIndex]);
                leftIndex--;
            }

            while (stringArray[leftIndex] === stringArray[rightIndex]) {
                if (
                    stringArray[leftIndex] === undefined ||
                    stringArray[rightIndex] === undefined
                )
                    break;
                currentPalindrome.unshift(stringArray[leftIndex]);
                currentPalindrome.push(stringArray[rightIndex]);
                leftIndex--;
                rightIndex++;
            }
            if (currentPalindrome.length > largestPalindrome.length)
                return currentPalindrome;
            return largestPalindrome;
        }, [])
        .join('');
};

console.log(longestPalindrome('racecar'));
