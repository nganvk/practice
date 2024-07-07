// function solution(S) {
//     let numberOfOppArrow = (S.match(/></g) || []).length
//     let count = 0;
    
//     for (let i = 0; i < numberOfOppArrow; i++) {
//         S = S.replace("><", "")
//         numberOfOppArrow += (S.match(/></g) || []).length
//     }

//     if (S.length === 0) {
//         return 0;
//     }

//     for (let i = 0; i < S.length - 1; i++) {
//         if (S[i] !== ">") {
//             count++;
//         }
//     }

//     if (S[S.length - 2] !== ">") {
//         count++
//     } else if (S[S.length - 2] === ">" && S[S.length - 1] !== "<") {
//         count++
//     }

//     return count;
// }


// console.log(solution2("><^v")) //2
// console.log(solution2("<<^<v>>")) //6
// console.log(solution2("><><")) //0
// console.log(solution2(">")) //1
// console.log(solution2(">>>>")) //1
// console.log(solution2("<<<<")) //4
// console.log(solution2("^^^^")) //4
// console.log(solution2("vvvv")) //4
// console.log(solution2("<><>")) //2
// console.log(solution2("^v><")) //2
// console.log(solution2("^v<>")) //4
// console.log(solution2(">><^<^^^v<>")) //8
// console.log(solution2(">><<^<^^^v<>")) //8
// console.log(solution("><^v<>")) //8
// console.log(solution("^><<^v>>>>>>^<v<")) //8

function solution2(S) {
    let count = 0;
    let occupied = Array(S.length).fill(true);

    if (S.length === 1) {
        return 1
    } else {
        if (S[0] !== ">") {
            count++;
            occupied[0] = false
        }
        for (i = 1; i < S.length - 1; i++) {
            if (S[i] === "<" && occupied[i - 1] === false) {
                count++;
                occupied[i - 1] = true;
                occupied[i] = false;
            } else if (S[i] === "^" || S[i] === "v") {
                count++;
                occupied[i] = false
            }
        }
        if (occupied[S.length - 2] === false || S[S.length - 1] !== "<") {
            count++;
        }
        return count;
    }
}

console.log(solution2("<")) //1
console.log(solution2("<<<")) //3
console.log(solution2("><><")) //0
console.log(solution2("><^v<>")) //4
console.log(solution2("^><<^v>>>>>>^<v<")) //7
console.log(solution2("^".repeat(50))) //50

// console.log(solution2("><^v")) //2
// console.log(solution2("<<^<v>>")) //6
// console.log(solution2("><><")) //0
// console.log(solution2("<<^<v<>")) //7
// console.log(solution2("<<^<<<>")) //7


// console.log(solution2(">")) //1
// console.log(solution2(">>>>")) //1
// console.log(solution2("<<<<")) //4

// console.log(solution2("^^^^")) //4
// console.log(solution2("vvvv")) //4
// console.log(solution2("<><>")) //2

// console.log(solution2("^v><")) //2
// console.log(solution2("^v<>")) //4
// console.log(solution2(">><^<^^^v<>")) //8
// console.log(solution2(">><<^<^^^v<>")) //8





