function solution(N) {
    let binary = N.toString(2);
    let count0 = 0;
    tempGap = 0;
    
    for (i = 0; i < binary.length; i++) {
        if (binary[i] == 0) {
            count0 ++;
        } else {
            tempGap = Math.max(tempGap, count0);
            count0 = 0;
        }
    }

    return tempGap;
}

console.log(solution(9));
console.log(solution(529));
console.log(solution(20));
console.log(solution(15));
console.log(solution(32));
console.log(solution(1041));