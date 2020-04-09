/***
 * trying to import and export file and modularize my code
 */

export class ListNode {
    /**
     * A Node with two characteristics Val and Next
     * @param { number } val values integer for the node
     */
    constructor(val) {
        this.val = val;
        this.next = null;
    }
    add(val){
        let curr = this;
        while(curr.next != null) {
            curr = curr.next;
        }
        let newNode = new ListNode(val);
        curr.next = newNode;
        return this;
    }
    print() {
        let curr = this;
        while(curr.next != null) {
            console.log(curr.val);
            curr = curr.next;
        }
    }
}
