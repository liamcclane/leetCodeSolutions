const TreeNode = require('./../dataStructures/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** 404. Sum of Left Leaves
 * 
 * Find the sum of all left leaves in a given binary tree.
 * 
 * Example:
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 
 * There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {

    let sum = 0;

    const treeTraversal = (node, lastVal = 0, pastDirection = "root") => {
        if(!node) {return sum;}
        if (!node.left && !node.right) {
            if(pastDirection != "left") {
                return sum;
            }
            sum += node.val;
            return sum;
        }
        if (node.right) {
            sum = treeTraversal(node.right, node.val, "right");
        }
        if (node.left) {
            sum = treeTraversal(node.left, node.val, "left");
        }
        return sum;
    }

    return treeTraversal(root);
};
/**
 * Runtime: 76 ms, faster than 84.81% of JavaScript online submissions for Sum of Left Leaves.
 * Memory Usage: 38.5 MB, less than 28.60% of JavaScript online submissions for Sum of Left Leaves.
 */

const ex1 = new TreeNode(3);
ex1.left = new TreeNode(9);
ex1.right = new TreeNode(20);

ex1.right.left = new TreeNode(15);
ex1.right.right = new TreeNode(7);

console.log(sumOfLeftLeaves(ex1));
console.log();

const singleNode = new TreeNode(22);
console.log(sumOfLeftLeaves(singleNode));