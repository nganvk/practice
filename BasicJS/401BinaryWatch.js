function readBinaryWatch(turnedOn) {
    if (turnedOn === 0) return ["0:00"];
    let result = [];
    
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 60; j++) {
            let time = ""
            if ((sum(i.toString(2) * 1) + sum(j.toString(2) * 1)) === turnedOn) {
                time = i.toString();
                if (j < 10) time = time + ":0" + j;
                else time = time + ":" + j;
                result.push(time);
            } 
        }
    }

    return result;
}

function sum(s) {
    let sum = 0;

    while (s !== 0) {
        sum = sum + (s % 10);
        s = Math.floor(s / 10);
    }

    return sum;
}

// console.log(sum(1100));
console.log(readBinaryWatch(1));