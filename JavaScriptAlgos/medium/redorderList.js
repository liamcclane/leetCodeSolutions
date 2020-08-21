const ListNode = require('./../dataStructures/ListNode');
/**143. Reorder List
 * Given a singly linked list L: L0→L1→…→Ln-1→Ln,
 * reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 
 * You may not modify the values in the list's nodes, only nodes itself may be changed.
 * 
 * Example 1:
 * Given 1->2->3->4, reorder it to 1->4->2->3.
 * 
 * Example 2:
 * Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    // if we are passed null or a node with only one in it 
    if (head === null || head.next === null) { return head; }
    let back = head;
    let curr = head.next;
    let runner = head;
    let front = head.next;

    while (curr != null && curr.next != null) {
        // console.log("first while loop") // moves front to last node, front = runner.next & front.next = null
        while (front.next != null) {
            // console.log("second while loop")
            front = front.next;
            runner = runner.next;
        }
        // console.log("reassignment")
        runner.next = null;    // need to reassign to null :|
        back.next = front;
        front.next = curr;
        back = curr;
        curr = back.next;
        runner = back;
        front = curr;

    }
    runner.next = null;    // need to reassign to null :|
    back.next = front;
    return head;
};

/**
 * Runtime: 1048 ms, faster than 5.02% of JavaScript online submissions for Reorder List.
 * Memory Usage: 44.9 MB, less than 42.33% of JavaScript online submissions for Reorder List.
 */

let ex1 = new ListNode(1);
for (let val of [2, 3, 4]) {
    ex1.add(val);
}
ex1.print();
reorderList(ex1).print();

let ex2 = new ListNode(1);
for (let val of [2, 3, 4, 5]) {
    ex2.add(val);
}
ex2.print();
reorderList(ex2).print();