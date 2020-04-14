/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example:
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {  
    let l1Str = "";
    let l2Str = "";
    let runner = l1;
    while(runner){
        l1Str = runner.val.toString() + l1Str;
        runner = runner.next;
    }
    runner = l2;
    while(runner){
        l2Str = runner.val.toString() + l2Str;
        runner = runner.next;
    }
    let n1 = parseFloat(l1Str);
    let n2 = Number(l2Str);
    console.log(n1);
    console.log(n2);
    let ans = n1+n2;
    let ansStr = ans.toString();
    console.log(ans);
    let ansList = new ListNode(Number(ansStr[ansStr.length - 1]));
    console.log(ansList.val);
    for(let i = ansStr.length - 2; i>=0; i--){
        let link = new ListNode(Number(ansStr[i]));
        let runner = ansList;
        while(runner.next != null){
            runner = runner.next;
        }
        runner.next = link;
    }
    return ansList;
};
// import {ListNode} from './../dataStructures/ListNode.js';
// let list1 = new ListNode(2);
// list1.add(3).add(4);
// let list2 = new ListNode(1);
// list2.add(1).add(1);
// console.log(addTwoNumbers(list1,list2));
