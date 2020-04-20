// import { DoubleListNode } from './DoubleListNode';
const DLN = require('./DoubleListNode')
class DLL {
    constructor() {
        this.head = null;
    }
    add = (val) => {
        let newNode = new DLN(val);
        if (this.head === null) {
            this.head = newNode;
            return this;
        } else if (this.head.next === null) {
            this.head.next = newNode;
            newNode.front = this.head;
            return this;
        }

        let runner = this;
        while (runner.next != null) {
            runner = runner.next;
        }
        runner.next = newNode;
        newNode.front = runner;
        return this;
    }
    print = () => {
        if (this.head === null) {
            console.log("No nodes");
            return this;
        }
        let arr = [];
        let runner = this.head;
        while (runner) {
            arr.push(runner.val);
            runner = runner.next;
        }
        arr.push(null);
        console.log(arr);
    }
}

let myDL = new DLL();
for (let n of [101, 102]) {
    myDL.add(n);
}
myDL.print();