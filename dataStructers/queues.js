class Node {
    /**
     * A Node with two characteristics Val and Next
     * @param { number } val values integer for the node
     */
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


/**
 * FIFO - first in, first out
 * 
 */
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * CRUD
     * C - create => increase the queue ie add them to the back of the line
     * R - read
     * U - update
     * D - delete
     */


    /**
     * 
     */
    enQueue = (val) => {
        let node = new Node(val);

        // edge case for no node in queue
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            return this;
        }

        // edge case with only one Node in queue
        if (this.head === this.tail) {
            this.tail = node;
            this.head.next = this.tail;
            return this;
        }

        // since we have access to the last person in line
        // we know that the newest Node being added goes in the back
        // so the previous "last" person's next is the newest person
        // then that new person becomes the tail
        this.tail.next = node;
        this.tail = node;
        return this;
    }

    /**POP() function 
     * this is serving the next customer
     * we will be popping from the head
     * @returns {Queue}the Queue it's self
     */
    deQueue = () => {

        // edge case for empty queue
        if (this.isEmpty()) {
            console.log("No Nodes to delete");
            return this;
        }

        // edge case for only one node in list
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return this;
        }

        this.head = this.head.next;
        return this
    }

    printQueue = () => {
        if(this.isEmpty()) {
            console.log("Empty Queue cannot print");
            return this
        }
        let runner = this.head;
        do {
            console.log(runner.val);
            runner = runner.next;
        } while (runner != null);
        return this
    }

    /**
     * internal function call checking if the head in 
     * equal to null
     */
    isEmpty = () => {
        if (this.head === null) {
            return true
        }
        return false
    }
}

let myQ = new Queue();

for (let val of [101,22,33,44,55,66,707]) {
    myQ.enQueue(val);
}
myQ.printQueue();
console.log(myQ);