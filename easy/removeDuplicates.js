var ListNode = require('../dataStructures/ListNode');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**83. Remove Duplicates from Sorted List**
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 * 
 * Example 1:
 * 
 * Input: 1->1->2
 * Output: 1->2
 * 
 * Example 2:
 * 
 * Input: 1->1->2->3->3
 * Output: 1->2->3
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head=== null || head.next === null) {
        return head;
    }
    let curr = head
    let front = curr.next;
    front = curr.next;
    while (front != null) {
        if (front.val === curr.val) {
            front = front.next;
        } else {
            curr.next = front;
            front = front.next;
            curr = curr.next;
        }
    }
    curr.next = null;
    return head;
};
let ex1 = new ListNode(100);
for (let val of [101, 101, 101, 102, 103, 103]) {
    ex1.add(val);
}
ex1.print();
deleteDuplicates(ex1).print();
console.log(ex1.next.next);

/**
 * Runtime: 60 ms, faster than 90.46% of JavaScript online submissions for Remove Duplicates from Sorted List.
 * Memory Usage: 35.6 MB, less than 46.88% of JavaScript online submissions for Remove Duplicates from Sorted List.
 */
