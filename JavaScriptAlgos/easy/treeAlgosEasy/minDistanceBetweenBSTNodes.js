const TreeNode = require('./../dataStructures/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**783. Minimum Distance Between BST Nodes
 * Given a Binary Search Tree (BST) with the root node root, 
 * return the minimum difference between the values of any 
 * two different nodes in the tree.
 * 
 * Example :
 * 
 * Input: root = [4,2,6,1,3,null,null]
 * Output: 1
 * Explanation:
 * Note that root is a TreeNode object, not an array.
 * 
 * The given tree [4,2,6,1,3,null,null]
 * is represented by the following diagram:
 * 
 *           4
 *         /   \
 *       2      6
 *      / \    
 *     1   3  
 * 
 * while the minimum difference in this tree is 1, it occurs 
 * between node 1 and node 2, also between node 3 and node 2.
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
    // null case
    if (root === null) { return 0; }
    // given child node
    else if (root.right === null && root.left === null) {
        return 0;
    }

    let mymin = 10000;
    const helper = (node, arr = []) => {

        // null
        if (node === null) {
            return;
        }
        // child
        if (node.left === null && node.right === null) {
            if (arr.length >= 1) {
                mymin = Math.min(mymin, Math.abs(arr[arr.length - 1] - node.val));
            }
            arr.push(node.val);
            return;
        }
        // left
        if (node.left != null) {
            helper(node.left, arr);
        }

        // logic 
        if (arr.length >= 1) {
            mymin = Math.min(mymin, Math.abs(arr[arr.length - 1] - node.val));
        }
        arr.push(node.val);

        // right
        if (node.right != null) {
            helper(node.right, arr);
        }
    }
    helper(root);
    return mymin;
    /**
     * Runtime: 76 ms, faster than 90.91% of JavaScript online submissions for Minimum Distance Between BST Nodes.
     * Memory Usage: 39.9 MB, less than 33.33% of JavaScript online submissions for Minimum Distance Between BST Nodes.
     */
};