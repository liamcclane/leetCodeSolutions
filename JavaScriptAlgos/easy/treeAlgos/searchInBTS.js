const TreeNode =  require('./../../dataStructures/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**700. Search in a Binary Search Tree
 * You are given the root of a binary search tree (BST) and an integer val.
 * 
 * Find the node in the BST that the node's value equals val and return the 
 * subtree rooted with that node. If such a node does not exist, return null.
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    const helper = node => {
        if (node === null) return null;
        if (node.val === val) return node;
        if (val < node.val) return helper(node.left);
        return helper(node.right);
    };
    return helper(root);
    /**
     * Runtime: 96 ms, faster than 78.84% of JavaScript online submissions for Search in a Binary Search Tree.
     * Memory Usage: 45.2 MB, less than 35.82% of JavaScript online submissions for Search in a Binary Search Tree.
     */
};
const search2 = (root, val) => {
    const helper = (node) => {
        if (node === null) { return null; }
        if (node.val === val) { return node; }
        let RN = helper(node.right);
        if (RN !== null) return RN;
        return helper(node.left);
    };

    return helper(root);
    /**
     * Runtime: 96 ms, faster than 78.84% of JavaScript online submissions for Search in a Binary Search Tree.
     * Memory Usage: 45 MB, less than 75.86% of JavaScript online submissions for Search in a Binary Search Tree.
     */
};