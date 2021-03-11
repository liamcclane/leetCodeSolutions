const TreeNode = require('./../../dataStructures/TreeNode');
/**965. Univalued Binary Tree
 * A binary tree is univalued if every node in the tree has the same value.
 * 
 * Return true if and only if the given tree is univalued.
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
    const travers = (node, val) => {
        if (!node) { return true; }
        if (node.val != val) { return false; }
        return travers(node.right, node.val) && travers(node.left, node.val);
    };
    if (!root) { return true; }
    return travers(root.right, root.val) && travers(root.left, root.val);
    /**
     * Runtime: 80 ms, faster than 69.07% of JavaScript online submissions for Univalued Binary Tree.
     * Memory Usage: 38.9 MB, less than 83.78% of JavaScript online submissions for Univalued Binary Tree.
     */
};