/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
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
    if (head === null) return head;
    let curr = head;
    if (curr.next === null) return head;
    curr = curr.next;
    prev = head;
    while (curr != null) {

        if (prev.val != curr.val) {
            prev = curr;
            curr = curr.next;
        } else {
            while (prev.val === curr.val) {
                // prev = curr;
                curr = curr.next;
            }
            prev.next = curr;
        }
    }
};