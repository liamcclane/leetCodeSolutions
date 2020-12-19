const TreeNode = require('./../dataStructures/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**257. Binary Tree Paths
 * Given a binary tree, return all root-to-leaf paths.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * Input:
 * 
 *     1
 *   /   \
 *  2     3
 *   \
 *    5
 * 
 * Output: ["1->2->5", "1->3"]
 * 
 * Explanation: All root-to-leaf paths are: 1->2->5, 1->3
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {


    let answer = [];

    const helper = (node, from = "") => {

        // null edge case
        if (node === null) { return; }

        // base case
        if (node.left == null && node.right == null) {
            from += node.val + "";
            answer.push(from);
            return;
        }

        // append to the string being passed down
        from += node.val + "->";

        if (node.left) {
            helper(node.left, from);
        }

        if (node.right) {
            helper(node.right, from);
        }
    }
    helper(root);
    // console.log(answer);
    return answer;
    /**
     * Runtime: 92 ms, faster than 29.64% of JavaScript online submissions for Binary Tree Paths.
     * Memory Usage: 40.3 MB, less than 41.81% of JavaScript online submissions for Binary Tree Paths.
     */
};