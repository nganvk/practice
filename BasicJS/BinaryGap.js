function solution(N) {
    let binary =  N.toString(2);
    let binarySplit = binary.split("");
    let countOne = 0;
    let arrOne = [];
    let arrZero = [];
    
    for (let i = 0; i < binarySplit.length; i++) {
        if (binarySplit[i] === "1") {
            arrOne.push(binarySplit[i])
        } else {
            arrZero.push(binarySplit[i])
        }
    }

    if (arrOne.length > 1 && arrZero.length > 1) {
        let firtstOneIndex = binarySplit.indexOf("1")
        let tempGap = [];
        let largestGap = 0;
        for (let i = firtstOneIndex + 1; i < binarySplit.length; i++) {
            if (binarySplit[i] !== "1") {
                countOne ++;
            } else {
                tempGap.push(countOne);
                countOne = 0;
            }
        }
        for (let i = 0; i < tempGap.length; i++) {
            if (tempGap[i] > largestGap) {
                largestGap = tempGap[i]
            }
        }
        return largestGap;
    } else {
        return 0;
    }
}

console.log(solution(9))
console.log(solution(15))
console.log(solution(32))
console.log(solution(529))
console.log(solution(20))