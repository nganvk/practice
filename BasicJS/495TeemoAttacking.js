function findPoisonedDuration(timeSeries, duration) {
    if (duration === 0) return 0;
    let total = duration;
    let end = timeSeries[0] + duration - 1;

    for (let i = 1; i < timeSeries.length; i++) {
        if (timeSeries[i] <= end) total = total + timeSeries[i] - timeSeries[i - 1];
        else total = total + duration; 
        end = timeSeries[i] + duration - 1;
    }

    return total;
}

console.log(findPoisonedDuration([1, 4], 2));
console.log(findPoisonedDuration([1, 2], 2));
console.log(findPoisonedDuration([0], 0));
console.log(findPoisonedDuration([0], 2));
console.log(findPoisonedDuration([2], 0));
console.log(findPoisonedDuration([1,2,3,4,5], 5)); 