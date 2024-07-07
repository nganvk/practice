class MyStack {
    constructor () {
        this.queue1 = [];
    }

    push(x) {
        this.queue1.push(x);
    }
}

MyStack.prototype.pop = function() {
    for (let i = 0; i < this.queue1.length - 1; i++) {
        this.queue1.push(this.queue1.shift());
    }

    return this.queue1.shift();
}

MyStack.prototype.top = function() {
    return this.queue1[this.queue1.length - 1];
}

MyStack.prototype.empty = function() {
    return this.queue1.length === 0;
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