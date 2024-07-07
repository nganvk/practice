function solution(direction, radius, X, Y) {
    let count = 0;
    let x;
    let y;

    for (i = 0; i < X.length; i++) {
        x = X[i];
        y = Y[i];
        if (isWithinLightField(direction, x, y) && isWithinLightLength(radius, x, y)) {
            count++
        }
    }

    return count;
}

function isWithinLightLength (radius, x, y) {
    return x*x + y*y <= radius * radius;
}

function isWithinLightField (direction, x, y) {
    if (direction === "U") {
        return y >= 0 && x >= -y && x <= y
    } else if (direction === "D") {
        return y <= 0 && x <= -y && x >= y
    } else if (direction === "L") {
        return x <= 0 && y <= -x && y >= x
    } else if (direction === "R") {
        return x >= 0 && y <= x && y >= -x
    }
}

console.log(solution("U", 5, [-1,-2,4,1,3,0], [5,4,3,3,1,-1])) //2
console.log(solution("D", 10, [0,-3,2,0], [-10,-3,-7,-5])) //4
console.log(solution("R", 3, [-2,3], [0,1])) //0
console.log(solution("L", 3, [-2], [0])) //1
console.log(solution("L", 1, [-2], [0])) //0

function solution(direction, radius, X, Y) {
    let count = 0;
    for (let i = 0; i < X.length; i++) {
        let x = X[i];
        let y = Y[i];
        let distance = Math.sqrt(x * x + y * y);
        if (distance > radius) continue;
        let angle = Math.atan2(y, x) * 180 / Math.PI;
        if (angle < 0) angle += 360;
        if ((direction === 'U' && x <= 0 && angle >= 45 && angle <= 135) ||
            (direction === 'R' && y >= 0 && (angle <= 45 || angle >= 315)) ||
            (direction === 'D' && x >= 0 && angle >= 225 && angle <= 315) ||
            (direction === 'L' && y <= 0 && angle >= 135 && angle <= 225)) {
            count++;
        }
    }
    return count;
}



