// function solution(A) {
//     let map = new Map();

//     for (i = 0; i < A.length; i++) {
//         if (map.has(A[i])) {
//             map.set(A[i], map.get(A[i]) + 1)
//         } else {
//             map.set(A[i], 1);
//         }
//     }

//     for ([key, value] of map) {
//         if (map.get(key) % 2 != 0) {
//             return key;
//         }
//     }

//     return key;

// }

function solution(A) {
    let result = 0;

    for (let i = 0; i < A.length; i++) {
        result ^= A[i];
    }

    return result;
}

console.log(solution([9,3,9,3,9,7,9]))