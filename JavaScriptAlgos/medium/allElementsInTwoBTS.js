/**1305. All Elements in Two Binary Search Trees
 * Given two binary search trees root1 and root2.
 * 
 * Return a list containing all the integers 
 * from both trees sorted in ascending order.
 * 
 * Example 1:
 * Input: root1 = [2,1,4], root2 = [1,0,3]
 * Output: [0,1,1,2,3,4]
 * 
 * Example 2:
 * Input: root1 = [0,-10,10], root2 = [5,1,7,0,2]
 * Output: [-10,0,0,1,2,5,7,10]
 * 
 * Example 3:
 * Input: root1 = [], root2 = [5,1,7,0,2]
 * Output: [0,1,2,5,7]
 * 
 * Example 4:
 * Input: root1 = [0,-10,10], root2 = []
 * Output: [-10,0,10]
 * 
 * Example 5:
 * Input: root1 = [1,null,8], root2 = [8,1]
 * Output: [1,1,8,8]
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const TreeNode = require('./../dataStructures/TreeNode');
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
const getAllElements = (root1, root2) => {
    /**In order BTS
     * @param {TreeNode} node
     * @returns {number[]} in order 
     */
    const treeTraversal = (node) => {
        let arr = [];
        /**recursive helper
         * @param {TreeNode} n 
         */
        const helper = (n) => {
            if (n === null) {
                return;
            }
            if (n.left) { helper(n.left); }
            arr.push(n.val);
            if (n.right) { helper(n.right); }
            return;
        }
        helper(node);
        return arr;
    }
    /**Merge
     * takes two sorted arrays and merges into one
     * @param {*} nums1 
     * @param {*} m 
     * @param {*} nums2 
     * @param {*} n 
     */
    const merge = (nums1, m, nums2, n) => {
        let p1 = 0, p2 = 0, ans = [];
        while (p1 < m && p2 < n) {
            if (nums1[p1] < nums2[p2]) {
                ans.push(nums1[p1]);
                p1++;
            } else if (nums1[p1] > nums2[p2]) {
                ans.push(nums2[p2]);
                p2++;
            } else {
                ans.push(nums1[p1]);
                ans.push(nums2[p2]);
                p1++;
                p2++;
            }
        }
        if (p1 == m) {
            for (; p2 < n; p2++) {
                ans.push(nums2[p2]);
            }
        } else if (p2 === n) {
            for (; p1 < m; p1++) {
                ans.push(nums1[p1]);
            }
        }
        return ans;
    }
    let arr1 = treeTraversal(root1), arr2 = treeTraversal(root2);
    return merge(arr1, arr1.length, arr2, arr2.length);
    /**
     * Runtime: 192 ms, faster than 76.92% of JavaScript online submissions for All Elements in Two Binary Search Trees.
     * Memory Usage: 48.6 MB, less than 54.94% of JavaScript online submissions for All Elements in Two Binary Search Trees.
     */
}
const getAllElementsSort = function(root1, root2) {
    const treeTraversal = (node) => {
        let arr = [];
        const helper = (n) => {
            if (n === null) {
                return;
            }
            if (n.left) { helper(n.left); }
            arr.push(n.val);
            if (n.right) { helper(n.right); }
            return;
        }
        helper(node);
        return arr;
    }
    return treeTraversal(root1).concat(treeTraversal(root2)).sort((a,b) => a - b);
    /**
     * Runtime: 180 ms, faster than 94.51% of JavaScript online submissions for All Elements in Two Binary Search Trees.
     * Memory Usage: 48.6 MB, less than 53.29% of JavaScript online submissions for All Elements in Two Binary Search Trees.
     */
};
var again = function (root1, root2) {
    const treeTraversal = (node) => {
        let arr = [];
        const helper = (n) => {
            if (n === null) {
                return;
            }
            if (n.left) { helper(n.left); }
            arr.push(n.val);
            if (n.right) { helper(n.right); }
            return;
        }
        return arr;
    }

    const merge = function (nums1, m, nums2, n) {
        let result = [],
            mPointer = 0,
            nPointer = 0;
        while (result.length < n + m) {
            if (mPointer == m || nPointer == n) {
                if (mPointer == m) {
                    for (let i = 0; i < nums2.slice(nPointer, n).length; i++) {
                        result.push(nums2.slice(nPointer, n)[i]);
                    }
                }
                if (nPointer == n) {
                    for (let i = 0; i < nums1.slice(mPointer, m).length; i++) {
                        result.push(nums1.slice(mPointer, m)[i]);
                    }
                }
            } else {
                if (nums1[mPointer] > nums2[nPointer]) {
                    result.push(nums2[nPointer]);
                    nPointer++;
                } else {
                    result.push(nums1[mPointer]);
                    mPointer++;
                }
            }
        }
        return result;
    };
    let arr1 = treeTraversal(root1), arr2 = treeTraversal(root2);
    return merge(arr1, arr1.length, arr2, arr2.length);
    /**
     * Runtime: 192 ms, faster than 76.92% of JavaScript online submissions for All Elements in Two Binary Search Trees.
     * Memory Usage: 48.6 MB, less than 54.94% of JavaScript online submissions for All Elements in Two Binary Search Trees.
     */
};
console.log([1, 2, 2, 3, 5, 6]);