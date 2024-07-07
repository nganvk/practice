function containsDuplicate (nums) {
    let duplicateElements = nums.filter((item, index) => nums.indexOf(item) !== index);
    if (duplicateElements.length > 0) {
        return true
    }
    return false
};

console.log(containsDuplicate([2,14,18,22,22]))

/////FASTER APPROACH
var containsDuplicateFaster = function(nums) {
    var output = false
    var obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in obj) {
        output = true
        break
        } else {
        obj[nums[i]] = 1
        }
    }
    return (output);
}




