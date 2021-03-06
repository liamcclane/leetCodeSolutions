/**674. Longest Continuous Increasing Subsequence
 * Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).
 * 
 * Example 1:
 * Input: [1,3,5,4,7]
 * Output: 3
 * Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
 * Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4. 
 * 
 * Example 2:
 * Input: [2,2,2,2,2]
 * Output: 1
 * Explanation: The longest continuous increasing subsequence is [2], its length is 1. 
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    if (nums.length == 0) return 0
    let counts = [1];
    for (let i = 1; i < nums.length; i++) {
        counts.push(counts[counts.length - 1]);
        if (nums[i - 1] < nums[i]) {
            counts[counts.length - 1]++;
        } else {
            counts[counts.length - 1] = 1;
        }
    }
    // console.log(counts);
    return Math.max(...counts);
};
/**
 * Runtime: 80 ms, faster than 36.61% of JavaScript online submissions for Longest Continuous Increasing Subsequence.
 * Memory Usage: 38.5 MB, less than 10.75% of JavaScript online submissions for Longest Continuous Increasing Subsequence.
 */
