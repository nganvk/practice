function solution(A, K) {
    let sameValue = true;
    let rotation;

    for (let i = 0; i < A.length; i++) {
        if (A[i] !== A[0]) {
            sameValue = false;
            break;
        }
    }

    if (A.length === K) {
        rotation = 'same';
    }

    if (sameValue === true || rotation === 'same') {
        return A
    } else {
        for (let i = 1; i <= K; i++ ) {
            let lastElement = A.pop();
            A.unshift(lastElement)
        }
        return A;
    }
    
}

console.log(solution([0, 0, 0], 2))
console.log(solution([1, 2, 3, 4], 4))
console.log(solution([3, 8, 9, 7, 6], 3))