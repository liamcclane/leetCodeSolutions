/**268. Missing Number
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
 * find the one that is missing from the array.
 * 
 * Example 1:
 * 
 * Input: [3,0,1]
 * Output: 2
 * Example 2:
 * 
 * Input: [9,6,4,2,3,5,7,0,1]
 * Output: 8
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for(let i = 0; i <= nums.length; i++){
        if(!(nums.includes(i))){
            return i;
        }
    }
    /**
     * Runtime: 372 ms
     * Memory Usage: 35.8 MB
     * Your runtime beats 6.24 % of javascript submissions.
     */
};
let ex = [1,0,3];
console.log(missingNumber(ex));
/**tags for later look up
 * nestedForLoops
 * refactorMe
 */