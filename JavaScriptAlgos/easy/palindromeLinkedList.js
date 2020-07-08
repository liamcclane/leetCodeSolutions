var ListNode = require('./../dataStructures/ListNode');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
*/
/** Palindrome Linked List **
 * 
 * Given a singly linked list, determine if it is a palindrome.
 * 
 * Example 1:
 * 
 * Input: 1->2
 * Output: false
 * Example 2:
 * 
 * Input: 1->2->2->1
 * Output: true
 * 
 * @param {*} head 
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (head === null || head.next === null) { return true };
    let len = 0, runner = head;
    // getting length of list
    while (runner) {
        len++;
        runner = runner.next;
    }
    // repositioning runner to the top
    runner = head;
    let half = Math.floor(len / 2), arr = [];
    while (runner) {
        // if we are on the first half of the palindrome
        // add it to the array
        if (half > 0) {
            arr.push(runner.val);
        } else if (half < 0) {
            //  if we are in the second half of the palindrome 
            // compare it to the values in the arr while popping
            if (arr.pop() != runner.val) {
                return false;
            }
        }
        // Always move the runner and decrease the half
        half--;
        runner = runner.next;
        // this if statement takes care of odd and even list
        // if we are at the inflection point 
        // additionally decrease because we are only in the second half IF the 
        // variable half is negative, then if it is an add length list
        //  we need to additionally move the runner over that extra inflection point
        if (half === 0) {
            half--;
            if (len % 2 == 1) { runner = runner.next }
        }
    }
    return true;
};
let list1 = new ListNode(1);
for (let v of [2,2,1]) {
    list1.add(v);
}
list1.print();
console.log(isPalindrome(list1));