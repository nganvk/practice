function MyStack() {
    this. q1 = [];
    this. q2 = [];
}

MyStack.prototype.push = function(x) {
    this.q1.push(x);
}

MyStack.prototype.pop = function() {
    while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
    }

    let lastElement = this.q1.shift();
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return lastElement;
}

MyStack.prototype.top = function() {
    return this.q1[this.q1.length - 1];
}

MyStack.prototype.empty = function() {
    return this.q1.length === 0;
}

let myObj = new MyStack();
myObj.push(1);
myObj.push(2);
myObj.push(3);
console.log(myObj);
console.log();

console.log(myObj.pop());
console.log(myObj);
console.log();

console.log(myObj.pop());
console.log(myObj);
console.log();

console.log(myObj.pop());
console.log(myObj);
console.log();

console.log(myObj.empty());
