function solution(A) {
    let map = new Map();
    let count = 0;

    for (i = 0; i < A.length; i++) {
        let newArr = [...new Set(A[i])];
        for (j = 0; j < newArr.length; j++) {
            if (map.has(newArr[j])) {
                map.set(newArr[j], map.get(newArr[j]) + 1);
            } else {
                map.set(newArr[j], 1);
            }
        }
    }

    for ([key, value] of map) {
        if (value > 1) {
            count++
        }
    }

    return count;
}

console.log(solution([[1, 2, 2], [3, 1, 4]])); //1
console.log(solution([[1, 1, 5, 2, 3], [4, 5, 6, 4, 3], [9, 4, 4, 1, 5]])); //4
console.log(solution([[4, 3], [5, 5], [6, 2]])); //0
console.log(solution([[1]])); //0
console.log(solution([[1, 2, 1000]])); //0
console.log(solution([[1], [2], [3462]])); //0

// function solution(A) {
//     let doctorMap = new Map();
//     let count = 0;
    
//     for(let i = 0; i < A.length; i++) {
//         for(let j = 0; j < A[i].length; j++) {
//             if(doctorMap.has(A[i][j])) {
//                 if(doctorMap.get(A[i][j]) !== i) {
//                     doctorMap.set(A[i][j], -1);
//                 }
//             } else {
//                 doctorMap.set(A[i][j], i);
//             }
//         }
//     }
    
//     doctorMap.forEach((value) => {
//         if(value === -1) {
//             count++;
//         }
//     });
    
//     return count;
// }

// function solution(A) {
//     let map = new Map();
//     let count = 0;

//     for (let i = 0; i < A.length; i++) {
//         let set = new Set(A[i]);
//         for (let id of set) {
//             map.set(id, (map.get(id) || 0) + 1);
//         }
//     }

//     for (let [id, freq] of map) {
//         if (freq > 1) {
//             count++;
//         }
//     }

//     return count;
// }



