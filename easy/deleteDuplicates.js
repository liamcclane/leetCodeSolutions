/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let prev, curr = head;
    if (head === null) return head;
    while (curr != null) {
        console.log(curr.val);
        prev = curr;
        curr = curr.next;
    }
    
};