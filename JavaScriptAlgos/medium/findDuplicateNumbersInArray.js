/**Find All Duplicates in an Array 442
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), 
 * some elements appear twice and others appear once.
 * 
 * Find all the elements that appear twice in this array.
 * 
 * Could you do it without extra space and in O(n) runtime?
 * 
 * Example:
 * Input:
 * [4,3,2,7,8,2,3,1]
 * 
 * Output:
 * [2,3]
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = nums => {
    let dict = {};
    let ans = [];
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] in dict && dict[nums[i]] === 1) {
            ans.push(nums[i]);
        } else if (nums[i] in dict) {
            dict[nums[i]]++;
        } else {
            dict[nums[i]] = 1;
        }
    }
    return ans;
    /**
     * Runtime: 128 ms, faster than 64.28% of JavaScript online submissions for Find All Duplicates in an Array.
     * Memory Usage: 48.2 MB, less than 28.70% of JavaScript online submissions for Find All Duplicates in an Array.
     */
}


var oldFindDuplicates = function (nums) {
    let ans = [], len = nums.length;

    for (let i = 0; i < len; i++) {
        if (nums.indexOf(nums[i], i + 1) != -1 && !ans.includes(nums[i])) {
            ans.push(nums[i]);
        }
    }
    return ans;
    /**
     * Runtime: 4608 ms, faster than 5.02% of JavaScript online submissions for Find All Duplicates in an Array.
     * Memory Usage: 44.8 MB, less than 81.80% of JavaScript online submissions for Find All Duplicates in an Array.
     */
};
