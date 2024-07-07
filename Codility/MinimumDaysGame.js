function solution(D, X) {
    let count = 1;
    let min = D[0];
    let max = D[0];

    for (let i = 1; i < D.length; i++) {
        min = Math.min(min, D[i]);
        max = Math.max(max, D[i]);
        if ((max - min) > X) {
            count++;
            min = D[i];
            max = D[i];
        }
    }

    return count;
}

console.log(solution([5,8,2,7], 3)) //3
console.log(solution([2,5,9,2,1,4], 4)) //3
console.log(solution([1,12,10,4,5,2], 2)) //4
console.log(solution([1], 0)) //1
console.log(solution([1,12,10,4,5,2,5,8,2,7,2,5,9,2,1,4], 5)) //7
console.log(solution([1,12,10,4,5,2], 0)) //6


