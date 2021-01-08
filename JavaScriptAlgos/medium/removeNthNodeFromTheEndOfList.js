const ListNode = require('./../dataStructures/ListNode');
/**19. Remove Nth Node From End of List
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

    if (head === null) {
        return head;
    } else if (head.next === null && n === 1) {
        return null;
    }

    let front = head, curr = head, back;

    while (n >= 1) {
        front = front.next;
        n--;
    }

    while (front != null) {
        back = curr;
        curr = curr.next;
        front = front.next;
    }

    if (back) {
        back.next = curr.next;
        return head;
    } else {
        return head.next;
    }
    /**
     * Runtime: 176 ms, faster than 5.03% of JavaScript online submissions for Remove Nth Node From End of List.
     * Memory Usage: 40.3 MB, less than 33.32% of JavaScript online submissions for Remove Nth Node From End of List.
     */
};
/**
 * Example 1:
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 *
 * Example 2:
 * Input: head = [1], n = 1
 * Output: []
 *
 * Example 3:
 * Input: head = [1,2], n = 1
 * Output: [1]
 */