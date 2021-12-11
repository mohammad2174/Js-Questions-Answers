class Stack {
    constructor() {
        this.data = [];
    }

    push(record) {
        this.data.push(record);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

const s = new Stack();
s.push(1);
s.push(2);
s.pop(); // 2
s.pop(); // 1
s.peek();

console.log(s); // Stack { data: [] }