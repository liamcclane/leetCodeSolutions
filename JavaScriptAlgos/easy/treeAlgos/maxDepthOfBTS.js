const TreeNode = require('./../../dataStructures/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**104. Maximum Depth of Binary Tree
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along 
 * the longest path from the root node down to the farthest leaf node.
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {

    const helper = (node, count = 0) => {
        if (node === null) {
            return count;
        }
        return Math.max(helper(node.right, count + 1), helper(node.left, count + 1));
    }

    return helper(root);
    /**
     * Runtime: 92 ms, faster than 42.90% of JavaScript online submissions for Maximum Depth of Binary Tree.
     * Memory Usage: 41.8 MB, less than 25.30% of JavaScript online submissions for Maximum Depth of Binary Tree.
     */
};