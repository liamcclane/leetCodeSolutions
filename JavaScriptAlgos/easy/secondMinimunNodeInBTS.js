const TreeNode = require('./../dataStructures/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**671. Second Minimum Node In a Binary Tree
 * Given a non-empty special binary tree consisting of 
 * nodes with the non-negative value, where each node 
 * in this tree has exactly two or zero sub-node. If 
 * the node has two sub-nodes, then this node's value 
 * is the smaller value among its two sub-nodes. More 
 * formally, the property root.val = min(root.left.val, 
 * root.right.val) always holds.
 * 
 * Given such a binary tree, you need to output the 
 * second minimum value in the set made of all the 
 * nodes' value in the whole tree.
 * 
 * If no such second minimum value exists, output -1 instead.
 * 
 * Example 1:
 * 
 * Input: 
 *     2
 *    / \
 *   2   5
 *      / \
 *     5   7
 * 
 * Output: 5
 * Explanation: The smallest value is 2, the second smallest value is 5.
 *  
 * 
 * Example 2:
 * 
 * Input: 
 *     2
 *    / \
 *   2   2
 * 
 * Output: -1
 * Explanation: The smallest value is 2, but there isn't any second smallest value.
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {

    const findSmallest = (node) => {
        // go as left as you can
        if (node.left && node.left.val < node.val) {
            return findSmallest(node.left);
        }
        return node.val;
    }


    const secondSmallest = (node) => {
        // go as left as you can, then one right
        // so we need to sit two nodes away from the bottom
        let currentVal = node.val;

        // if the left exists, and is a left
        if (node.left && (!(node.left.left) && !(node.left.right))) {
            if(node.right) {
                return node.right.val;
            } else  {
                return node.val;
            }
        }

        // if the left exists and the left beyond exists
        // go left
        if (node.left && node.left.left) {
            secondSmallest(node.left);
        }

        // since I check for existance before recursivly calling, this 
        // case will only ever happen during the while loop 
        // refactoring, looking for new secondSmallest with the .right attribute
        if (!node) { return -1; }

    }

    let min = findSmallest(root);
    let secondMin = secondSmallest(root);
    let runner = root;

    console.log("before while");
    console.log(min, " min");
    console.log(secondMin, " 2nd min");

    while (secondMin == min && runner) {
        console.log(`\t`, "inside while");
        runner = runner.right;
        console.log(`\t`, runner.val, "runner.val line 57")
        secondMin = secondSmallest(runner);
        console.log(`\t`, secondMin, " 2nd min");
    }
    if (!(secondMin)) {
        console.log("inside secondMin existance conditional");
        secondMin = -1;
    }

    return secondMin;
    /**
     * test case failed
     * [5,8,5]
     * but I don't understand why there would be an 8 to the left of our root node 5...
     */
};

/** Example 1:
 *
 * Input:
 *     2
 *    / \
 *   2   5
 *      / \
 *     5   7
 *
 * Output: 5
 * Explanation: The smallest value is 2, the second smallest value is 5.
 *
 */
const ex1 = new TreeNode(2);
ex1.left = new TreeNode(2);
ex1.right = new TreeNode(5);

ex1.right.left = new TreeNode(5);
ex1.right.right = new TreeNode(7);
// console.log(findSecondMinimumValue(ex1), " ANSWER -> 5");

/** Example 2:
 *
 * Input:
 *     2
 *    / \
 *   2   2
 *
 * Output: -1
 */
const ex2 = new TreeNode(2);
ex2.left = new TreeNode(2);
ex2.right = new TreeNode(2);
// console.log(findSecondMinimumValue(ex2) , " ANSWER -> -1");

/**
 * test case failed
 * [5,8,5]
 * but I don't understand why there would be an 8 to the left of our root node 5...
 */
const ex3 =  new TreeNode(5);
ex3.left = new TreeNode(8);
ex3.right = new TreeNode(5);
console.log(findSecondMinimumValue(ex3), " ANSWER -> 8");

/**tags to look up later
 * unfinished
 */