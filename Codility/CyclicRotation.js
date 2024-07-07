function solution(A, K) {
    let lastElement;

    if (A.length == 0 || K == 0) {
        return A;
    } else {
        for (i = 1; i <= K; i++) {
            lastElement = A.pop();
            A.unshift(lastElement)
        }
    }

    return A;
}

console.log(solution([3,8,9,7,6], 3));
console.log(solution([0,0,0], 1));
console.log(solution([1,2,3,4], 4));
console.log(solution([], 4));