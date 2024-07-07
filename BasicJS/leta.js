// ///////////////////////
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(1, 2));

// ////////////////////////
// function ageday(a) {
//     return a*365
// }
// console.log(ageday(5));

// function addUp(a) {
//     let tongaddup = 0;
//     for (let i = 1; i<=a; i++) {
//         tongaddup += i;
//     }
//     return tongaddup;
// }
// console.log(addUp(4));

// function minMax (a) {
//     let min = a[0];
//     let max = a[0]
//     for (let i = 0; i < a.length; i++) {
//         if (min > a[i]) {
//             min = a[i]
//         }
//         if (max < a[i]) {
//             max = a [i]
//         } 
//     }
//     return [min, max];
// }
// console.log(minMax ([1, 2, 3, 4]));

// //////////////////////////////////////
// function sumTo(n) {
//     let sum = 0;
//     for (i = 1; i <= n; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }


let tree = {
    name: 'John',
    children: [
        {name: 'Jim', children: []},
        {name: 'Zoe', children: [
            {name: 'Kyle', children: []},
            {name: 'Sophie', children: []}
        ]}
    ]
}

console.log(tree['children'][1])
