const TreeNode = require('./../../dataStructures/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**543. Diameter of Binary Tree
 * Given a binary tree, you need to compute the length of the diameter of the tree. 
 * The diameter of a binary tree is the length of the longest path between any two 
 * nodes in a tree. This path may or may not pass through the root.
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    const height = (node, count = 0) => {
        if (node === null) { return count; }
        count++;
        return Math.max(height(node.left, count), height(node.right, count));
    };
    if (root === null) { return 0; }
    let max = 0;
    const helper = (node) => {
        if (node === null) { return; }
        max = Math.max(height(node.left) + height(node.right), max);
        helper(node.left);
        helper(node.right);
    };
    helper(root);
    return max;
    /**
     * Runtime: 112 ms, faster than 22.25% of JavaScript online submissions for Diameter of Binary Tree.
     * Memory Usage: 41.7 MB, less than 87.79% of JavaScript online submissions for Diameter of Binary Tree.
     */
};