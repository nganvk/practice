class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(x) {
        this.stack1.push(x);
    }

    pop() {
        for (let i = 1; i < this.stack1.length; i++) {
            this.stack2[i - 1] = this.stack1[i];
        }

        let poppedElement = this.stack1[0];
        [this.stack1, this.stack2] = [this.stack2, []];
        return poppedElement;
    }
    
    peek() {
        return this.stack1[0];
    }

    empty() {
        return this.stack1.length === 0;
    }
}

let myObj = new MyQueue();
myObj.push(1);
myObj.push(2);
myObj.push(3);
myObj.push(4);
console.log(myObj);
console.log();

console.log("Pop: " + myObj.pop());
console.log(myObj);
console.log();

myObj.push(5);
console.log(myObj);
console.log();

console.log("Pop: " + myObj.pop());
console.log(myObj);
console.log();

console.log("Pop: " + myObj.pop());
console.log(myObj);
console.log();

console.log("Pop: " + myObj.pop());
console.log(myObj);
console.log();

console.log("Pop: " + myObj.pop());
console.log(myObj);
console.log();

// console.log("Peek: " + myObj.peek());
// console.log(myObj);
// console.log();



// console.log("Empty: " + myObj.empty());