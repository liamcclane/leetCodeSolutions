/**100. Same Tree
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * 
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {

    // if one of the list are empty and not the other
    if (!q ^ !p) { return false; }

    /**
     * recursive helper function that passes in the node 
     * and check for likeness
     * @param {TreeNode} nodeA 
     * @param {TreeNode} nodeB 
     * @returns {boolean}
     */
    const helper = (nodeA, nodeB) => {

        if (!nodeA ^ !nodeB) {
            // if one exists, but the other doesn't 
            return false;
        } else if (!nodeA && !nodeB) {
            // base case of at both leaf nodes
            return true;
        }

        // if at anytime the values don't match return false
        if (nodeA.val != nodeB.val) {
            return false;
        }

        // if it is a leaf node
        // and we have passed the mismatch val check above, we can return true
        if (!nodeA.right && !nodeA.left &&
            !nodeB.right && !nodeB.left) {
            return true;
        }

        // else continue to recurse
        return helper(nodeA.right, nodeB.right) && helper(nodeA.left, nodeB.left);

    }

    return helper(q, p);
    /**
     * Runtime: 72 ms, faster than 93.12% of JavaScript online submissions for Same Tree.
     * Memory Usage: 38.8 MB, less than 77.87% of JavaScript online submissions for Same Tree.
     */
};