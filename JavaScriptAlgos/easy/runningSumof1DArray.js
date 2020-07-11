/**1480. Running Sum of 1d Array
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * 
 * Return the running sum of nums.
 * 
 *  
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 * Example 2:
 * 
 * Input: nums = [1,1,1,1,1]
 * Output: [1,2,3,4,5]
 * Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
 * Example 3:
 * 
 * Input: nums = [3,1,2,10,1]
 * Output: [3,4,6,16,17]
 * /
/** Running Sum
 * this function returns an array of the running 
 * sums going down the array
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let runSum = 0;
    return nums.map(ele => runSum += ele);
};
/**Runtime: 68 ms, faster than 88.61% of JavaScript online submissions for Running Sum of 1d Array.
 * Memory Usage: 35.9 MB, less than 100.00% of JavaScript online submissions for Running Sum of 1d Array.
 */
