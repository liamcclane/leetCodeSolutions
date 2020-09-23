/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const ListNode = require('./../dataStructures/ListNode');
/**876. Middle of the Linked List
 * Given a non-empty, singly linked list with head node head, return a middle node of linked list.
 * 
 * If there are two middle nodes, return the second middle node.
 * 
 * Example 1:
 * 
 * Input: [1,2,3,4,5]
 * Output: Node 3 from this list (Serialization: [3,4,5])
 * The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
 * Note that we returned a ListNode object ans, such that:
 * ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
 * 
 * Example 2:
 * 
 * Input: [1,2,3,4,5,6]
 * Output: Node 4 from this list (Serialization: [4,5,6])
 * Since the list has two middle nodes with values 3 and 4, we return the second one.
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    if (!head) { return head; }
    if (!head.next) { return head; }
    let runner = head, count = 0;
    while (runner) {
        count++;
        runner = runner.next;
    }
    count = Math.floor(count / 2);
    runner = head;
    while (count > 0) {
        count--;
        runner = runner.next;
    }
    return runner;
    /**
     * Runtime: 88 ms, faster than 27.33% of JavaScript online submissions for Middle of the Linked List.
     * Memory Usage: 36.4 MB, less than 55.03% of JavaScript online submissions for Middle of the Linked List.
     */
};