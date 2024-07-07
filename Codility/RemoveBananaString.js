function solution(S) {
    let A = 3;
    let B = 1;
    let N = 2;
    let numberOfA = (S.match(/A/g) || []).length
    let numberOfB = (S.match(/B/g) || []).length
    let numberOfN = (S.match(/N/g) || []).length
    return maxNumberOfMoves = Math.min(numberOfA / A, numberOfB / B, numberOfN / N)
}

console.log(solution("NAABXXAN")) //1
console.log(solution("NAANAAXNABABYNNBZ")) //2
console.log(solution("QABAAAWOBL")) //0
console.log(solution("BANANABANANA")) //2
console.log(solution("AAAAAAAAAA")) //2