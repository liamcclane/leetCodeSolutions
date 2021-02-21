const TreeNode = require('./../../dataStructures/TreeNode');
/**572. Subtree of Another Tree
 * Given two non-empty binary trees s and t, check whether tree t has 
 * exactly the same structure and node values with a subtree of s. 
 * A subtree of s is a tree consists of a node in s and all of this node's descendants. 
 * The tree s could also be considered as a subtree of itself.
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    const sameTree = (node1, node2) => {
        if (!node1 && !node2) { return true; }
        else if (node1 === null || node2 === null) { return false; }
        if (node1.val != node2.val) { return false; }
        return sameTree(node1.left, node2.left) && sameTree(node1.right, node2.right);
    };

    const helper = (node) => {
        if (!node) { return false; }
        if (sameTree(node, t)) { return true; }
        return helper(node.right) || helper(node.left);
    };

    return helper(s);
    /**
     * Runtime: 144 ms, faster than 15.17% of JavaScript online submissions for Subtree of Another Tree.
     * Memory Usage: 45.4 MB, less than 30.13% of JavaScript online submissions for Subtree of Another Tree.
     */
};