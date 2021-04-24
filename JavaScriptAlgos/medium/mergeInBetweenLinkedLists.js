/**1669. Merge In Between Linked Lists
 * You are given two linked lists: list1 and list2 of sizes n and m respectively.
 * 
 * Remove list1's nodes from the ath node to the bth node, and put list2 in their place.
 * 
 * Example
 * list1 = [0,1,2,3,4,5]
 * list2 = [100,101,102,103]
 * a = 3, b = 4
 * 
 * returns [0,1,2,100,101,102,103,5]
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    
    let aMinusOneNode = list1, bPlusOneNode = list1, tailList2 = list2;
    
    // move the tailList2 to the end of list2
    while(tailList2.next != null) {
        tailList2 = tailList2.next;
    }
    
    // move aMinusOneNode 
    while(a > 1) {
        aMinusOneNode = aMinusOneNode.next;
        a--;
    }
    // console.log("aMinusOneNode " + aMinusOneNode.val);
    
    // move bPlusOneNode 
    while(b > -1) {
        bPlusOneNode = bPlusOneNode.next;
        b--;
    }
    // console.log("bPlusOneNode " + bPlusOneNode.val);
    
    // connect aMinusOneNode to the head of list2
    aMinusOneNode.next = list2;
    // make the end of list2 connect to bPlusOneNode
    tailList2.next = bPlusOneNode;
    
    return list1;
    /**
     * Runtime: 208 ms, faster than 98.82% of JavaScript online submissions for Merge In Between Linked Lists.
     * Memory Usage: 51.6 MB, less than 25.10% of JavaScript online submissions for Merge In Between Linked Lists.
     */
    
};
