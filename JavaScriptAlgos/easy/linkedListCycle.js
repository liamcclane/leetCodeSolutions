const ListNode = require('./../dataStructures/ListNode');
/**141. Linked List Cycle
 * Given a linked list, determine if it has a cycle in it.
 * 
 * To represent a cycle in the given linked list, 
 * we use an integer pos which represents the position (0-indexed) 
 * in the linked list where tail connects to. If pos is -1, 
 * then there is no cycle in the linked list.
 * 
 * Example 1:
 * 
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where tail connects to the second node.
 * ie 3 -> 2 -> 0 -> -4 -->*
 *         |  <- <- <- <- |
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) {return false;}
    if(!head.next) {return false;}
    let runner = head, arr = [];
    while(runner && !arr.includes(runner)) {
        arr.push(runner);
        runner = runner.next;
    }
    if(!runner) {return false;}
    return true;
};
/**
 * Runtime: 160 ms, faster than 5.98% of JavaScript online submissions for Linked List Cycle.
 * Memory Usage: 38.8 MB, less than 17.03% of JavaScript online submissions for Linked List Cycle.
*/

// test cases
let myList = new ListNode(3);
for(let val of [2,0,-4]) {
    myList.add(val);
}
myList.addNode(myList.next);
console.log(hasCycle(myList));
// myList.print();