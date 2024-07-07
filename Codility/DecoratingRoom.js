function solution(A) {
    let bruskStroke = A[0];

    for (i = 1; i < A.length; i++) {
        if (A[i] > A[i - 1]) {
            bruskStroke += (A[i] - A[i - 1])
        }
    }

    return bruskStroke > 1000000 ? -1 : bruskStroke
}

console.log(solution([1,3,2,1,2,1,5,3,3,4,2])) //9
console.log(solution([1,4,3,2,3,1])) //5
console.log(solution([4,1,2,1,2,2])) //6
console.log(solution([2,1,2,1,2,2])) //4



