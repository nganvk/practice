function missingNumbers (arr, brr) {
    let freqBrr = new Map();
    let freqArr = new Map();
    let missingNumbers = [];
    for (i = 0; i < brr.length; i++) {
        if (freqBrr.has(brr[i])) {
            freqBrr.set(brr[i], freqBrr.get(brr[i]) + 1);
        } else {
            freqBrr.set(brr[i], 1);
        }
    }
    for (i = 0; i < arr.length; i++) {
        if (freqArr.has(arr[i])) {
            freqArr.set(arr[i], freqArr.get(arr[i]) + 1);
        } else {
            freqArr.set(arr[i], 1);
        }
    }
    for ([key, value] of freqBrr) {
        if (!freqArr.has(key) || freqArr.get(key) !== value) {
            missingNumbers.push(key)
        }
    }
    missingNumbers.sort((a,b) => a - b);
    return missingNumbers
}

console.log(missingNumbers([1,3,4],[1, 2, 3, 4, 5, 1, 3, 5]))