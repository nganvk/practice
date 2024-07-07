function solution(A, R) {
    let arr = [];
    let numberOfTypes = 0;
    let maxTypes = 0;

    if (A.length === R) {
        return 0
    } else {
        for (i = 0; i <= A.length - R; i++) {
            arr = A.slice();
            arr.splice(i, R);
            numberOfTypes = new Set(arr).size
            if (numberOfTypes > maxTypes) {
                maxTypes = numberOfTypes
            }
        }
    }
    
    return maxTypes
}



console.log(optimizedSolution([2,1,2,3,2,2], 3)) //2
console.log(optimizedSolution([2,3,1,1,2], 2)) //3
console.log(optimizedSolution([20,10,10,10,30,20], 3)) //3
console.log(optimizedSolution([1,100000,1], 3)) //0
console.log(optimizedSolution([1], 1)) //0
console.log(optimizedSolution([1,100000,1], 3)) //0

function optimizedSolution(A, R) {
    let types = new Set(A);
    let maxTypes = types.size;

    if (A.length === R) {
        return 0;
    } else {
        for (let type of types) {
            let arr = A.filter(item => item !== type);
            if (arr.length >= R) {
                let numberOfTypes = new Set(arr).size;
                if (numberOfTypes < maxTypes) {
                    maxTypes = numberOfTypes;
                }
            }
        }
    }

    return maxTypes;
}


















