/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const ListNode = require('./dataStructures/ListNode');
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head === null) {
        console.log("empty list");
        return head;
    }
    let returnHead = head;
    while (returnHead && returnHead.val === val) {
        returnHead = returnHead.next;
    }
    // if we hit the end of the list without finding a new
    // proper start, that means the while list was filled with
    // the val we were looking for
    if (returnHead === null) { return returnHead };

    // the chat won't open for me, but I can see it. SOmething weird is going on with my VS I may need to update?
    // I'm so glad the code worked Yay!!!
    // Let me know when you're back
    //    11 -> 12 -> 13 -> 14 -> 14 -> null
    //           p    c      f
    //              ------>
    //    11 -> 12 -------> 14 -> 14 -> null              
    //           p          c     f  
    //


    let prev = returnHead, curr = returnHead.next;
    while (curr) {
        if (curr.val === val) {
            curr = curr.next;
            prev.next = curr;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    return returnHead;
};


// so because my print() doesn't return anything and just console.logs
// at the end I can not chain like this ex1.print().removeElements().print()
// now that I am thinking about this I can not even write
// ex1.removeElement()
// because .removeElement() 
// would have to live inside the class to invoke the function like that
// instead I need to invoke it alone
// like this 
// removeElements(ex1,number) 
// where I pass ex1 as a parameter. okay that is all my inner thinking
// lol 
// also I can chain like this though
// removeElements(ex1,number).print();
// because the functions RETURNS a ListNode and I can call the print() function on that node
// I'm listening but haven't had time to absorb and think about remove ELements and yeah lol But, I'm following along
// no worries lol 

// ***********************
let singleNode = new ListNode(25);
let ex1 = new ListNode(101);
for (let val of [11, 11, 12, 11, 13, 14, 104]) { //is this supposed to REMOVE the ten's? 
    ex1.add(val);
}
ex1.print();
/**
 * 40-42 is short hand for //heard
 * // :)
 * let arr = [11, 12, 13, 14];
 * for (let i = 0; i < arr.length; i++) {
 *     ex1.add(arr[i]);
 * }
 */

// test cases

// the function calls for two parameters, so I just put a number
// let's think of the cases we will deal with

// // Edge cases
// // empty list,
// console.log(removeElements(null, 5)); // returns null
// console.log();

// // one node in list
// console.log(removeElements(singleNode, 25)); // returns null
// console.log();

// // val not in the list
// removeElements(ex1, 225).print();
// console.log();


// // multiple occurrences
// removeElements(ex1, 11).print();
// console.log();

// // removing head, first node
// removeElements(ex1, 101).print();
// console.log();

// // removing last node, 104
// removeElements(ex1, 104).print();
// console.log();

// let ex2 = new ListNode(5);
// for (let val of [5, 5, 5, 5, 5]) {
//     ex2.add(val);
// }
// console.log(removeElements(ex2, 5)); // returns null
// console.log();


// failed test case
// removeElements(new ListNode(1) ,2).print();

// let ex3 = new ListNode(1)
// ex3.add(2);
// ex3.print();
// removeElements(ex3,1).print();




/** Unfinished
 * removeElements while created a new list
 * returns a new ListNode that has all the deleted all the val occurrences
 * @param {ListNode} head 
 * @param {number} val 
 * @returns {ListNode} creates a new list and returns it
 */
const removeElements2 = (head, val) => {
    // edge case passed empty list or (one element in the head and != to val)
    if (head === null || (head.next === null && head.val != val)) { return head }

    let curr = head, prev = null, ansHead = null;
    while (curr) {
        if (curr.val != val) {
            let newest = new ListNode(curr.val);
            if (ansHead === null) {
                ansHead = newest;
                prev = ansHead;
            }
            prev.next = newest;
            prev = newest;
        }
        curr = curr.next
    }
    return ansHead;
}
