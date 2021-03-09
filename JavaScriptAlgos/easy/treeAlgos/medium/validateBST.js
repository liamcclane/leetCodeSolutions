const TreeNode = require('./../../../dataStructures/TreeNode')
/**98. Validate Binary Search Tree
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * 
 * A valid BST is defined as follows:
 * 
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {

    const isLower = (node, targetVal) => {
        if (!node) { return true; }
        if (node.val < targetVal) {
            return isLower(node.right, targetVal) && isLower(node.left, targetVal);
        }
        return false;
    };

    const isGreater = (node, targetVal) => {
        if (!node) { return true; }
        if (node.val > targetVal) {
            return isGreater(node.right, targetVal) && isGreater(node.left, targetVal);
        }
        return false;
    };
    const helper = (node) => {
        if (!node) { return true; }
        let left = isLower(node.left, node.val),
            right = isGreater(node.right, node.val);
        if (left && right) {
            return helper(node.left) && helper(node.right);
        }
        return false;
    };

    if (!root) { return true; }
    if (!root.right && !root.left) { return true; }

    return helper(root);
    /**
     * Runtime: 96 ms, faster than 34.87% of JavaScript online submissions for Validate Binary Search Tree.
     * Memory Usage: 42.5 MB, less than 87.91% of JavaScript online submissions for Validate Binary Search Tree.
     */
};
