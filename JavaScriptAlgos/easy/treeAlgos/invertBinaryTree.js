const TreeNode = require('./../../dataStructures/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**226. Invert Binary Tree
 * Invert a binary tree.
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {

    if (!root) { return root; }
    let tree = new TreeNode(root.val);

    const helper = (node, rntTree) => {
        // null
        if (node === null) { return; }
        // leaf
        if (node.right) {
            rntTree.left = new TreeNode(node.right.val);
            helper(node.right, rntTree.left);
        }
        if (node.left) {
            rntTree.right = new TreeNode(node.left.val);
            helper(node.left, rntTree.right);
        }
    };

    helper(root, tree);

    return tree;
    /**
     * Runtime: 68 ms, faster than 98.51% of JavaScript online submissions for Invert Binary Tree.
     * Memory Usage: 39.2 MB, less than 10.78% of JavaScript online submissions for Invert Binary Tree.
     */

};