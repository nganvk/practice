function singleNumber(nums) {
    let singleNum = 0;

    for (let num of nums) {
        singleNum = singleNum ^ num;
    }

    return singleNum;
}

console.log(singleNumber([2,2,1])); //1
console.log(singleNumber([4,1,2,1,2])); //4
console.log(singleNumber([1])); //1