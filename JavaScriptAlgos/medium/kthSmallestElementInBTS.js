const TreeNode = require('./../dataStructures/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**230. Kth Smallest Element in a BST
 * Given a binary search tree, write a function 
 * kthSmallest to find the kth smallest element in it.
 * 
 * Example 1:
 * 
 * Input: root = [3,1,4,null,2], k = 1
 *    3
 *   / \
 *  1   4
 *   \
 *    2
 * Output: 1
 * Example 2:
 * 
 * Input: root = [5,3,6,2,4,null,null,1], k = 3
 *        5
 *       / \
 *      3   6
 *     / \
 *    2   4
 *   /
 *  1
 * Output: 3
 * Follow up:
 *      What if the BST is modified (insert/delete operations) 
 *      often and you need to find the kth smallest frequently? 
 *      How would you optimize the kthSmallest routine?
 * 
 * Constraints:
 *      The number of elements of the BST is between 1 to 10^4.
 *      You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let allVals = [];
    
    const treeTraversal = (node, arr = []) => {
        // empty 
        // I check for existance before recursivly calling the function
        if(!node) {
            console.log("this should not be called");
            return [];
        }
        arr.push(node.val);
        // left/right
        if(node.left || node.right) {
            // left
            if(node.left){
                treeTraversal(node.left,arr);
                // console.log(arr, " arr line 28");
            }
            // right
            if(node.right) {
                treeTraversal(node.right,arr);
                // console.log(arr, " arr line 33");
            }
        } else {
            // no children becomes the base case
            return arr;
        }
        return arr;
    }
    
    allVals = treeTraversal(root);
    // console.log(allVals, " allVals");
    if(allVals.length > 1){
        allVals.sort((a,b) => (a-b))    
    }
    return allVals[k-1];
    
};
/**
 * Runtime: 88 ms, faster than 70.65% of JavaScript online submissions for Kth Smallest Element in a BST.
 * Memory Usage: 43.3 MB, less than 9.61% of JavaScript online submissions for Kth Smallest Element in a BST.
*/

/**
 * Example 1:
 * 
 * Input: root = [3,1,4,null,2], k = 1
 *    3
 *   / \
 *  1   4
 *   \
 *    2
 * Output: 1
 */
const ex1 = new TreeNode(3);
ex1.left = new TreeNode(1);
ex1.right = new TreeNode(4);
ex1.left.right = new TreeNode(2);
console.log(kthSmallest(ex1, 1));

/** 
 * Example 2:
 * Input: root = [5,3,6,2,4,null,null,1], k = 3
 *        5
 *       / \
 *      3   6
 *     / \
 *    2   4
 *   /
 *  1
 * Output: 3
 */
const ex2 = new TreeNode(5);

ex2.left = new TreeNode(3);
ex2.right = new TreeNode(6);

ex2.left.left = new TreeNode(2);
ex2.left.right = new TreeNode(4);

ex2.left.left.left = new TreeNode(1);

console.log(kthSmallest(ex2,3));

const ex3 = new TreeNode(1);
console.log(kthSmallest(ex3,1));