function maxProfit (prices) {
    let buy = prices[0];
    let gap = 0;

    for (let i = 1; i < prices.length; i++) {
        let tempGap = prices[i] - buy;
        
        if (tempGap < 0) {
            buy = prices[i];
        } else if (tempGap > gap) {
            gap = tempGap;
        }
    }

    return gap;
}

console.log(maxProfit([7, 1, 6, 3, 6, 4])); //5
console.log(maxProfit([7, 6, 4, 3, 1])); //0
console.log(maxProfit([7])); //0
console.log(maxProfit([0, 3, 1])); //3
console.log(maxProfit([2, 4, 1])); //2