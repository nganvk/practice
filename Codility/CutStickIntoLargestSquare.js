// function solution2(A, B) {
//     let maxLength = Math.max(A, B);
//     let firstStickCut = 0;
//     let secondStickCut = 0;

//     while(maxLength > 0) {
//         firstStickCut = Math.floor(A / maxLength)
//         secondStickCut = Math.floor(B / maxLength);
//         if (firstStickCut + secondStickCut < 4) {
//             maxLength--
//         } else {
//             break;
//         }
//     }

//     return maxLength;
    
// }

function solution(A, B) {
    let longestStick = 0;
    longestStick = (B/4);

    if (A >= (B/3)) {
        longestStick = Math.max(longestStick, (B/3))
    } else {
        longestStick = Math.max(longestStick, A)
    }

    if (A/2 >= (B/2)) {
        longestStick = Math.max(longestStick, (B/2))
    } else {
        longestStick = Math.max(longestStick, A/2)
    }

    if (B >= (A/3)) {
        longestStick = Math.max(longestStick, (A/3))
    } else {
        longestStick = Math.max(longestStick, (B))
    }

    longestStick = Math.max(longestStick, (A/4))

    return Math.floor(longestStick)
}
console.log(solution(10, 21)) //7
console.log(solution(13, 11)) //5
console.log(solution(2, 1)) //0
console.log(solution(1, 8)) //2
console.log(solution(1, 1)) //0
console.log(solution(4, 15)) //4
console.log(solution(16, 18)) //8
console.log(solution(19, 5)) //5