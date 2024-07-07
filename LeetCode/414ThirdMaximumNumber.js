// function thirdMax(nums) {
//     let distinctArr = [...new Set(nums)];
//     distinctArr.sort((a, b) => b - a);
//     let n = distinctArr.length;
//     if (n < 3) return distinctArr[0];
//     return distinctArr[2];
// }

// console.log(thirdMax([3,2,1])); //1
// console.log(thirdMax([1,2])); //2
// console.log(thirdMax([2,2,3,1])); //1
// console.log(thirdMax([1,2,2,5,3,5])); //2

// "use strict";
// myVar = "This is my var";
// var myVar;
// console.log(myVar);

// console.log(myVar2);
// var myVar2 = "var 2";
// console.log(myVar2);

// myLet = "This is my let";
// console.log(myLet);
// let myLet;
// console.log(myLet);

// (function() {
//     var message = 'Hello, World!';
//     console.log(message); // Outputs: 'Hello, World!'
// })();

// function higherOrder(fn) {
//     fn();
//   }
     
// higherOrder(function() { console.log("Hello world") });  

// function higherOrder2() {
// return function() {
//     return "Do something";
// }
// }      
// var x = higherOrder2();
// console.log(x());   // Returns "Do something"

// function doSomething() {
//   console.log(this);
// }
// doSomething();

// let regex = /hello/;
// let str = "world hello";
// let result = regex.exec(str);
// console.log(result); // Outputs: [ 'hello', index: 0, input: 'hello world', groups: undefined ]
// let test = regex.test(str);

function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
  }
  
  greet('John', function() {
    console.log('The callback was invoked!');
  });
  
  greet('Jane', function() {
    console.log('A different callback was invoked!');
  });
  
