/**81. Search in Rotated Sorted Array II
 * Suppose an array sorted in ascending order 
 * is rotated at some pivot unknown to you beforehand.
 * 
 * (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).
 * 
 * You are given a target value to search. 
 * If found in the array return true, otherwise return false.
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {

};

const initialSearchTry = (nums, target) => {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) { return true; }
    }
    return false;
    /**
     * Runtime: 84 ms, faster than 57.18% of JavaScript online submissions for Search in Rotated Sorted Array II.
     * Memory Usage: 39 MB, less than 79.31% of JavaScript online submissions for Search in Rotated Sorted Array II.
     */
}
/**tags for later look up
 * refactorMe
 */

/**Examples
 * Example 1:
 *
 * Input: nums = [2,5,6,0,0,1,2], target = 0
 * Output: true
 *
 * Example 2:
 *
 * Input: nums = [2,5,6,0,0,1,2], target = 3
 * Output: false
 */