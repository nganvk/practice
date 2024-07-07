function solution1(S) {
    if (S[0] !== S[S.length - 1] && S[0] !== "?" && S[S.length - 1] !== "?") {
        return "NO"
    } 

    let arr = S.split("");
    let lastElementIndex = arr.length - 1;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === "?" && arr[lastElementIndex - i] !== "?") {
            arr[i] = arr[lastElementIndex - i]
        } else if (arr[i] === "?" && arr[lastElementIndex - i] === "?") {
            arr[i] = arr[lastElementIndex - i] = "a"
        } else if (arr[i] !== arr[lastElementIndex - i] && arr[i] !== "?" && arr[lastElementIndex - i] !== "?") {
            return "NO"
        }
    }

    return arr.join("");
}
// console.log(solution1("a"))
// console.log(solution1("?"))
// console.log(solution1("?ab??a"))
// console.log(solution1("bab??a"))
// console.log(solution1("?a?"))
// console.log(solution1("??????"))
// console.log(solution1("a?b??a"))
// console.log(solution1("aab???"))
// console.log(solution1("?cb?a?"))
// console.log(solution1("??cbahdds?"))

function solution2(A) {
    let map = new Map();
    let result = 0;

    for (i = 0; i < A.length; i++) {
        let newArr = [...new Set(A[i])];
        for (j = 0; j < newArr.length; j++) {
            if (map.has(newArr[j])) {
                map.set(newArr[j], map.get(newArr[j]) + 1)
            } else {
                map.set(newArr[j], 1);
            }
        }
    }

    for ([key, value] of map) {
        if (map.get(key) > 1) {
            result ++;
        }
    }

    return result;
}
// console.log(solution2([[1, 2, 2], [3, 1, 4]]));
// console.log(solution2([[1, 1, 5, 2, 3], [4, 5, 6, 4, 3], [9, 4, 4, 1, 5]]));
// console.log(solution2([[4, 3], [5, 5], [6, 2]]));
// console.log(solution2([[1]]));
// console.log(solution2([[1, 2, 1000]]));
// console.log(solution2([[1], [2], [3462]]));

function solution3(AA, AB, BB) {
    let arr = [];

    if (AA > BB) {
        arr.push(...Array(BB).fill("AABB"))
        arr.push(...Array(AB).fill("AB"))
        arr.push("AA")
    } else if (AA < BB) {
        arr.push(...Array(AA).fill("BBAA"))
        arr.push("BB")
        arr.push(...Array(AB).fill("AB"))
    } else if (AA === BB) {
        arr.push(...Array(AA).fill("AABB"))
        arr.push(...Array(AB).fill("AB"))
    }

    return arr
}
// console.log(solution3(10,10,10));
// console.log(solution3(0,2,2));
// console.log(solution3(2,0,2));
// console.log(solution3(2,2,0));
// console.log(solution3(0,0,2));
// console.log(solution3(0,2,0));
// console.log(solution3(2,0,0));
// console.log(solution3(4,2,3));
// console.log(solution3(3,2,4));
// console.log(solution3(2,4,3));
// console.log(solution3(3,4,2));
// console.log(solution3(2,4,2));

function solution4(A) {
    let direction = compare(A[0], A[1]);
    let arr = [];
    let result = 0;;

    if(A.length === 1) {
        return A[0] % 1000000000
    }

    if (direction == -1) {
        arr.push(A[0]);
    } 

    for (i = 0; i < A.length - 1; i++) {
        let nextDirection = compare(A[i], A[i + 1])
        if (nextDirection !== direction) {
            arr.push(A[i]);
            direction = nextDirection
        }
    }

    if(A[A.length - 1] > A[A.length - 2]) {
        arr.push(A[A.length - 1])
    }

    if (arr.length % 2 == 0) {
        arr.pop();
    }

    for (i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            result = result + arr[i]
        } else {
            result = result + arr[i] * -1
        }
    } 

    return result % 1000000000;
}

function compare(x, y) {
    if (x > y) {
        return -1
    } else if (x <= y) {
        return 1
    }
}
// console.log(solution4([4,1,2,3]))
// console.log(solution4([4,1,2,3,1]))
// console.log(solution4([4,1,2,3,1,1]))
// console.log(solution4([1,2,3,3,2,1,5]))
// console.log(solution4([1000000000,1,2,2,1000000000,1,1000000000]))
// console.log(solution4([100]))
// console.log(solution4([0,0,0,0]))

function solution5(S) {
    let count = 0;

    if (S[0] === S[S.length - 1]) {
        count++;
    }

    for (i = 1; i < S.length; i++) {
        if (S[i] === S[i - 1]) {
            count++;
        }
    }

    return count;   
}
// console.log(solution5("abbaa"))
// console.log(solution5("aaaa"))
// console.log(solution5("abab"))

function solution6(A) {
    let minStrokes = A[0];

    for (i = 1; i < A.length; i++) {
        if (A[i] > A[i - 1]) {
            minStrokes = minStrokes - A[i - 1] + A[i]
        }
    }

    return minStrokes;
}
console.log(solution6([1,3,2,1,2,1,5,3,3,4,2]))
console.log(solution6([1,4,3,2,3,1]))
console.log(solution6([4,1,2,1,2,2]))
console.log(solution6([2,1,2,1,2,2]))






