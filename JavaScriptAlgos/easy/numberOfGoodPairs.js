/**1512. Number of Good Pairs
 * Given an array of integers nums.
 * 
 * A pair (i,j) is called good if nums[i] == nums[j] and i < j.
 * 
 * Return the number of good pairs.
 * 
 * Example 1:
 * Input: nums = [1,2,3,1,1,3]
 * Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
 * 
 * Example 2:
 * Input: nums = [1,1,1,1]
 * Output: 6
 * Explanation: Each pair in the array are good.
 * 
 * Example 3:
 * Input: nums = [1,2,3]
 * Output: 0
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let count = 0, len = nums.length;
    for (let i = 0; i < len; i++) {
        let nextInd = nums.slice(i + 1, len);
        let j = nextInd.indexOf(nums[i]);
        // console.log(j);
        while (j != -1) {
            // pairs.push([i,]);
            count++;
            // console.log(pairs);
            nextInd = nextInd.slice(j + 1, nextInd.length);
            j = nextInd.indexOf(nums[i]);
        }
    }
    return count;
};
/**
 * Runtime: 104 ms, faster than 20.11% of JavaScript online submissions for Number of Good Pairs.
 * Memory Usage: 37.7 MB, less than 5.15% of JavaScript online submissions for Number of Good Pairs.
 */
/**tags for late look up
 * nestedForWhile
 */