// COUNT ODD NUMBERS IN AN INTERVAL RANGE
var countOdds = function(low, high) {
    let oddCounts = 0;
    for (let i = low; i <= high; i++) {
        if (i % 2 != 0) {
            oddCounts += 1;
        } else {
            oddCounts = oddCounts;
        }
    }
    return oddCounts;
}

console.log(countOdds(4, 7));

// FASTER WAY
var countOddsB = function(low, high) {
    const middle = Math.round((high - low) / 2);

    return low % 2 !== 0 && high % 2 !== 0 ? middle + 1 : middle}