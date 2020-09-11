/**152. Maximum Product Subarray
 * Given an integer array nums, find the contiguous subarray within an array 
 * (containing at least one number) which has the largest product.
 * 
 * Example 1:
 * Input: [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 * 
 * Example 2:
 * Input: [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let currMax = nums[0], currMin = nums[0],
    prevMax = nums[0], prevMin = nums[0],
        ans = nums[0];
        for (let i = 1; i < nums.length; i++) {
        currMax = Math.max(nums[i], nums[i] * prevMin, nums[i] * prevMax);
        currMin = Math.min(nums[i], nums[i] * prevMin, nums[i] * prevMax);
        ans = Math.max(ans, currMax);
        prevMax = currMax;
        prevMin = currMin;
    }
    return ans;
    /**
     * Runtime: 68 ms, faster than 98.99% of JavaScript online submissions for Maximum Product Subarray.
     * Memory Usage: 37.4 MB, less than 33.42% of JavaScript online submissions for Maximum Product Subarray.
     */
};
// https://www.youtube.com/watch?v=vtJvbRlHqTA
/**tags for later look up
 * tutorialHelp
 * SeptemberChallenge
 */