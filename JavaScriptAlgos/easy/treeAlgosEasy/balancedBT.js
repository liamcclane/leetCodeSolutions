const TreeNode = require('./../../dataStructures/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**110. Balanced Binary Tree
 * Given a binary tree, determine if it is height-balanced.
 * 
 * For this problem, a height-balanced binary tree is defined as:
 * 
 * a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

    const height = (node) => {
        if(node === null) {return 0;}
        return 1 + Math.max(height(node.left), height(node.right));
    };
    
    if(root === null) {return true;}

    let leftH = height(root.left), rightH = height(root.right);

    if(Math.max(leftH, rightH) - Math.min(leftH, rightH) <= 1
      && isBalanced(root.left) && isBalanced(root.right)) {
        return true;
    } else {
        return false;
    }
    /**
     * Runtime: 104 ms, faster than 23.59% of JavaScript online submissions for Balanced Binary Tree.
     * Memory Usage: 44.4 MB, less than 13.06% of JavaScript online submissions for Balanced Binary Tree.
     */
};