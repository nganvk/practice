function solution(A) {
    let arr = [];
    let direction = compare(A[0], A[1]);
    let maxS = 0;

    if (direction == -1) {
        arr.push(A[0]);
    }

    
    for (i = 1; i < A.length; i++) {
        let nextDirection = compare(A[i], A[i + 1]);
        if(direction !== nextDirection) {
            arr.push(A[i]);
            direction = nextDirection;
        }
    }

    if (arr.length % 2 == 0) {
        arr.pop();
    }
    
    for (i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            maxS = maxS + arr[i];
        } else {
            maxS = maxS + arr[i] * -1;
        }
    }

    return maxS % 1000000000;
}

function compare(x, y) {
    if (x <= y) {
        return 1
    } else if (x > y) {
        return -1
    }
}

console.log(solution([4,1,2,3])) //6
console.log(solution([4,1,2,3,1])) //6
console.log(solution([4,1,2,3,1,1])) //6
console.log(solution([1,2,3,3,2,1,5])) //7
console.log(solution([1000000000,1,2,2,1000000000,1,1000000000])) //999.999.998

// function getMax(values) {
//     const
//         smaller = (a, b) => a < b,
//         greater = (a, b) => a > b,
//         find = fn => (v, i, a) => {
//             if (i + 1 === a.length && fn === greater || fn(v, a[i + 1])) {
//                 fn = fn === smaller ? greater : smaller;
//                 return true;
//             }
//         };

//     return values.filter(find(smaller));
// }




