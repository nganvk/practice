function solution(A, F, M) {
    let N = A.length;
    let numberOfRolls = N + F;
    let sum = 0;
    let forgottenRolls = [];

    for (let i = 0; i < N; i++) {
        sum += A[i];
    }

    let sumOfForgottenRolls = (M * numberOfRolls) - sum;

    if (sumOfForgottenRolls < F || sumOfForgottenRolls > F * 6) {
        return [];
    } else {
        for (let i = F; i > 0; i--) {
            let possibleMissingRoll = Math.ceil(sumOfForgottenRolls / i)
            forgottenRolls.push(Math.min(6, possibleMissingRoll))
            sumOfForgottenRolls -= possibleMissingRoll
            }
    }

    return forgottenRolls;
}

console.log(solution([3, 2, 4, 3], 2, 4))
console.log(solution([1, 5, 6], 4, 3))
console.log(solution([1, 2, 3, 4], 4, 6))
console.log(solution([6], 1, 1))


function missingRolls(rolls, mean, n) {
    let m = rolls.length;
    let total = (n + m) * mean;
    let currentSum = rolls.reduce((a, b) => a + b, 0);
    let missingSum = total - currentSum;
    let result = [];

    if (missingSum < n || missingSum > 6 * n) {
        return [];
    }

    while (n--) {
        let val = Math.min(6, Math.ceil(missingSum / (n + 1)));
        result.push(val);
        missingSum -= val;
    }

    return result;
}

// console.log(missingRolls([3, 2, 4, 3], 4, 2))
// console.log(missingRolls([1, 5, 6], 3, 4))
// console.log(missingRolls([1, 2, 3, 4], 6, 4))
// console.log(missingRolls([6], 1, 1))

