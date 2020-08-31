/**136. Single Number
 * Given a non-empty array of integers, every element appears twice except for one. 
 * Find that single one.
 * 
 * Note:
 * 
 * Your algorithm should have a linear runtime complexity. Could you implement 
 * it without using extra memory?
 * 
 * Example 1:
 * 
 * Input: [2,2,1]
 * Output: 1
 * Example 2:
 * 
 * Input: [4,1,2,1,2]
 * Output: 4
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let numsExcluding = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
        if (numsExcluding.includes(nums[i])) {
        } else {
            return nums[i];
        }
    }
    /**
     * Runtime: 1676 ms
     * Memory Usage: 50.2 MB
     */
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumberAgain = function (nums) {
    let dict = {};
    for (let val of nums) {
        if (val in dict) {
            dict[val]++;
        } else {
            dict[val] = 1;
        }
    }
    for (let key in dict) {
        if (dict[key] == 1) {
            return key;
        }
    }
    /**
     * Runtime: 140 ms, faster than 19.07% of JavaScript online submissions for Single Number.
     * Memory Usage: 40.1 MB, less than 34.47% of JavaScript online submissions for Single Number.
     */
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumberAgainAgain = function (nums) {
    let dict = {};
    for (let val of nums) {
        if (val in dict) {
            delete dict[val];
        } else {
            dict[val] = 1;
        }
    }
    for (let key in dict) {
        return key;
    }
    /**
     * Runtime: 116 ms, faster than 27.17% of JavaScript online submissions for Single Number.
     * Memory Usage: 40.7 MB, less than 15.60% of JavaScript online submissions for Single Number.
     */
};




let ex = [2, 2, 1];
let ex2 = [2, 3, 3, 5, 2];
let ex3a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let ex3b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(singleNumber(ex));

/**tags for later look up
 * multipleSubmissions
 */