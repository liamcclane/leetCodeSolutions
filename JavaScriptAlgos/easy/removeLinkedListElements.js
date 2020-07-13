/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * const add = (val) =>{
 *  // code
 * }
 * const print = () =>{
 *  // code
 * }
 */
const ListNode = require('../dataStructures/ListNode');

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

    // example list, removing 13
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

// ***********************
// test cases

// case where function is passed a null head
// ex 1
// return null
console.log(removeElements(null, 2));
console.log();
// case where function is passed one listnode where it needs to be removed
// ex 2
// returns null
console.log(removeElements(new ListNode(2), 2));
console.log();

// case where the list is completely made of elements we need to remove
// ex3
// returns null
let ex3FullOfTwos = new ListNode(2);
for (let val of [2, 2, 2, 2, 2]) { ex3FullOfTwos.add(val) }
console.log("printing a list of all twos, should return null");
ex3FullOfTwos.print();
console.log(removeElements(ex3FullOfTwos, 2));
console.log();

// case where list is "half" full of vals we need to remove from the front
let ex4HalfFrontFull = new ListNode(2);
for (let val of [2, 2, 2, 2, 6, 7, 8, 4, 10]) { ex4HalfFrontFull.add(val); }
console.log("printing a list HALF all twos, should return without twos");
ex4HalfFrontFull.print();
removeElements(ex4HalfFrontFull, 2).print();
console.log();

// case where the number is no where in the list 
let ex5NoTwos = new ListNode(7);
for (let val of [6, 7, 8, 4, 10]) { ex5NoTwos.add(val); }
ex5NoTwos.print();
removeElements(ex5NoTwos, 2).print();
console.log();

// case with sporadic twos
let ex6Sporadic = new ListNode(5);
for (let val of [6, 2, 7, 2, 4, 10]) { ex6Sporadic.add(val); }
ex6Sporadic.print();
removeElements(ex6Sporadic, 2).print();
console.log();


// case with multiple twos in the center
let ex7MultipleTwoCenter = new ListNode(5);
for (let val of [6, 2, 2, 2, 4, 10]) { ex7MultipleTwoCenter.add(val); }
ex7MultipleTwoCenter.print();
removeElements(ex7MultipleTwoCenter, 2).print();
console.log();


// case with multiple twos at the end...
let ex7MultipleTwoEnd = new ListNode(5);
for (let val of [6, 2, 2, 2]) { ex7MultipleTwoEnd.add(val); }
ex7MultipleTwoEnd.print();
removeElements(ex7MultipleTwoEnd, 2).print();
console.log();




/**
 * Again but a little messier
 * A Little messy
 */
const removeElementsLia = (head, val) => {

    // empty list
    if (!(head)) { return head; }

    // list with one node that is the target to remove
    if ((head.next == null) && head.val == val) { return null; }

    let back = null; curr = head; front = head.next;
    let newHead;
    // this while loop moves the curr pointer forward until the attribute 
    // .val != val 
    while (curr && curr.val == val) {
        curr = curr.next;
        // with this loop we have to take into account 
        // a list made of only the val we are trying to get rid of 
        // or a list that just has x number of occurances in the begning of list that we are tring to remove
    }
    if (!(curr)) { return null; }

    newHead = curr;
    back = null;
    front = curr.next ? curr.next : null;
    while (curr) {
        if (curr.val == val) {
            if (front != null && front.next != null) {
                front = front.next;
                // the turnary is basically checking for existance
            }
            // front = front.next ? front.next : null; // the turnary is basically checking for existance
            curr = curr.next;
        } else {
            if (back != null) {
                back.next = curr;
            }
            back = curr;
            // console.log("front node is");
            // console.log(front);
            if (front != null && front.next != null) {
                front = front.next;
                // the turnary is basically checking for existance
            }
            // front = (front.next != null) ? front.next : null; // same as line above
            curr = curr.next;
        }
    }
    back.next = curr;

    return newHead;
}


