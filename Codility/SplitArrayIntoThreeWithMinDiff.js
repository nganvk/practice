function solution(A) {
    A.sort((a, b) => a - b);
    let left = 0, right = A[A.length - 1] - A[0], result = right;
    
    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        if (check(A, mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
}

function check (A, X) {
    let count = 0, min = A[0], max = A[0];

    for (let i = 1; i < A.length; i++) {
        min = Math.min(min, A[i]);
        max = Math.max(max, A[i]);
        if (max - min > X) {
            count++;
            min = A[i];
            max = A[i];
        }
    }

    return count <= 2;
}
console.log(solution([11, 5, 3, 12, 6, 8, 1, 7, 4])); // Output: 3
console.log(solution([10, 14, 12, 1000, 11, 15, 13, 1])); // Output: 5
console.log(solution([4, 5, 7, 10, 10, 12, 12, 12])); // Output: 2
console.log(solution([5, 10, 10, 5, 5])); // Output: 0