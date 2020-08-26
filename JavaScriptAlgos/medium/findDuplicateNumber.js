/**
 * FIND DUPLICATE NUMBER : 287
 * Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), 
 * prove that at least one duplicate number must exist. Assume that there is only 
 * one duplicate number, find the duplicate one.
 * 
 * Example 1:
 * 
 * Input: [1,3,4,2,2]
 * Output: 2
 * Example 2:
 * 
 * Input: [3,1,3,4,2]
 * Output: 3
 * 
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = nums => {
    let dict = {};
    for (let val of nums) {
        if (val in dict) {
            return val;
        } else {
            dict[val] = 1;
        }
    }
    /**
     * Runtime: 80 ms, faster than 65.87% of JavaScript online submissions for Find the Duplicate Number.
     * Memory Usage: 40.1 MB, less than 8.14% of JavaScript online submissions for Find the Duplicate Number.
     */
}

var oldFindDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let sliced = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
        if (sliced.includes(nums[i])) return nums[i];
    }
    /**
     * Runtime: 1100 ms, faster than 5.04% of JavaScript online submissions for Find the Duplicate Number.
     * Memory Usage: 57.1 MB, less than 5.05% of JavaScript online submissions for Find the Duplicate Number.
     */
};


const optimize = nums => {
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i], i + 1) != -1) {
            return nums[i];
        }
    }
    /**
     * Runtime: 372 ms, faster than 10.52% of JavaScript online submissions for Find the Duplicate Number.
     * Memory Usage: 37.5 MB, less than 52.79% of JavaScript online submissions for Find the Duplicate Number.
     */
}
