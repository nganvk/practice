function solution(S) {
    let checkBA = "ba";
    let countBA = (S.match(/ba/g) || []).length;
    
    if (countBA > 0) {
        return false;
    } else {
        return true;
    }

}
console.log(solution("aabbb")) //true
console.log(solution("aaa")) //true
console.log(solution("bbb")) //true
console.log(solution("b")) //true
console.log(solution("ba")) //false
console.log(solution("abba")) //false
console.log(solution("ababab")) //false

function coplilotSolution(S) {
    let bFound = false;
    for(let i = 0; i < S.length; i++) {
        if(S[i] === 'b') {
            bFound = true;
        }
        if(bFound && S[i] === 'a') {
            return false;
        }
    }
    return true;
}






