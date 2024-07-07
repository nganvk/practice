function summaryRanges(nums) {
    if (nums.length === 0) {
        return nums;
    }
    
    let prev = nums[0];
    let result = prev.toString();

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] !== 1) {
            if (nums[i - 1] !== prev) {
                result = result + "->" + nums[i - 1] + "," + nums[i];
            } else {
                result = result + "," + nums[i];
            }

            prev = nums[i];
        }
    }

    if (nums[nums.length - 1] - nums[nums.length - 2] === 1) {
        result = result + "->" + nums[nums.length - 1];
    }

    return result.split(",");
}

function summaryRanges_optimized_1(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let upper = nums[i];

        while ((i + 1 < nums.length) && (nums[i + 1] - nums[i] === 1)) {
            i++;
        }

        if (upper !== nums[i]) {
            result.push(upper + "->" + nums[i]);
        } else {
            result.push(upper.toString());
        }
    }

    return result;
}

function summaryRanges_optimized_2(nums) {
    let result = [];
    let upper = nums[0];

    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] - nums[i - 1] !== 1) {
            if (nums[i - 1] === upper) {
                result.push(upper.toString());
            } else {
                result.push(upper + "->" + nums[i - 1]);
            }

            upper = nums[i];
        }

    }

    return result;
}

console.log(summaryRanges([0,1,2,4,5,7]));
console.log(summaryRanges([0,2,3,4,6,8,9]));
console.log(summaryRanges([]));
console.log(summaryRanges([0,1,2]));

