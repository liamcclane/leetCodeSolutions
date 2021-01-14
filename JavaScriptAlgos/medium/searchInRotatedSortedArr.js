/**33. Search in Rotated Sorted Array
 * You are given an integer array nums sorted in ascending order 
 * (with distinct values), and an integer target.
 * 
 * Suppose that nums is rotated at some pivot unknown to you beforehand 
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 * 
 * If target is found in the array return its index, otherwise, return -1.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) { return i; }
    }
    return -1;
    /**
     * Runtime: 84 ms, faster than 45.34% of JavaScript online submissions for Search in Rotated Sorted Array.
     * Memory Usage: 38.9 MB, less than 41.86% of JavaScript online submissions for Search in Rotated Sorted Array.7
     */
};
/**
 * Example 1:
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 *
 * Example 2:
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 *
 * Example 3:
 * Input: nums = [1], target = 0
 * Output: -1
 */