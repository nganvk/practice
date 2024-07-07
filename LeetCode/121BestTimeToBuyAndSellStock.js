function maxProfit(prices) {
    let buy = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
        } else if (prices[i] - buy > profit) {
            profit = prices[i] - buy;
        }
    }

    return profit;
}

console.log(maxProfit([7, 1, 6, 3, 6, 4])); //5
console.log(maxProfit([7, 6, 4, 3, 1])); //0
console.log(maxProfit([7])); //0
console.log(maxProfit([0, 3, 1])); //3
console.log(maxProfit([2, 4, 1])); //2