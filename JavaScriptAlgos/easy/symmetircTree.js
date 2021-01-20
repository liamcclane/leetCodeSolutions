// https://leetcode.com/problems/symmetric-tree/
const TreeNode = require('./../dataStructures/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**101. Symmetric Tree
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 * 
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 * 
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 *  
 * 
 * But the following [1,2,2,null,3,null,3] is not:
 * 
 *     1
 *    / \
 *   2   2
 *    \   \
 *    3    3
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const traverse = (nodeA, nodeB) => {
        // if either one exists and the other doesn't return false
        if (!nodeA ^ !nodeB) { return false; }
        // if both do not exist 
        else if (!nodeA && !nodeB) { return true; }

        // if the val don't equal return false
        if (nodeA.val !== nodeB.val) { return false; }

        // if BOTH are a leaf nodes, and if we hit this line, we know that 
        // nodeA.val === nodeB.val
        if (!nodeA.right && !nodeA.left &&
            !nodeB.right && !nodeB.left) {
            return true;
        }
        // else it is not a leaf node, and we can keep recursing
        // passing opposite left and rights of the passed node to account 
        // for reflective symmetry 
        return traverse(nodeA.right,nodeB.left) && traverse(nodeA.left, nodeB.right);
    };
    if(!root) {return true;}
    return traverse(root.right, root.left);
    /**
     * Runtime: 92 ms, faster than 59.86% of JavaScript online submissions for Symmetric Tree.
     * Memory Usage: 40.5 MB, less than 42.33% of JavaScript online submissions for Symmetric Tree.
     */
};
/**
 * my examples
 * [1,2,2,3,null,null,3]
 *     1
 *    / \
 *   2   2
 *  /     \
 * 3       3
 * returns : true
 */