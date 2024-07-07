function solution(A) {
    let m = A.length;
    let n = A[0].length
    let ans = 1;
    let rowsArr = Array(m+2).fill("").map(_ => Array(n + 2).fill(0))
    let columnArr = Array(m+2).fill("").map(_ => Array(n + 2).fill(0))
    let diagnalArr = Array(m+2).fill("").map(_ => Array(n + 2).fill(0))
    let antiDiagnalArr = Array(m+2).fill("").map(_ => Array(n + 2).fill(0))

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            rowsArr[i][j] = A[i - 1][j - 1] + rowsArr[i][j - 1];
            columnArr[i][j] = A[i - 1][j - 1] + columnArr[i - 1][j];
            diagnalArr[i][j] = A[i - 1][j - 1] + diagnalArr[i - 1][j - 1]
            antiDiagnalArr[i][j] = A[i - 1][j - 1] + antiDiagnalArr[i - 1][j + 1]
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = Math.min(m - i + 1, n - j + 1); k > 1; k--) {
                let rowSum = rowsArr[i][j + k - 1] - rowsArr[i][j - 1];
                let colSum = columnArr[i + k - 1][j] - columnArr[i - 1][j];
                let diagnalSum = diagnalArr[k + i - 1][j + k - 1] - diagnalArr[i - 1][j - 1];
                let antiDiagnalSum = antiDiagnalArr[k + i - 1][j] - antiDiagnalArr[i -1][j + k]
                if (rowSum === colSum && rowSum === diagnalSum && rowSum === antiDiagnalSum) {
                    ans = Math.max(ans, k);
                    break;
                }
            }
        }
    }
    
    return ans
}

console.log(solution([[4,3,4,5,3],[2,7,3,8,4],[1,7,6,5,2],[8,4,9,5,5]])) //3
console.log(solution([[2,2,1,1],[2,2,2,2],[1,2,2,2]])) //2
console.log(solution([[7,2,4],[2,7,6],[9,5,1],[4,3,8],[3,5,4]])) //3


// var largestMagicSquare = function(grid) {
//     const m = grid.length;
//     const n = grid[0].length;
//     const rows = Array(m).fill('').map(_ => Array(n + 1).fill(0));
//     const cols = Array(n).fill('').map(_ => Array(m + 1).fill(0));
//     const maxSize = Math.min(m, n);

//     for (let row = 0; row < m; row++) {
//         for (let col = 0; col < n; col++) {
//             const value = grid[row][col];

//             rows[row][col + 1] = rows[row][col] + value;
//             cols[col][row + 1] = cols[col][row] + value; 
//         }
//     }

//     const isSame = (row, col, k) => {
//         const sums = new Set();
//         let diagonalA = diagonalB = 0;

//         for (let index = 0; index < k; index++) {
//             sums.add(rows[row + index][col + k] - rows[row + index][col]);
//             if (sums.size > 1) return false;
//             sums.add(cols[col + index][row + k] - cols[col + index][row]);
//             if (sums.size > 1) return false;
//         }
//         for (let index = 0; index < k; index++) {
//             diagonalA += grid[row + index][col + index];
//             diagonalB += grid[row + k - index - 1][col + index];
//         }
//         sums.add(diagonalA).add(diagonalB);
//         return sums.size === 1;
//     };

//     for (let k = maxSize; k >= 2; k--) {
//         for (let row = 0; row + k <= m; row++) {
//             for (let col = 0; col + k <= n; col++) {
//                 if (isSame(row, col, k)) return k;
//             }
//         }
//     }
//     return 1;
// };

// console.log(largestMagicSquare([[4,3,4,5,3],[2,7,3,8,4],[1,7,6,5,2],[8,4,9,5,5]]))

// let A = [[4,3,4,5,3],[2,7,3,8,4],[1,7,6,5,2],[8,4,9,5,5]]
// let m = A.length;
// let n = A[0].length
// let maxSize = Math.min(m, n);
// let rowsArr = Array(m).fill("").map(_ => Array(n + 2).fill(0))
// console.log(rowsArr)
