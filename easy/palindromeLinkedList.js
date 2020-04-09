/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
*/
// import {ListNode} from "./../dataStructures/ListNode"; 
import { ListNode } from "./../dataStructures/SingelyLinkedLists"
// structure
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
    let len = 0;
    let runner = head;
    while(runner != null) {
        len ++;
        runner = runner.next;
    }
    runner = head;
    len = Math.floor(len/2);
    let arr = [];
    while(len>0){
        arr.push(runner.val);
        runner = runner.next;
        len--;
    }
    // now runner is at the half way point

};
let ex1 = new SLL()
ex1.add(2).printAll();