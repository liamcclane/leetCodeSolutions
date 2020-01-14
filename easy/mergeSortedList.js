/*****Merge Two Sorted List********
 * 
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 * 
 * 
 * 
 * 
 */

// Try edit message
function mergeTwoLists(l1, l2) {
    let runner1 = l1.head, runner2 = l2.head;

    while (runner2 != null || runner1 != null) {
        if (runner1.val == runner2.val) {
            console.log("inside if")
            temp = runner1.next
            runner1.next = runner2
            runner1 = temp
        } else if (runner1.val < runner2.val) {
            console.log("inside else")
            temp = runner2.next;
            runner2.next = runner1;
            runner2 = temp
        } else {
            console.log("inside else")

            temp = runner1.next
            runner1.next = runner2
            runner1 = temp
        }
        // console.log("runner1 val:", runner1.val)
        // console.log("runner2 val:", runner2.val)
        console.log("l1 looks like")
        l1.print();
        console.log("l2 looks like")
        l2.print();
    }
    console.log("we are returning ")
    return l1
};
class SLL {
    constructor() {
        this.head = null;
    }
    add(n) {
        if (this.head == null) {
            this.head = n
            return this
        }
        let r = this.head
        while (r.next != null) {
            r = r.next
        }
        r.next = n
        return this
    }
    print() {
        if (this.head == null) {
            console.log("no nodes found")
            return null
        }
        let r = this.head;
        while (r != null) {
            console.log(r.val)
            r = r.next
        }
    }
}
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var l1 = new SLL();
var l2 = new SLL();

var n1 = new Node(1);
var n2 = new Node(2);
var n3 = new Node(4);

var m1 = new Node(1);
var m2 = new Node(3);
var m3 = new Node(4);

l1.add(n1).add(n2).add(n3);
// l1.print()
l2.add(m1).add(m2).add(m3);
// l2.print();

console.log("running function")
mergeTwoLists(l1, l2).print();
console.log("Want, 1,1,2,3,4,4")


