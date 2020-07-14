/***
 * trying to import and export file and modularize my code
 */
module.exports = class ListNode {
    /**
     * A Node with two characteristics Val and Next
     * @param { number } val values integer for the node
     */
    constructor(val) {
        this.val = val;
        this.next = null;
    }
    /**
     * 
     * @param {number} val 
     * @returns {ListNode}
     */
    add = (val) => {
        if (this.hasCycle()) {
            console.log("has infinite loop")
            return this;
        }
        let curr = this;
        while (curr.next != null) {
            curr = curr.next;
        }
        let newNode = new ListNode(val);
        curr.next = newNode;
        return this;
    }
    /**
     * @returns void
     */
    printShowCycle = () => {
        let runner = this;
        let arrOfNodes = [];
        let printArr = [];
        let count = 0;
        while (runner && !arrOfNodes.includes(runner)) {
            arrOfNodes.push(runner);
            printArr.push(runner.val);
            runner.ind = count;
            count++;
            runner = runner.next;
        }
        runner.startOfLoop = true;
        count *= 3;
        printArr.push("*cycle begins* looping three times*");
        while (count > 0) {
            // if (runner.startOfLoop) { printArr.push("*"); }
            printArr.push(runner.val);
            runner = runner.next;
            count--;
        }
        console.log(printArr);
    }
    print = () => {
        if (this.hasCycle()) {
            this.printShowCycle();
            return;
        }
        let arr = [];
        let curr = this;
        while (curr != null) {
            arr.push(curr.val);
            curr = curr.next;
        }
        console.log(arr);
    }
    addNode = (n) => {
        if (this.hasCycle()) { return this; }
        let runner = this;
        let count = 0; // this is a fail safe for infinite loops incase of cycle list nodes
        while (runner.next && count < 1000) {
            runner = runner.next;
            count++;
        }
        if (count == 1000) { console.log("looped 1000 times"); }
        runner.next = n;
        if (this.hasCycle()) {
            console.log(`\tbe careful`);
        }
        return this;
    }
    /**
     * @returns {boolean} will return true or false
     */
    hasCycle = () => {
        if (!this) { return false; }
        if (!this.next) { return false; }
        let runner = this;
        let arr = [];
        let count = 0; // a fail safe just incase
        while (runner && !arr.includes(runner) && count < 1000) {
            arr.push(runner);
            runner = runner.next;
            count++;
        }
        if (count === 1000) { console.log("looped 100 times inside hasCycle"); }
        if (!runner) { return false; }
        console.log("we have a cycle")
        return true;
    }
}
