const TreeNode = require('./../dataStructures/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**938. Range Sum of BST
 * Given the root node of a binary search tree, return the sum of values of all nodes 
 * with a value in the range [low, high].
 * 
 * Example 1:
 * Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
 * Output: 32
 * 
 * Example 2:
 * Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
 * Output: 23
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    let sum = 0;

    const helper = (node) => {
        // null
        if (node === null) { return; }
        if (node.val >= low && node.val <= high) {
            sum += node.val;
            if (node.left != null) { helper(node.left); }
            if (node.right != null) { helper(node.right); }
        } else if (node.val > high) {
            helper(node.left);
        } else if (node.val < low) {
            helper(node.right);
        }
        return sum;
    }

    return helper(root);
    /**
     * Runtime: 232 ms, faster than 50.13% of JavaScript online submissions for Range Sum of BST.
     * Memory Usage: 68.3 MB, less than 40.72% of JavaScript online submissions for Range Sum of BST.
     */
};

/**
 * inefficient
 * @param {TreeNode} root
 * @param {number} low 
 * @param {number} high
 * @returns {number} 
 */
const firstAttempt = (root, low, high) => {

    let sum = 0;
    /**Helper 
     * this function traverses the whole tree just checking 
     * if the node.val is within range of the given
     * low, high parameters of the encompassing function
     * @param {TreeNode} node
     * @returns {number} 
     */
    const helper = (node) => {
        // null
        if (node === null) { return; }

        if (node.val >= low && node.val <= high) {
            // console.log(sum, "sum : ", node.val, " val");
            sum += node.val;
        }
        // left
        if (node.left != null) {
            helper(node.left);
        }
        // right
        if (node.right != null) {
            helper(node.right);
        }

        return sum;

    }

    return helper(root);
    /**
     * Runtime: 244 ms, faster than 14.90% of JavaScript online submissions for Range Sum of BST.
     * Memory Usage: 68.3 MB, less than 30.21% of JavaScript online submissions for Range Sum of BST.
     */

}