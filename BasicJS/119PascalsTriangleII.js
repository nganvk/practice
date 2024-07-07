function getRow(rowIndex) {
    let arr = [[1]];

    for (let i = 1; i <= rowIndex; i++) {
        arr.push([1]);

        for (let j = 1; j < i; j++) {
            arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
        }

        arr[i].push(1);
    }

    return arr[rowIndex];
}

console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));