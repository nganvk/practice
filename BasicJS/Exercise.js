// Exercise 1: Write a JS program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100
function is100(a, b) {
    if(a === 100 || b === 100 || a + b === 100) {
        return true;
    } else return false
}

// console.log(is100(100, 0))
// console.log(is100(0, 100))

// console.log(is100(10, 0))
// console.log(is100(0, 10))

// console.log(is100(20, 80))
// console.log(is100(5, 95))

// console.log(is100(20, 60))
// console.log(is100(5, 90))

// Exercise 2: Write a JS program to get the extension of a filename
function getExtension(filename) {
    let arr = filename.split(".");
    let extension = "." + arr[arr.length - 1]
    return extension
}

// console.log(getExtension('index.html'))
// console.log(getExtension('webpack.config.js'))

// Exercise 3: Write a JS program to replace every character in a given string with the character following it in the alphabet
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let newStrArr = [];

function replaceChar(str) {

    for(i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        let index = alphabet.indexOf(char);
        newStrArr[i] = alphabet[index+1];
    }

    return newStrArr.join('');
}

// console.log(replaceChar('ab'));

// Exercise 4: Write a JS program to get the current date. Expected output: mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function currentDate() {
    let currentDate = new Date();
    let month = String(currentDate.getMonth() + 1).padStart(2,0);
    let date = currentDate.getDate();
    let year = currentDate.getFullYear();
    return `${month}-${date}-${year}, ${month}/${date}/${year}, ${date}-${month}-${year}, ${date}/${month}/${year}`;
}

// console.log(currentDate())

// Exercise 5: Write a JS program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string.

function newString(str) {
    let isNewExist = str.indexOf("New!")

    if(isNewExist === 0) {
        return str
    } else {
        return "New! "+ str
    }
}

console.log(newString("New! Camera"))
console.log(newString("Uranus"))
console.log(newString("FreenBeck new!"))

