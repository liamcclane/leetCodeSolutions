/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
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
    let count1 = lenOfList(l1), count2 = lenOfList(l2),
        largerList = l1, smallerList = l2,
        answerList, answerRunner;
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

    const adjustVarNames = () => {
        largerList = l2;
        smallerList = l1;
        let temp = count1;
        count1 = count2;
        count2 = temp;
    }

    const reverseList = function (head) {
        let previous = null;
        while (head !== null) {
            let next = head.next;
            head.next = previous;
            previous = head
            head = next;
        }
        return previous;
    };

    const carryOverTens = () => {
        let runner = answerList;
        while (runner != null) {
            if (runner.val > 10) {
                runner.val -= 10;
                if (runner.next === null) {
                    runner.next.next = new ListNode(1);
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
    // console.log("answerList", answerList);
    // console.log("answerRunner", answerRunner);
    // console.log("largerList.val", largerList.val);
    addLists();
    reverseList(answerList);
    carryOverTens();
    reverseList(answerList);

    // if (answerList.val >= 10) {
    //     let temp = answerList;
    //     answerList = new ListNode(1);
    //     temp.val = temp.val - 10;
    //     answerList.next = temp;
    // }

    // back to the top, and carry over vals > 10
    // answerRunner = answerList;
    // let front = answerRunner.next;

    // while (front != null) {

    //     if (front.val >= 10) {
    //         answerRunner.val++;
    //         front.val = front.val - 10;
    //     }

    //     front = front.next;
    //     answerRunner = answerRunner.next;
    // }

    return answerList;
};
/**
 * if(l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1 === null && l2 === null) {
        return new ListNode(0);
    }
    
    const lenOfList = (list, count = 0) => {
        let runner = list;
        while(runner != null) {
            count++;
            runner = runner.next;
        }
        return count;
    }
    
    let count1 = lenOfList(l1), count2 = lenOfList(l2),
        largerList = l1, smallerList = l2;
    
    if(count2 > count1) {
        largerList = l2;
        smallerList = l1;
        let temp = count1; 
        count1= count2;
        count2 = temp;
    }
    
    let answerList, answerRunner;
    
    while(count1 > count2) {
        let newNode = new ListNode(largerList.val);
        if(answerList === undefined) {
            answerList = newNode;
            answerRunner = answerList;
        } else {
            answerRunner.next = newNode;
            answerRunner = answerRunner.next;
        }
        largerList = largerList.next;
        count1--;
    }
//     console.log("answerList",answerList);
//     console.log("answerRunner", answerRunner);
//     console.log("largerList.val", largerList.val);
    
    while(largerList != null) {
        let newestNode = new ListNode(largerList.val + smallerList.val);
        // console.log(answerList);
        if(answerList === undefined) {
            answerList = newestNode;
            answerRunner = answerList;
        } else {
            answerRunner.next = newestNode;
            answerRunner = answerRunner.next;
        }
        largerList = largerList.next;
        smallerList = smallerList.next;
    }
    
    if(answerList.val >= 10) {
        let temp = answerList;
        answerList = new ListNode(1);
        temp.val = temp.val - 10;
        answerList.next = temp;
    }
    
    // back to the top, and carry over vals > 10
    answerRunner = answerList;
    let front = answerRunner.next;
    
    while(front != null) {
        
        if(front.val >= 10) {
            answerRunner.val++;
            front.val = front.val - 10;
        }
        
        front = front.next;
        answerRunner = answerRunner.next;
    }
    
    return answerList;
 */