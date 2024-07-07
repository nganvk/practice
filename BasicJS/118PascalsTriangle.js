function generate(numRows) {
    if (numRows === 1) {
        return new Array([1]);
    } else if (numRows === 2) {
        return new Array([1], [1, 1]);
    } else {
        let arr = [[1], [1, 1]];

        for (let i = 2; i < numRows; i++) {
            arr.push(new Array(i + 1));
            arr[i][0] = 1;
            arr[i][i] = 1;

            for (let j = 1; j < arr[i].length - 1; j++) {
                arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
            }
        }

        return arr;
    } 
}

function generate(numRows) {
    let arr = [];

    for (let i = 0; i < numRows; i++) {
        arr.push(new Array(i + 1));
        arr[i][0] = 1;
        arr[i][i] = 1;

        for (let j = 1; j < arr[i].length - 1; j++) {
            arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
        }
    }

    return arr;
}

console.log(generate(5));
console.log(generate(1));