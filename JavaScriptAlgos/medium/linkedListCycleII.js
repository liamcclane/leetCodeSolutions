const ListNode = require('./../dataStructures/ListNode');
const ListNode = require('./../dataStructures/ListNode');
/**142. Linked List Cycle II
 * Given a linked list, return the node where the cycle begins. 
 * If there is no cycle, return null.
 * 
 * There is a cycle in a linked list if there is some node 
 * in the list that can be reached again by continuously 
 * following the next pointer. Internally, pos is used to 
 * denote the index of the node that tail's next pointer is 
 * connected to. Note that pos is not passed as a parameter.
 * 
 * Notice that you should not modify the linked list.
 * 
 * Follow up:
 * 
 * Can you solve it using O(1) (i.e. constant) memory?
 * 
 * Example 1:
 * Input: head = [3,2,0,-4], pos = 1
 * Output: tail connects to node index 1
 * Explanation: There is a cycle in the linked list, where tail connects to the second node.
 * 
 * Example 2:
 * Input: head = [1,2], pos = 0
 * Output: tail connects to node index 0
 * Explanation: There is a cycle in the linked list, where tail connects to the first node.
 * 
 * Example 3:
 * Input: head = [1], pos = -1
 * Output: no cycle
 * Explanation: There is no cycle in the linked list.
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {

    if (!head || head.next == null) { return null; }
    // straight boolean to check if a cycle exists
    let hasCycle = false;
    // creating two runners, if there is a cycle 
    // with different rates, they will eventually over lap, or get to the end
    let fastRunner = head, slowRunner = head;
    while (fastRunner != null && slowRunner != null) {
        slowRunner = slowRunner.next;
        if (fastRunner.next == null) { break; }
        fastRunner = fastRunner.next.next;
        if (fastRunner == slowRunner) {
            hasCycle = true;
            break;
        }
    }
    // if we do not have a cycle, then return null
    if (!hasCycle) { return null; }

    // if we do we need to find where they overlap
    // slowRunner and fastRunner at equal and sit on the same node
    // reset one of them back to the head then let them step one 
    // node at a time until they find they meet at the start of 
    // of the cycle
    fastRunner = head;
    while (fastRunner != slowRunner) {
        fastRunner = fastRunner.next;
        slowRunner = slowRunner.next;
    }
    return fastRunner;
    /**
     * Runtime: 88 ms, faster than 72.15% of JavaScript online submissions for Linked List Cycle II.
     * Memory Usage: 41.4 MB, less than 20.88% of JavaScript online submissions for Linked List Cycle II.
     */


};

/**
 * 
 * @param {ListNode} head 
 */
const lessSpaceEfficient = (head) => {
    let arrOfNodes = [];
    let runner = head;
    let s = "";
    while (runner != null) {
        // console.log(runner.val , " val");
        let val = arrOfNodes.indexOf(runner);
        if (val != -1) {
            s = "tail connects to node laskdfj index " + (val);
            // console.log(s);
            return runner;
        }
        else { arrOfNodes.push(runner); }
        runner = runner.next;
    }
    // console.log("no cycle");
    return null;
    /**
     * Runtime: 132 ms, faster than 6.40% of JavaScript online submissions for Linked List Cycle II.
     * Memory Usage: 41.2 MB, less than 20.88% of JavaScript online submissions for Linked List Cycle II.
     */
}