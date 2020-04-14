class ListNode {
    /**
     * A Node with two characteristics Val and Next
     * @param { number } val values integer for the node
     */
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    // CRUD
    /**
     * Create - add to the list
     * Read - print all val in the list
     * Update - list manipulation
     * Delete - all the remove functions
     */

    // ****************CREATE**************
    // ****************CREATE**************
    // ****************CREATE**************
    // ****************CREATE**************
    // ****************CREATE**************
    /**
     * 
     * @param { number } val
     * @returns { SLL } 
     */
    add = (val) => {

        // edge case of empty list
        if (this.isEmpty()) {
            this.head = new ListNode(val);
            return this;
        }

        let curr = this.head;
        while (curr.next != null) {
            curr = curr.next;
        }
        curr.next = new ListNode(val);

        return this;
    }

    /**
     * 
     * @param { number } val
     * @returns { SLL }
     */
    addToFront = (val) => {

        // edge case of empty list
        if (this.isEmpty()) {
            this.head = new ListNode(val);
            return this;
        }

        let newNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    /**
     *  
     * @param { number } k 
     * @param { number } val 
     * @returns { SLL }
     */
    insertAt = (k, val) => {

        // edge case of empty SLL
        if (this.isEmpty()) {
            this.head = new ListNode(val);
            return this;
        }

        // if k = 1 call another function
        if (k === 1) return this.addToFront(val);

        // if k is longer than the list
        if (k >= this.length()) {
            console.log(`the linked list only has ${this.length()} nodes`);
            k = k % this.length();
            console.log(k)
            return this;
        }

        let curr = this.head;
        while (k > 2) {
            k--;
            curr = curr.next;
        }
        console.log(curr.val);
        let n = new ListNode(val);
        n.next = curr.next;
        curr.next = n;
        return this;
    }

    /**
     * 
     * @param { number } k 
     * @param { number } val 
     * @returns { SLL }
     */
    insertKthFromEnd = (k, val) => {
        // edge case of empty SLL
        if (this.isEmpty()) {
            this.head = new ListNode(val);
            return this;
        }

        // if k = 1 call another function
        if (k === 1) return this.add(val);

        // if k = length
        if (k === this.length()) return this.addToFront(val);

        // if k is longer than the list
        if (k >= this.length()) {
            console.log(`the linked list only has ${this.length()} nodes`);
            k = k % this.length();
            console.log(k);
            return this;
        }

        let end = this.head, curr = end;
        while (k > 0) {
            end = end.next;
            k--;
        }
        while (end != null) {
            end = end.next;
            curr = curr.next;
        }
        // console.log(curr.val);
        // console.log(end);
        let n = new ListNode(val);
        n.next = curr.next;
        curr.next = n;

        return this;
    }
    /**
     * @param { number } val
     * @returns { SLL } if it can, will return SLL to be chained
     * @returns { ListNode } will return a Node if it already exists
     */
    addIfUnique = (val) => {
        if (this.howManyOccurrence(val) === 0) {
            this.add(val);
            return this
        }
        console.log("value already exists");
        return this.find()
    }

    // **********READ******************
    // **********READ******************
    // **********READ******************
    // **********READ******************
    /**
     * console.log all the values in the list
     * @returns { SLL }
     */
    printAll = () => {

        // edge case of empty list
        if (this.isEmpty()) {
            console.log("no nodes in the SLL");
            return this;
        }

        let curr = this.head;
        while (curr != null) {
            console.log(curr.val);
            curr = curr.next;
        }
        return this;
    }

    /**
     * 
     * @returns { number[] }
     */
    sLLArray = () => {

        // edge case of empty list
        if (this.isEmpty()) return [];

        let arr = [];
        let curr = this.head;
        while (curr != null) {
            arr.push(curr.val);
            curr = curr.next;
        }
        return arr;
    }

    // ************UPDATE*****************
    // ************UPDATE*****************
    // ************UPDATE*****************
    // ************UPDATE*****************
    // ************UPDATE*****************
    /**
     * 
     * @returns { SLL }
     */
    reverseList = () => {

        // edge case of empty list OR only one node in list
        if (this.isEmpty() || this.head.next === null) return this;

        let back = null, curr = this.head.next;
        while (curr != null) {
            this.head.next = back;
            back = this.head;
            this.head = curr;
            curr = curr.next;
        }
        this.head.next = back;
        return this;
    }

    // ******************DELETE******************
    // ******************DELETE******************
    // ******************DELETE******************
    // ******************DELETE******************
    // ******************DELETE******************
    /**
     * simulates the .pop() from arrays
     * @returns { ListNode } the popped node
     */
    pop() {

        // no nodes in the SLL
        if (this.isEmpty()) return this;

        // only one node in the SLL
        if (this.head.next === null) {
            let temp = this.head;
            this.head = null;
            return temp;
        }

        let runner = this.head;
        while (runner.next.next != null) {
            runner = runner.next;
        }
        let temp = runner.next;
        runner.next = null
        return temp;
    }
    /**
     * 
     * @returns { ListNode }
     */
    removeFromFront = () => {
        let temp = this.head;
        this.head = this.head.next;
        return temp;
    }
    /**
     * 
     * @param { number } val
     * @returns { ListNode } the popped node
     */
    removeKthFromLast = (k) => {

        // no nodes in the list
        if (this.isEmpty()) return this;

        if (k === this.length()) return this.removeFromFront();

        if (k === 1) return this.pop();

        if (k > this.length()) {
            console.log(`k: ${k}\tlength: ${this.length()}`);
            k = k % this.length();
            console.log(k);
            return this;
        }

        let curr = this.head, end = curr;
        while (k >= 0) {
            end = end.next;
            k--;
        }
        while (end != null) {
            curr = curr.next;
            end = end.next;
        }
        curr.next = curr.next.next;
        return this;
    }
    /**
     * 
     * @param { number } k 
     * @returns { ListNode }
     */
    removeKthNode = (k) => {
        
        // edge case of empty list
        if (this.isEmpty()) return this;
        
        // if we want to remove the first Node
        if (k === 1) {
            return this.removeFromFront();
        }
        
        // if we want to remove the last element in the list
        if(k === this.length()) {
            return this.pop();
        }

        // if we are trying to remove something outside the length of the list
        if(k>this.length()){
            console.log(`only ${this.length()} nodes in the list`);
        }

        let pre = this.head;
        let runner = this.head.next;
        while (k > 2) {
            pre = runner;
            runner = runner.next;
            k --;
        }
        pre.next = runner.next;
        return runner;
    }

    // ******************EXTRA*****************
    // ******************EXTRA*****************
    // ******************EXTRA*****************
    // ******************EXTRA*****************
    /**
     * internal function call to keep from repeating code
     * @returns { boolean } true => no nodes in the list: false => node in the SLL
     */
    isEmpty = () => {
        if (this.head === null) return true
        return false
    }
    /**
     * 
     * @returns { number }
     */
    length = () => {
        if (this.isEmpty()) return 0;
        let count = 0, curr = this.head;
        while (curr != null) {
            count++;
            curr = curr.next;
        }
        return count;
    }
    /**
     * 
     * @returns { number }
     */
    altLength = () => {
        return this.sLLArray().length;
    }
    /**
     * check if value is present in sll
     * @returns {boolean}
     */
    isPresent(val) {
        // edge case of empty list
        // outputs error
        if (this.isEmpty()) {
            console.log("Empty sll");
            return this
        }
        let runner = this.head;
        while (runner != null) {
            if (runner.val === val) {
                return true;
            }
            runner = runner.next;
        }
        return false
    }
    /**
     * 
     */
    altIsPresent = () => {
        if (this.howManyOccurrence() === 0) return false;
        return false;
    }
    /**
     * this will only find the first occurrence 
     * @returns {ListNode}
     */
    find(val) {
        if (this.isEmpty()) {
            // error message
            console.log("no Node in the SLL");
            return this
        }
        let runner = this.head;
        while (runner != null) {
            if (runner.val === val) {
                return runner;
            }
            runner = runner.next;
        }
        return false;
    }
    /**
     * @returns {number}
     */
    howManyOccurrence = (val) => {
        if (this.isEmpty()) {
            console.log("empty list");
            return this;
        }
        let count = 0;
        let runner = this.head;
        while (runner != null) {
            if (runner.val === val) count++;
            runner = runner.next;
        }
        return count;
    }
    /**
     * 
     * @returns {boolean}
     */
    hasMultipleOccurrence = (val) => {
        if (this.howManyOccurrence(val) > 0) return true;
        return false;
    }
    /**
     * 
     * @returns {ListNode[]}
     */
    multipleOccurrence = (val) => {
        if (this.howManyOccurrence(val) === 0) {
            console.log(`${val} does not exists in sll`);
            return [];
        }
        let arr = [];
        let runner = this.head;
        while (runner != null) {
            if (runner.val === val) {
                arr.push(runner);
            }
            runner = runner.next;
        }
        return arr;
    }
    // ******************Dealing with two list*****************
    // ******************Dealing with two list*****************
    // ******************Dealing with two list*****************
    // ******************Dealing with two list*****************
    
}

// let mySLL = new SLL();
// let emptySLL = new SLL();
// let single = new SLL();
// // single.add(8080);
// // single.printAll().pop();
// // single.printAll();
// const a = [101, 102, 103, 104, 55, 66, 77, 777, 77, 55, 66, 77];
// for (let val of a) {
//     mySLL.add(val);
// }
// console.log(mySLL.sLLArray());
// console.log(mySLL.removeKthNode(3));
// console.log(mySLL.sLLArray());

