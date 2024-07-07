function solution(A, D) {
    let balance = 0;
    let infoOfPayments = new Map();
    let monthWith3Payments = 0;
    let monthWithOver100 = 0;
    let monthlyFee = 5;

    for (i = 0; i < A.length; i++) {
        balance = balance + A[i];
        month = new Date(D[i]).getMonth();

        if (A[i] < 0 && infoOfPayments.has(month)) {
            infoOfPayments.get(month).count++;
            infoOfPayments.get(month).amount += A[i]
        } else if (A[i] < 0 && !infoOfPayments.has(month)) {
            infoOfPayments.set(month, {count: 1, amount: A[i]})
        }
    }

    for ([key, value] of infoOfPayments) {
        if (value.count >= 3) {
            monthWith3Payments++
        }

        if(value.amount <= -100) {
            monthWithOver100++;
        }
    }

    return balance = balance - (monthlyFee * (12 - Math.min(monthWith3Payments, monthWithOver100)))
    // return infoOfPayments
}

console.log(solution([100,100,100,-10], ["2020-12-31","2020-12-22","2020-12-03","2020-12-29"])) //230
console.log(solution([180,-50,-25,-25], ["2020-01-01","2020-01-01","2020-01-01","2020-01-31"])) //25
console.log(solution([1,-1,0,-105,1], ["2020-12-31","2020-04-04","2020-04-04","2020-04-14","2020-07-12"])) //-164
console.log(solution([100,100,-10,-20,-30], ["2020-01-01","2020-02-01","2020-02-11","2020-02-05","2020-02-08"])) //80
console.log(solution([-60,60,-40,-20], ["2020-10-01","2020-02-02","2020-10-10","2020-10-30"])) //-115
console.log(solution([-60], ["2020-10-01"])) //-120



