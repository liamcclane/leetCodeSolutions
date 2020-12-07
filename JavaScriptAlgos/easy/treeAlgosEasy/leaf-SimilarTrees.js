const TreeNode = require('./../../dataStructures/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**872. Leaf-Similar Trees
 * Consider all the leaves of a binary tree, from left to right order, 
 * the values of those leaves form a leaf value sequence.
 * 
 * For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
 * 
 * Two binary trees are considered leaf-similar if their leaf value sequence is the same.
 * 
 * Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let arr1 = [], arr2 = [];

    const helper = (node, arr = [], compArr = []) => {
        if (node === null) { return; }
        if (node.left === null && node.right === null) {
            // console.log(compArr, "compArr:", arr, "arr:", node.val, "node.val");
            if (compArr.length != 0 && node.val != compArr[arr.length]) {
                arr.push(false);
            } else {
                arr.push(node.val);
            }
        }
        if (node.left != null) {
            helper(node.left, arr, compArr);
        }
        if (node.right != null) {
            helper(node.right, arr, compArr);
        }
        return arr;
    }
    arr1 = helper(root1);
    arr2 = helper(root2, [], arr1);
    if (arr1.length != arr2.length) { return false; }
    for (let i = 0; i < arr1.length; i++) {
        if (arr2[i] === false) { return false; }
        if (arr1[i] != arr2[i]) { return false; }
    }
    return true;
    /**
     * Runtime: 72 ms, faster than 96.86% of JavaScript online submissions for Leaf-Similar Trees.
     * Memory Usage: 40.2 MB, less than 75.29% of JavaScript online submissions for Leaf-Similar Trees.
     */
};
/**
 * Example 1:
 * Input:
 * root1 = [3,5,1,6,2,9,8,null,null,7,4],
 * root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
 * Output: true
 *
 * Example 2:
 * Input: root1 = [1], root2 = [1]
 * Output: true
 *
 * Example 3:
 * Input: root1 = [1], root2 = [2]
 * Output: false
 *
 * Example 4:
 * Input: root1 = [1,2], root2 = [2,2]
 * Output: true
 *
 * Example 5:
 * Input: root1 = [1,2,3], root2 = [1,3,2]
 * Output: false
 */