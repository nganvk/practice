function majorityElement(nums) {
    let temp = 0, count = 0;

    for (let num of nums) {
        if (count === 0) {
            temp = num;
        }

        count = count + (temp === num ? 1 : -1);
    }

    return temp;
}

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([2]));

