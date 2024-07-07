function solution(S) {
    let count = 0;

    if (S[0] === S[S.length - 1]) {
        count++;
    }

    for (let i = 1; i < S.length; i++) {
        if (S[i] == S[i - 1]) {
            count++
        }
    }

    return count;
}


console.log(solution("abbaa")) //3
console.log(solution("aaaa")) //4
console.log(solution("abab")) //0

// function solution(S) {
//     let count = 0;
//     for(let i = 0; i < S.length; i++) {
//         if(S[0] === S[S.length - 1]) {
//             count++;
//         }
//         S = S.slice(1) + S[0];
//     }
//     return count;
// }

