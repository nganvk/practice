//BUBBLE SORT
function bubbleSort (a) {
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < a.length; j++) {
            if (a[j] > a[j + 1]) {
                let temporarily = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temporarily;
            }
        }
    }
    console.log(a)
}

bubbleSort([2, 1, 4, 5, 3, 3, 54, 54, 7999]);


// FUNCTION TO CREATE AN ARRAY FROM USER'S INPUT
// function array(n) {
//     array = [];
//     let length = n;
//     for (i = 0; i < length; i++) {
//         num = prompt('Enter value' + (i+1));
//         if (isNaN(num)) {
//             while (isNaN(num)) {
//             num = prompt('Please enter number');
//             }
//         }
//         array[i] = num;
//     }
//     console.log(array);
// }

// array(3)


