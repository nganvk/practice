// function solution(X, Y, D) {
//     let minNumOfJump = 0;
    
//     if (X === Y) {
//         return 0
//     } else {
//         let currentPosition = X;
//         while (X < Y) {
//             X += D;
//             minNumOfJump ++;
//         }
//     }

//     return minNumOfJump;
// }

//FASTER APPROACH
function solution(X, Y, D) {
    if (X == Y) {
        return 0
    } else {
        return Math.ceil((Y - X)/D);
    }
}

console.log(solution(10, 85, 30));
console.log(solution(1, 1, 1));
