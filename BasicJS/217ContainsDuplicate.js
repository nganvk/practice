function containsDuplicate(nums) {
    let set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            return true;
        } else {
            set.add(num);
        }
    }
    
    return false;
}

console.log(containsDuplicate([1,2,3,1])) //true
console.log(containsDuplicate([1,2,3,4])) //false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) //true
console.log(containsDuplicate([1])) //flase