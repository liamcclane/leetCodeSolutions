const TreeNode =  require('./../../dataStructures/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**112. Path Sum
 * Given the root of a binary tree and an integer targetSum, 
 * return true if the tree has a root-to-leaf path such that 
 * adding up all the values along the path equals targetSum.
 * 
 * A leaf is a node with no children.
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {

    if (root === null) return false;

    const checkSum = sum => sum === targetSum;

    const helper = (node, sum = 0) => {
        if (node === null) {
            return false;
        }
        sum += node.val;
        if (!node.left && !node.right) {
            return checkSum(sum);
        }
        return helper(node.left, sum) || helper(node.right, sum);
    };

    return helper(root);
    /**
     * Runtime: 92 ms, faster than 62.19% of JavaScript online submissions for Path Sum.
     * Memory Usage: 42.5 MB, less than 16.65% of JavaScript online submissions for Path Sum.
     */
};