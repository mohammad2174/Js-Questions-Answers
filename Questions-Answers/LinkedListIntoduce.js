class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}

const list = new LinkedList();
list.head = new Node(10);
list.head.next(11);
list.head.next(12);
list.head.next(13);

