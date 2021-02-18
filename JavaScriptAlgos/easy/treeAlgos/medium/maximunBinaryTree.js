const TreeNode = require('./../../../dataStructures/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**654. Maximum Binary Tree
 * You are given an integer array nums with no duplicates. 
 * A maximum binary tree can be built recursively from nums using the following algorithm:
 * 
 * Create a root node whose value is the maximum value in nums.
 * Recursively build the left subtree on the subarray prefix to the left of the maximum value.
 * Recursively build the right subtree on the subarray suffix to the right of the maximum value.
 * Return the maximum binary tree built from nums.
 *  
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    let tree = null;
    const helper = (node, arr, direction) => {
        if (arr.length === 0) { return; }
        let max = Math.max(...arr), maxI = arr.indexOf(max), nodeToPass;
        if (node === null) {
            tree = new TreeNode(max);
            nodeToPass = tree;
        } else if (direction == "right") {
            node.right = new TreeNode(max);
            nodeToPass = node.right;
        } else if (direction == "left") {
            node.left = new TreeNode(max);
            nodeToPass = node.left;
        }
        helper(nodeToPass, arr.slice(maxI + 1, arr.length), "right");
        helper(nodeToPass, arr.slice(0, maxI), "left");
    };
    helper(tree, nums);
    return tree;
    /**
     * Runtime: 116 ms, faster than 77.48% of JavaScript online submissions for Maximum Binary Tree.
     * Memory Usage: 45.9 MB, less than 5.40% of JavaScript online submissions for Maximum Binary Tree.
     */
};