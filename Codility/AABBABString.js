function solution(AA, AB, BB) {
    let arr = [];

    if (AA > BB) {
        arr.push(...Array(BB).fill("AABB"))
        arr.push(...Array(AB).fill("AB"))
        arr.push("AA")
    } else if (AA < BB) {
        arr.push(...Array(AA).fill("BBAA"))
        arr.push("BB")
        arr.push(...Array(AB).fill("AB"))
    } else if (AA === BB) {
        arr.push(...Array(AA).fill("AABB"))
        arr.push(...Array(AB).fill("AB"))
    }

    return arr
}

console.log(solution(5, 0, 2)); //AABB,AABB,AA
console.log(solution(1, 2, 1)); //AABBABAB
console.log(solution(0, 2, 0)); //ABAB
// console.log(solution(0, 0, 10)); //BB
// console.log(solution(0, 0, 0)); //[]
// console.log(solution(1, 0, 0)); //AA
// console.log(solution(0, 1, 0)); //AB
// console.log(solution(0, 0, 1)); //BB
// console.log(solution(1, 1, 0)); //ABAA
// console.log(solution(1, 0, 1)) //AABB
// console.log(solution(0, 1, 1)) //BBAB
// console.log(solution(1, 1, 1)); //AABBAB
// console.log(solution(5, 1, 2)); //AABB,AABB,AB,AA
// console.log(solution(10,10,10)); //AABB,AABB,AABB,AABB,AABB,AABB,AABB,AABB,AABB,AABB,AB,AB,AB,AB,AB,AB,AB,AB,AB,AB
// console.log(solution(0,2,2)); //BBABAB
// console.log(solution(2,0,2)); //AABB,AABB
// console.log(solution(2,2,0)); //AB,AB,AA
// console.log(solution(0,0,2)); //BB
// console.log(solution(0,2,0)); //AB,AB
// console.log(solution(2,0,0)); //AA
// console.log(solution(4,2,3)); //AABB,AABB,AABB,AB,AB,AA
// console.log(solution(3,2,4)); //BBAA,BBAA,BBAA,BB,AB,AB
// console.log(solution(2,4,3)); //BBAA,BBAA,BB,AB,AB,AB,AB
// console.log(solution(3,4,2)); //AABB,AABB,AB,AB,AB,AB,AA
// console.log(solution(2,4,2)); //AABB,AABB,AB,AB,AB,AB

function solution(AA, AB, BB) {
    let result = '';
    while (AA > 0 || BB > 0) {
        if (AA > BB && !result.endsWith('AA')) {
            result += 'AA';
            AA -= 2;
        } else if (BB >= AA && !result.endsWith('BB')) {
            result += 'BB';
            BB -= 2;
        } else if (AB > 0) {
            if (result.endsWith('A')) {
                result += 'B';
                BB--;
            } else {
                result += 'A';
                AA--;
            }
            AB--;
        } else {
            break;
        }
    }
    return result;
}



















