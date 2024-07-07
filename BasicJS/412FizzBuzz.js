function fizzBuzz(n) {
    if (n === 1) return ["1"];
    if (n === 2) return ["1", "2"];
    let idx = 3;
    let result = ["1", "2"];
    
    while (idx <= n) {
        if (idx % 3 === 0 && idx % 5 === 0) {
            result.push("FizzBuzz");
        } else if (idx % 3 !== 0 && idx % 5 !== 0) {
            result.push(idx.toString());
        } else if (idx % 3 !== 0) {
            result.push("Buzz");
        } else if (idx % 5 !== 0) {
            result.push("Fizz");
        }

        idx++;
    }

    return result;
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(1));