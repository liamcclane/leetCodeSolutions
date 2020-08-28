const ListNode = require('./../dataStructures/ListNode');
/*****Merge Two Sorted List - 21********
 * 
 * Merge two sorted linked lists and return it as a new list. 
 * The new list should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 * @param {ListNode} l1 
 * @param {ListNode} l2
 * @returns {ListNode}
 */
function mergeTwoLists(l1, l2) {
    if (!l1 && !l2) {
        return null
    } else if (!l1 && l2) {
        return l2;
    } else if (l1 && !l2) {
        return l1;
    }
    var add = (list, val) => {
        let runner = list;
        while (runner.next) {
            runner = runner.next;
        }
        runner.next = new ListNode(val);
    }
    let ans = new ListNode(Math.min(l1.val, l2.val));

    let r1 = (l1.val <= l2.val) ? l1.next : l1,
        r2 = (l2.val < l1.val) ? l2.next : l2;
    while (r1 && r2) {
        // console.log(r1.val);
        // console.log(r2.val);
        if (r1.val < r2.val) {
            add(ans, r1.val);
            r1 = r1.next;
        } else if (r2.val < r1.val) {
            add(ans, r2.val);
            r2 = r2.next;
        } else {
            add(ans, r1.val);
            add(ans, r2.val);
            r1 = r1.next;
            r2 = r2.next;
        }
        // ans.print();
        // console.log()
    }
    // now check if we finished one but not the other
    // not matching in lengths
    if (r1) {
        while (r1) {
            add(ans, r1.val);
            r1 = r1.next;
        }
    }
    if (r2) {
        while (r2) {
            add(ans, r2.val);
            r2 = r2.next;
        }
    }
    // alternatively, we could 'run' down the ans list
    // then just add the leftover node list
    return ans;
    /**
     * Runtime: 68 ms
     * Memory Usage: 38.4 MB
     * Your runtime beats 99.53 % of javascript submissions.
     * Your memory usage beats 60.97 % of javascript submissions.
     */
};

let list1 = new ListNode(1);
for (let v of [2, 4]) {
    list1.add(v);
}
list1.print();
let list2 = new ListNode(1);
for (let v of [3, 4, 55, 77, 888]) {
    list2.add(v);
}
list2.print();

mergeTwoLists(list1, list2).print();
// mergeTwoLists(null, null); // return null

/**tags for later look up
 * refactorMe
 */
