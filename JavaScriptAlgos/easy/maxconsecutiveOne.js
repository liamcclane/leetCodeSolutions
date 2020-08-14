/**485. Max Consecutive Ones
 * Given a binary array, find the maximum number of consecutive 1s in this array.
 * 
 * Example 1:
 * Input: [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s.
 *     The maximum number of consecutive 1s is 3.
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0, count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]){count++;}
        if(count > max) {max = count;}
        if (nums[i] != 1){count = 0;}
    }
    
    return max;
    
};
/**
 * Runtime: 72 ms, faster than 95.24% of JavaScript online submissions for Max Consecutive Ones.
 * Memory Usage: 39.7 MB, less than 21.71% of JavaScript online submissions for Max Consecutive Ones.
 */