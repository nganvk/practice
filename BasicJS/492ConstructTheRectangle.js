function constructRectangle(area) {
    let l = Math.floor(Math.sqrt(area));
    
    while (l > 1) {
        if (area % l === 0) return [area / l, l];
        else l--;
    }

    return [area, 1];
}

console.log(constructRectangle(4)); //[2,2]
console.log(constructRectangle(37)); //[37,1]
console.log(constructRectangle(122122)); //[427, 286]
console.log(constructRectangle(8)); //[427, 286]


//8 8,1 4,2 