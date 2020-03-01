/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head === null) return head;
    let curr = head;
    if(curr.next === null) return head;
    
    curr = curr.next;
    prev = head;
    while(curr != null){
        
        if( prev.val != curr.val ){
            prev = curr;
            curr = curr.next;
         } else {
             hold = prev;
             while(prev.val === curr.val){
                 prev = curr;
                 curr = curr.next;
             }
             hold.next = curr;
         }
        // console.log(`prev.val ${prev.val}`);
        // curr = curr.next;
    }
};