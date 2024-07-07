function thirdMax(nums) {
    let set = new Set(nums);
    let distinctArr = [...set];
    distinctArr.sort((a, b) => b - a);

    if (distinctArr.length < 3) {
        return distinctArr[0]
    }

    return distinctArr[2];
}

function thirdMax_optimized(nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;

    for (let num of nums) {
        if (num === max1 || num === max2 || num === max3) continue;

        if (num > max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max3 = max2;
            max2 = num;
        } else if (num > max3) {
            max3 = num;
        }
    }

    return max3 === -Infinity ? max1 : max3;
}

console.log(thirdMax([3,2,1])); //1
console.log(thirdMax([1,2])); //2
console.log(thirdMax([2,2,3,1])); //1
console.log(thirdMax([1,2,2,5,3,5])); //2