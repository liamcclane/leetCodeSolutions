/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**445. Add Two Numbers II
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The most significant digit comes first and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Follow up:
 * What if you cannot modify the input lists? In other words, reversing the lists is not allowed.
 * 
 * Example:
 * 
 * Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 8 -> 0 -> 7
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    // edge cases
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1 === null && l2 === null) {
        return new ListNode(0);
    }

    /**
     * helper method to count the length of the list
     * @param {*} list 
     * @param {*} count 
     */
    const lenOfList = (list, count = 0) => {
        let runner = list;
        while (runner != null) {
            count++;
            runner = runner.next;
        }
        return count;
    }

    // variable declarations
    let count1 = lenOfList(l1), count2 = lenOfList(l2),
        largerList = l1, smallerList = l2,
        answerList, answerRunner;
    
    /**
     * helper method that moves though both list at the same 
     * time once the pointers are at the same tens 
     * value in the number
     */
    const addLists = () => {
        while (largerList != null) {
            let newestNode = new ListNode(largerList.val + smallerList.val);
            // console.log(answerList);
            if (answerList === undefined) {
                answerList = newestNode;
                answerRunner = answerList;
            } else {
                answerRunner.next = newestNode;
                answerRunner = answerRunner.next;
            }
            largerList = largerList.next;
            smallerList = smallerList.next;
        }
    }
    /**
     * helper method that moves though the lager size list 
     * and adds to the answerList until both pointers are at the
     * same tens value
     */
    const fillLargerOverFlow = () => {
        while (count1 > count2) {
            let newNode = new ListNode(largerList.val);
            if (answerList === undefined) {
                answerList = newNode;
                answerRunner = answerList;
            } else {
                answerRunner.next = newNode;
                answerRunner = answerRunner.next;
            }
            largerList = largerList.next;
            count1--;
        }
    }

    /**
     * this helper function gets called if list2 size is greater
     * than list1 and we need to switch the variables
     */
    const adjustVarNames = () => {
        largerList = l2;
        smallerList = l1;
        let temp = count1;
        count1 = count2;
        count2 = temp;
    }

    /**
     * reverses the answerList once both l1 and l2
     * have been added together, this is was done 
     * to be able to easily carry over values >= 10
     * into the answerList
     * 
     * it will be called twice, once to reverse it and 
     * then again to reverse it back to normal
     */
    const reverseList = () => {
        let back = null, front = answerList.next;
        while(answerList != null) {
            answerList.next = back;
            back = answerList;
            answerList = front;
            front = front != null ? front.next : null;
        }
        answerList = back;
    }

    /**
     * this helper method iterates though a reversed answerList
     * and carries over the tens columns in addition
     */
    const carryOverTens = () => {
        let runner = answerList;
        while (runner != null) {
            if (runner.val >= 10) {
                runner.val -= 10;
                if (runner.next === null) {
                    runner.next = new ListNode(1);
                } else {
                    runner.next.val++;
                }
            }
            runner = runner.next;
        }
    }

    // switch the names of larger and smaller
    if (count2 > count1) {
        adjustVarNames();
    }
    fillLargerOverFlow();
    addLists();
    reverseList(answerList);
    carryOverTens();
    reverseList(answerList);
    return answerList;
    /**
     * Runtime: 140 ms, faster than 57.62% of JavaScript online submissions for Add Two Numbers II.
     * Memory Usage: 44.2 MB, less than 75.84% of JavaScript online submissions for Add Two Numbers II.
     */
};