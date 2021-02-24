/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**814. Binary Tree Pruning
 * We are given the head node root of a binary tree, 
 * where additionally every node's value is either a 0 or a 1.
 * 
 * Return the same tree where every subtree (of the given tree) 
 * not containing a 1 has been removed.
 * 
 * (Recall that the subtree of a node X is X, 
 * plus every node that is a descendant of X.)
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
    /**
     * checks if a val 1 exists in the tree
     * @param {TreeNode} node
     * @returns {boolean} 
     */
    const treeContainsOne = (node) => {
        if (node === null) { return false; }
        if (node.val === 1) { return true; }
        return treeContainsOne(node.right) || treeContainsOne(node.left);
    };

    /**
     * traverses though all the subtrees looking to keep or prune 
     * the subbranch
     * @param {TreeNode} node 
     */
    const helper = (node) => {
        // null
        if (node === null) { return; }

        // leaf AKA only passed one node into root
        if (!node.right && !node.left) {
            if (node.val === 0) {
                root = null;
                return;
            }
            return;
        }

        // left & right
        let keepL = treeContainsOne(node.left),
            keepR = treeContainsOne(node.right);

        if (!keepL) {
            node.left = null;
        } else {
            helper(node.left);
        }
        if (!keepR) {
            node.right = null;
        } else {
            helper(node.right)
        }
    };

    helper(root);
    // if statement checks if we need to prune the root as well after the helper function
    if (!root.right && !root.left && root.val === 0) { return null; }

    return root;
    /**
     * Runtime: 76 ms, faster than 89.94% of JavaScript online submissions for Binary Tree Pruning.
     * Memory Usage: 38.8 MB, less than 65.09% of JavaScript online submissions for Binary Tree Pruning.
     */
};