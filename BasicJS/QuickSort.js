function quickSort(arr) {

    if(arr.length <= 1) {
        return arr
    }

    let pivot = arr[Math.floor(arr.length/2)]
    let less = [];
    let equal = [];
    let greater = [];

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] < pivot) {
            less.push(arr[i])
        } else if(arr[i] == pivot) {
            equal.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }

    return [...quickSort(less),...equal,...quickSort(greater)]

}

console.log(quickSort([2, 1, 4, 7, 6]))