function generate(numRows) {
    if (numRows === 1) {
        return [[1]];
    } else {
        let pascalTriangle = [[1]];

        for (let i = 1; i < numRows; i++) {
            pascalTriangle.push(new Array(i + 1));
            pascalTriangle[i][0] = 1;
            pascalTriangle[i][i] = 1;

            for (let j = 1; j < i; j++) {
                pascalTriangle[i][j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
            }
        }

        return pascalTriangle;
    } 
}

console.log(generate(5));
console.log(generate(1));