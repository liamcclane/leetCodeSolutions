/**1. Two Sum
 * Given an array of integers nums and and integer target, return the indices of the 
 * two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and 
 * you may not use the same element twice.
 * 
 * You can return the answer in any order.
 * 
 * Example 1:
 * 
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Output: Because nums[0] + nums[1] == 9, we return [0, 1]
 * Example 2:
 * 
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * Example 3:
 * 
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let dict = {};
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i], lookingFor = target - val;
        if(lookingFor in dict) {
            return [dict[lookingFor], i];
        } else {
            dict[val] = i;
        }
    }
    /**
     * Runtime: 84 ms, faster than 66.48% of JavaScript online submissions for Two Sum.
     * Memory Usage: 41 MB, less than 5.71% of JavaScript online submissions for Two Sum.
     */
};

const NSquared = () => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
    /**
     * Runtime: 108 ms
     * Memory Usage: 34.7 MB
     * Your runtime beats 52.66 % of javascript submissions.
     * Your memory usage beats 95.81 % of javascript submissions.
     */
}



/**tags for later look up
 * refactorMe
 * nestedForLoops
 */