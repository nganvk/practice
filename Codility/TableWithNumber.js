function solution(A, K) {
    let length = mostDigitsNum(A)
    let numberOfRows = Math.floor(A.length / K)
    let remainCells = A.length % K
    
    if (numberOfRows === 0) {
        printDivider(A.length, length)
        printRowWithNumber(A.length, length, A);
        printDivider(A.length, length)
    } else if (numberOfRows !== 0 && remainCells !== 0) {
        for (let i = 0; i < numberOfRows; i++) {
            let arr = A.slice(i * K, K * (i + 1))
            printDivider(K, length)
            printRowWithNumber(K, length, arr);
        }
        printDivider(K, length)
        printRowWithNumber(remainCells, length, A.slice(K * numberOfRows))
        printDivider(remainCells, length)
    } else if (numberOfRows !== 0 && remainCells === 0) {
        for (let i = 0; i < numberOfRows; i++) {
            let arr = A.slice(i * K, K * (i + 1))
            printDivider(K, length)
            printRowWithNumber(K, length, arr);
        }
        printDivider(K, length)
    }
}

solution([4,35,80,123,12345,44,8,5], 10)
solution([4,35,80,123,12345,44,8,5,24,3], 4)
solution([4,35,80,123,12345,44,8,5,24,3,22,35], 4)
solution([4], 1)

function mostDigitsNum (A) {
    let mostDigits = 0;

    for (i = 0; i < A.length; i++) {
        if (A[i].toString().length > mostDigits) {
            mostDigits = A[i].toString().length;
        }
    }

    return mostDigits;
}

function printDivider(cells, mostDigits) {
    let row = "";

    for (i = 0; i < cells; i++) {
        row = row + "+" + "-".repeat(mostDigits);
    }

    row = row + "+"

    console.log(row)
}

function printRowWithNumber(cells, mostDigits, A) {
    let row = "";

    for (i = 0; i < cells; i++) {
        row = row + "|" + " ".repeat(mostDigits - A[i].toString().length) + A[i];
    }

    row = row + "|";
    console.log(row)
}


