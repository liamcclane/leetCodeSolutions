var ListNode = require('./../dataStructures/ListNode');
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
    if (head.next === null || head === null) {
        return head;
    }
    // let curr = head, front = curr;
    // front = curr.next;
    // while (front.next != null) {
    //     if (front.val === curr.val) {
    //         front = front.next;
    //     }
    //     curr = curr.next;
    // }
};
let ex1 = new ListNode(100);
for (let val of [101, 101, 101, 102, 103, 103]) {
    ex1.add(val);
}
ex1.print();
deleteDuplicates(ex1).print();
// console.log()


// DED code RIP
// if (head === null) return head;
// let curr = head;
// if (curr.next === null) return head;
// curr = curr.next;
// prev = head;
// while (curr != null) {

//     if (prev.val != curr.val) {
//         prev = curr;
//         curr = curr.next;
//     } else {
//         // while (prev.val === curr.val) {
//         //     // prev = curr;
//         //     curr = curr.next;
//         // }
//         prev.next = curr;
//     }
// }