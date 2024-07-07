function solution(A) {
    let obj = {};
    let keyArr = [];

    if (A.length === 1) {
        return A[0];
    } else {
        for (let i = 0; i < A.length; i++) {
            if (A[i] in obj) {
                obj[A[i]] ++;
            } else {
                obj[A[i]] = 1;
            }
        }
        keyArr = Object.keys(obj);
        
        for (let i = 0; i < keyArr.length; i++) {
            if (obj[keyArr[i]] === 1) {
                return parseInt(keyArr[i]);
            }
        }
    }
}

console.log(solution([1]));
console.log(solution([9,3,9,3,9,7,9]));