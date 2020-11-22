/**414. Third Maximum Number
 * Given a non-empty array of integers, return the third maximum number in this array. 
 * If it does not exist, return the maximum number. The time complexity must be in O(n).
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max1, max2, max3;
    for(let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if(val === max1 || val === max2 || val === max3 ) {
            continue;
        }
        if(max1 === undefined || val > max1) {
            max3 = max2;
            max2 = max1;
            max1 = val;
        } else if (max2 === undefined || val > max2) {
            max3 = max2;
            max2 = val;
        } else if (max3 === undefined || val > max3) {
            max3 = val;
        }
    }
    // console.log(max1, "max1");
    // console.log(max2, "max2");
    // console.log(max3, "max3");
    return max3 === undefined ? max1 : max3;
    /**
     * Runtime: 84 ms, faster than 52.77% of JavaScript online submissions for Third Maximum Number.
     * Memory Usage: 37.8 MB, less than 96.98% of JavaScript online submissions for Third Maximum Number.
     */
};
/**
 * Example 1:
 * Input: [3, 2, 1]
 * Output: 1
 * Explanation: The third maximum is 1.
 * 
 * Example 2:
 * Input: [1, 2]
 * Output: 2
 * Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
 * 
 * Example 3:
 * Input: [2, 2, 3, 1]
 * Output: 1
 * Explanation: Note that the third maximum here means the third maximum distinct number.
 * Both numbers with value 2 are both considered as second maximum.
*/