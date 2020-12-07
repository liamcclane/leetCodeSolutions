const TreeNode = require('./../dataStructures/TreeNode');
const TreeNode = require('./../dataStructures/TreeNode');
/**897. Increasing Order Search Tree
 * Given the root of a binary search tree, rearrange the tree 
 * in in-order so that the leftmost node in the tree is now the 
 * root of the tree, and every node has no left child and only one right child.
 * 
 * Example 1:
 * Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
 * Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
 * 
 * Example 2:
 * Input: root = [5,1,7]
 * Output: [1,null,5,null,7]
 *  
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const increasingBST = (root) => {
    // edge case null
    if (root === null) { return root; }
    // edge case or a child node 
    else if (root.left === null && root.right === null) {
        return root;
    }

    let rntTree, runner;

    /**Helper
     * helper function called for recursion,
     * and used the global variables rntTreen and runner
     * to add the rntTree
     * @param {TreeNode} node given
     */
    const helper = (node) => {

        // null case
        if (node === null) { return; }
        
        // since we are not working with null node
        // we can create a new node to be added to rntTree appropriately 
        let newestNode = new TreeNode(node.val, null, null);

        // child node
        // base case
        if (node.left === null && node.right === null) {
            // if this is first time we are adding into the rntTree
            // we should set it as the head then create a runner 
            // to move down the .right attribute
            if (rntTree === undefined) {
                rntTree = newestNode;
                runner = rntTree;
            } else {
                // if the head is already defined
                // runner will be sitting on the node who needs a 
                // new .right TreeNode attribute to be overridden
                runner.right = newestNode;
                // then move the runner again
                runner = runner.right;
            }
            // return out of this recursive call
            return;
        }
        // if you can go left
        if (node.left != null) {
            helper(node.left);
        }
        // do stuff in between left and right traversal to 
        // get information out of the tree 
        // IN-ORDER
        // same logic as inside the child base case
        if (rntTree === undefined) {
            rntTree = newestNode;
            runner = rntTree;
        } else {
            runner.right = newestNode;
            runner = runner.right;
        }
        // then go right 
        if (node.right != null) {
            helper(node.right);
        }
    }

    // call the recursive help method
    helper(root);
    return rntTree;
    /**
     * Runtime: 84 ms, faster than 26.89% of JavaScript online submissions for Increasing Order Search Tree.
     * Memory Usage: 38.3 MB, less than 100.00% of JavaScript online submissions for Increasing Order Search Tree.
     */
}
/**
 * my first attempt
 * @param {TreeNode} root 
 * @returns {TreeNode}
 */
var firstAttempt = function (root) {

    if (root === null) { return root; }

    let rntTree;
    /**Helper 
     * this helper function traverses the given tree
     * and returns an array of the values in order
     * @param {TreeNode} node 
     * @param {number[]} arr 
     */
    const helper = (node, arr = []) => {

        // null
        if (node === null) { return; }

        // child node
        // base case
        if (node.left === null && node.right === null) {
            arr.push(node.val);
            return;
        }
        // if you can go left
        if (node.left != null) {
            helper(node.left, arr);
        }
        arr.push(node.val);

        // then go right 
        if (node.right != null) {
            helper(node.right, arr);
        }
        return arr;
    }

    let nums = helper(root);
    if (nums === undefined || nums.length === 0) { return root; }
    rntTree = new TreeNode(nums[0], null, null);
    let runner = rntTree;

    for (let i = 1; i < nums.length; i++) {
        runner.right = new TreeNode(nums[i], null, null);
        runner = runner.right;
    }

    return rntTree;
    /**
     * Runtime: 72 ms, faster than 91.51% of JavaScript online submissions for Increasing Order Search Tree.
     * Memory Usage: 39.1 MB, less than 57.55% of JavaScript online submissions for Increasing Order Search Tree.
     */
};

