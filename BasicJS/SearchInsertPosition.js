function searchInsert (nums, target) {
    if (nums.indexOf(target) > -1) {
        return nums.indexOf(target);
    } else {
        nums.push(target);
        nums.sort((a,b) => a - b);
        return nums.indexOf(target);
    }
}

console.log(searchInsert ([1,3,5,6], 5));
console.log(searchInsert ([1,3,5,6], 2));
console.log(searchInsert ([1,3,5,6], 7));

///FASTER APPROACH
function searchInsertFaster (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid = 0;
    for (i = 0; i < nums.length; i++) {
        mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            start = mid + 1;
        }
        if (nums[mid] > target) {
            end = mid - 1;
        }
    }
    return start;
}

console.log(searchInsertFaster ([1,3,5,6], 5));
console.log(searchInsertFaster ([1,3,5,6], 2));
console.log(searchInsertFaster ([1,3,5,6], 7));
console.log(searchInsertFaster ([1], 2));

