/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const ListNode = require('./../dataStructures/ListNode');
/*** 92. Reverse Linked List II*
 * Reverse a linked list from position m to n. Do it in one-pass.
 * 
 * Note: 1 ≤ m ≤ n ≤ length of list.
 * 
 * Example:
 * Input: 1->2->3->4->5->NULL, m = 2, n = 4
 * Output: 1->4->3->2->5->NULL
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    if (!(head || head.next)) return head;
    let runner = head, behind = null, marked = [];
    let count = 1;
    while (runner) {
        if (m === count) {
            marked.push(behind);
            // marked.push(runner);
            // marked.push(front);
        }
        if (n === count) marked.push(runner);
        if (!(behind)) behind = head;
        else behind = runner;
        runner = runner.next;
        count++;
    }
    runner = marked[0].next;
    let front = marked[0];
    while (false) {
        console.log(runner.val);
        behind = runner;
        runner = front;
        if(front.next) front = front.next;
        n++;
    }
    console.log(marked);
    for (let m of marked) {
        console.log(m.val);
    }
    return head;
};

//       44-55-66-77-88-99-null
//1b-n   r  f
//2      b  r  f
//3      44 
const ex1 = new ListNode(44);
for (let v of [55, 66, 7, 88, 99]) { ex1.add(v); }
ex1.print();
reverseBetween(ex1, 2, 4).print();