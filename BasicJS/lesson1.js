function max (a, b, c, d) {
    maximum = a;
    if (maximum < b) {
        maximum = b;
    }
    if (maximum < c) {
        maximum = c;
    }
    if (maximum < d) {
        maximum = d;
    }
    return maximum
}

console.log(max(2, 1, 4, 7));