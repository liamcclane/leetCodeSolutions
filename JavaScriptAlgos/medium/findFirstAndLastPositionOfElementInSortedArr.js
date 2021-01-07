/**34. Find First and Last Position of Element in Sorted Array
 * Given an array of integers nums sorted in ascending order, 
 * find the starting and ending position of a given target value.
 * 
 * If target is not found in the array, return [-1, -1].
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let ans = [], len = nums.length;

    // edge cases
    if (nums.length === 0 ||
        nums[0] > target ||
        nums[len - 1] < target) { return [-1, -1]; }

    //edge cases
    if (nums.length === 1) {
        if (nums[0] === target) { return [0, 0]; }
        else { return [-1, -1]; }
    }

    for (let i = 0; i < len; i++) {
        let curr = nums[i];
        if (ans.length === 0) {
            if (curr === target) {
                ans.push(i);
                ans.push(i);
            }
        }
        if (ans.length === 2 && curr === target) {
            ans[1] = i;
        }
        if (ans.length === 2 && curr !== target) {
            return ans;
        }
        if (curr > target) {
            return [-1, -1];
        }
    }
    return ans;
    /**
     * Runtime: 80 ms, faster than 66.34% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
     * Memory Usage: 40 MB, less than 23.84% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
     */
};
/**
 * Example 1:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 *
 * Example 2:
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 *
 * Example 3:
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 *
 * Example 4:
 * Input: nums = [2,2], target = 0
 * Output: [0,1]
 *
 * Example 5:
 * Input: nums = [1], target = 0
 * Output: [0,0]
 */