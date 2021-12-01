class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record); // add to first element in the queue
    }

    remove() {
        return this.data.pop(); // remove last element in the queue
    }
}

const q = new Queue();
q.add(1);
q.remove(); // return 1

console.log(q); //Queue { data: [] } 