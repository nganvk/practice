// function countSegments(s) {
//     let count = 0;
//     if ((s.length === 0)) return count;
//     if (s[0] !== " ") count++;
    
//     for (let i = 1; i < s.length; i++) {
//         if (s[i] !== " " && s[i - 1] === " ") count++;
//     }
    
//     return count;
// }

function countSegments_optimized(s) {
    s = s.split(" ").filter(Boolean);
    return s.length;
}

console.log(countSegments_optimized("Hello, my name is John")); //5
console.log(countSegments_optimized("Hello")); //1
console.log(countSegments_optimized("Of all the gin joints in all the towns in all the world,   ")); //13
console.log(countSegments_optimized("Hello,      my name is John")); //5
console.log(countSegments_optimized("")); //0
console.log(countSegments_optimized(" ")); //0
console.log(countSegments_optimized("       ")); //0


// let a = "a, b, c";
// let b = "   ";
// console.log(a.split(" "));
// console.log(b.split(" "));


