/**747. Largest Number At Least Twice of Others
 * In a given integer array nums, there is always exactly one largest element.
 * 
 * Find whether the largest element in the array is at least twice as 
 * much as every other number in the array.
 * 
 * If it is, return the index of the largest element, otherwise return -1.
 * 
 * Example 1:
 * 
 * Input: nums = [3, 6, 1, 0]
 * Output: 1
 * Explanation: 6 is the largest integer, and for every other number in the array x,
 * 6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
 *  
 * 
 * Example 2:
 * 
 * Input: nums = [1, 2, 3, 4]
 * Output: -1
 * Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let max = Math.max(...nums);
    for(let val of nums) {
        if(val === max) {continue;}
        if(val*2 > max) {return -1;}
    }
    return nums.indexOf(max);
};
/**
 * Runtime: 72 ms, faster than 81.71% of JavaScript online submissions for Largest Number At Least Twice of Others.
 * Memory Usage: 37.1 MB, less than 15.93% of JavaScript online submissions for Largest Number At Least Twice of Others.
 */