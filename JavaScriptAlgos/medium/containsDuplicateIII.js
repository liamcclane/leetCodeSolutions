/**Contains Duplicate III - 220 
 * Given an array of integers, find out whether there are two distinct indices i and j
 * in the array such that the absolute difference 
 * between nums[i] and nums[j] is at most t 
 * and the absolute difference between i and j is at most k.
 * 
 * Does there exits i,j => abs(nums[i] - nums[j]) <= t AND abs(i-j) <=k
 * 
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,3,1], k = 3, t = 0
 * Output: true
 * 
 * Example 2:
 * 
 * Input: nums = [1,0,1,1], k = 1, t = 2
 * Output: true
 * 
 * Example 3:
 * 
 * Input: nums = [1,5,9,1,5,9], k = 2, t = 3
 * Output: false
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; (j < i + k + 1) && (j < nums.length); j++) {
            // console.log(`i : ${i}\t j  : ${j}`);
            // console.log(nums[i]);
            // console.log(nums[j]);
            // console.log(`nums[i] - nums[j]`);
            // console.log(Math.abs(nums[i] - nums[j]));
            if (Math.abs(nums[i] - nums[j]) <= t) {
                return true;
            }
            // console.log();
        }
    }
    return false;
};
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)); // true
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)); // false
/**
 * Runtime: 232 ms, faster than 63.95% of JavaScript online submissions for Contains Duplicate III.
 * Memory Usage: 35.2 MB, less than 50.00% of JavaScript online submissions for Contains Duplicate III.
 */
/**tags for later look up
 * SeptemberDailyChallenge
 */