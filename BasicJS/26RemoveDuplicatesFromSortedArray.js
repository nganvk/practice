function removeDuplicates(nums) {
    let set = new Set(nums);
    let expectedNums = [...set];
    let numberOfUnderscore = nums.length - expectedNums.length;
    nums.splice(0, nums.length, ...expectedNums);
    nums.push(...Array(numberOfUnderscore).fill(0));
    return nums;
}

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([8]));