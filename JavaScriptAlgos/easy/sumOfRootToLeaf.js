const TreeNode = require('./../dataStructures/TreeNode');
// const BTS = require('./../dataStructures/BTS'); // we don't want it to be binary
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**1022. Sum of Root To Leaf Binary Numbers
 * Given a binary tree, each node has value 0 or 1.  
 * Each root-to-leaf path represents a binary number 
 * starting with the most significant bit.  For example, 
 * if the path is 0 -> 1 -> 1 -> 0 -> 1, then this 
 * could represent 01101 in binary, which is 13.
 * 
 * For all leaves in the tree, consider the numbers represented 
 * by the path from the root to that leaf.
 * 
 *       1
 *       ^   
 *     0     1
 *     ^     ^
 *   0  1   0  1
 * Return the sum of these numbers.
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
    let s = "", strArr = [], sum = 0;
    const treeTraversal = (node, str, arr) => {
        str += node.val.toString();
        if (node.left == undefined &&
            node.right == undefined) {
            arr.push(str);
            return;
        }
        if (node.left) {
            treeTraversal(node.left, str, arr);
        }
        if (node.right) {
            treeTraversal(node.right, str, arr);
        }
    }

    const fromStrToBinary = (strBin) => {
        let num = 0, len = strBin.length;
        for (let i = len - 1, exp = 0;
            i >= 0;
            i--, exp++) {
            if (strBin[i] == '1') {
                // console.log(Math.pow(2, exp), " adding to ", sum, ' while exp is ', exp);
                num += Math.pow(2, exp);
            }
        }
        console.log(strBin, ' = ', num);
        return num;
    }
    treeTraversal(root, s, strArr);
    // console.log(strArr);
    for (let val of strArr) {
        sum += fromStrToBinary(val);
    }
    return sum;
};
/**
 * Runtime: 80 ms, faster than 70.30% of JavaScript online submissions for Sum of Root To Leaf Binary Numbers.
 * Memory Usage: 39 MB, less than 18.18% of JavaScript online submissions for Sum of Root To Leaf Binary Numbers.
 */

let top = new TreeNode(1);
top.left = new TreeNode(0);
top.left.left = new TreeNode(0);
top.left.right = new TreeNode(1);

top.right = new TreeNode(1);
top.right.left = new TreeNode(0);
top.right.right = new TreeNode(1);

// console.log(sumRootToLeaf(top));

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf2 = function (root) {

    const treeTraversal = (node) => {
        if(!node.left && !node.right) {
            return [node.val.toString()];
        }
        let arr = [];
        const helper = (node, str = "") => {
            str += node.val.toString();
            if (!node.left && !node.right) {
                return str;
            }
            if (node.left) {
                let a = helper(node.left, str);
                if(a != null) {
                    arr.push(a);
                }
            }
            if (node.right) {
                let b = helper(node.right, str);
                if(b != null) {
                    arr.push(b);
                }
            } 
            return null;
        }
        helper(node);
        return arr;
    }
    let arrOfBinary = treeTraversal(root), sum = 0;
    for(let i = 0; i < arrOfBinary.length; i++) {
        sum += parseInt(arrOfBinary[i], 2);
    }
    console.log(sum);

    return sum;
};
console.log(sumRootToLeaf2(top));

/**tags for later look up
 * recursion
 */