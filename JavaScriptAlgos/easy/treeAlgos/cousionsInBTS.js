const TreeNode = require('./../../dataStructures/TreeNode');
/**993. Cousins in Binary Tree
 * In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
 * 
 * Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
 * 
 * We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
 * 
 * Return true if and only if the nodes corresponding to the values x and y are cousins.
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    const find = (node, target, height = 0) => {
        // if node undefined or null
        if (!node) { return }
        // edge case if root is one of the targets
        if (node.val === target) { return { 'parent': null, 'height': height - 1 }; }
        // if it's a leaf node
        if (!node.right && !node.left) { return }

        // check if the child is not Null AND if it's the target we want
        // base case
        if (node.right !== null && node.right.val === target) {
            return { 'node': node.right, 'height': height, 'parent': node };
        }
        if (node.left !== null && node.left.val === target) {
            return { 'node': node.left, 'height': height, 'parent': node };
        }

        // else we haven't found it, and we continue to recurse
        height++;
        let r = find(node.right, target, height),
            l = find(node.left, target, height);
        return r === undefined ? l : r;
    };

    let XNode = find(root, x), YNode = find(root, y);
    if (XNode.height === YNode.height && XNode.parent !== YNode.parent) { return true; }
    return false;
    /**
     * Runtime: 80 ms, faster than 83.70% of JavaScript online submissions for Cousins in Binary Tree.
     * Memory Usage: 39.9 MB, less than 95.38% of JavaScript online submissions for Cousins in Binary Tree.
     */
};