const ListNode = require('./../dataStructures/ListNode');
/**24. Swap Nodes in Pairs
 * Given a linked list, swap every two adjacent nodes and return its head.
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {

    // edge case of empty lists and single node lists
    if (!head || !head.next) { return head; }

    let arr = [], runner = head;

    // push into the arr the val from the list
    while (runner) {
        arr.push(runner.val);
        runner = runner.next;
    }

    // step though in twos and swap
    let len = arr.length;
    for (let back = 0, front = 1; front < len; back += 2, front += 2) {
        let temp = arr[front];
        arr[front] = arr[back];
        arr[back] = temp;
    }

    // newHead to return, and i to iterate though the arr
    let newHead = new ListNode(arr[0]), i = 1;
    // reset the runner from before
    runner = newHead;

    // loop and refill the new ListNode
    while (i < len) {
        runner.next = new ListNode(arr[i]);
        runner = runner.next;
        i++;
    }

    return newHead;
    /**
     * Runtime: 80 ms, faster than 56.88% of JavaScript online submissions for Swap Nodes in Pairs.
     * Memory Usage: 38.8 MB, less than 26.20% of JavaScript online submissions for Swap Nodes in Pairs.
     */

};
/**Examples
 * Example 1:
 * Input: head = [1,2,3,4]
 * Output: [2,1,4,3]
 *
 * Example 2:
 * Input: head = []
 * Output: []
 *
 * Example 3:
 * Input: head = [1]
 * Output: [1]
 */