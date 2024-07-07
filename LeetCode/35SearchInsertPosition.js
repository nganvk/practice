function searchInsert(nums, target) {
    let index = nums.indexOf(target);

    if (index !== -1) {
        return index;
    } else {
        let left = 0, right = nums.length - 1;

        while (left <= right) {
            let mid = Math.floor((right + left) / 2);

            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left;
    }
}

console.log(searchInsert([1, 3, 5, 6], 5)); //2
console.log(searchInsert([1, 3, 5, 6], 2)); //1
console.log(searchInsert([1, 3, 5, 6], 7)); //4
console.log(searchInsert([1,3], 2)); //1
console.log(searchInsert([1,2,4,6,7], 3)); //2
