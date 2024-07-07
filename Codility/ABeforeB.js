function solution(S) {
    let countA = (S.match(/A/g) || []).length;
    let countB = 0;
    let minDiff = countA

    for (let i = 0; i < S.length; i++) {
        if (S[i] === "A") {
            countA--
        } else {
            countB++;
        }
        minDiff = Math.min(minDiff, countA + countB)
    }

    return minDiff
}

console.log(solution("BAAABAB")) //2
console.log(solution("BBABAA")) //3
console.log(solution("AABBBB")) //0
console.log(solution("AAAAAAA")) //0
console.log(solution("BBBBBBB")) //0
console.log(solution("BBBAAAA")) //3




