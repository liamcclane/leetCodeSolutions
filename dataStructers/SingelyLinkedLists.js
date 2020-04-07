// class ListNode {
//     /**
//      * A Node with two characteristics Val and Next
//      * @param { number } val values integer for the node
//      */
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }
import ListNode from 'ListNode.js';
class SLL {
    constructor() {
        this.head = null;
    }
    // CRUD
    /**
     * Create - add to the list
     * Read - print all val in the list
     * Update - list manipulation
     * Delete -
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
     * @param { number }
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

        // if k = 1 call another funciton
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

        // if k = 1 call another funciton
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
    printSLLArray = () => {

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
    reverse = () => {

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
     * @returns { ListNode } the poped node
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
     * @returns { ListNode } the poped node
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
     */
    removeKthNode = (k) => {

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
        return this.printSLLArray().length;
    }
}

let mySLL = new SLL();
let emptySLL = new SLL();
let single = new SLL();
// single.add(8080);
// single.printAll().pop();
// single.printAll();
const a = [101, 102, 103, 104, 55, 66, 77];
for (let val of a) {
    mySLL.add(val);
}
console.log(mySLL.printSLLArray());
mySLL.removeKthFromLast(10);
console.log(mySLL.printSLLArray());

