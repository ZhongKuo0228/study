//Node的格式
class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

//LinkedList的內容
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    
}

let node3 = new Node(1000, null);
let node2 = new Node(100, node3);
let node1 = new Node(10, node2);

console.log("node1", node1);
