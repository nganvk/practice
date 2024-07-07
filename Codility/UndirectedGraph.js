function solution(N, A, B) {
    let set = new Set(); 

    for (let i = 0; i < N; i++) {
        let lower = Math.min(A[i], B[i]);
        let higher = Math.max(A[i], B[i]);
        set.add(lower + "-" + higher);
    }

    for (let i = 1; i < N; i++) {
        if (!set.has(i + "-" + (i + 1))) {
            return false
        }
    }

    return true;
}
// console.log(solution(4,[1,2,4,4,3],[2,3,1,3,1])) //true
// console.log(solution(4,[1,2,1,3],[2,4,3,4])) //false
// console.log(solution(6,[2,4,5,3],[3,5,6,4])) //false
// console.log(solution(3,[1,3],[2,2])) //true
// console.log(solution(2,[],[])) //false
// console.log(solution(100000,[1,2,4,4,3],[])) //false
// console.log(solution(50000,[],[2,3,1,3,1])) //false
// console.log(solution(2,[1],[2])) //true
// console.log(solution(5,[1,2,3,4,5],[1,2,3,4,5])) //false
console.log(solution(4,[1,2,3],[2,3,4])) //true
console.log(solution(4,[1,2,4],[2,3,5])) //false
console.log(solution(7,[1, 2, 3, 4, 5, 6],[2, 3, 4, 5, 6, 1])) //false






