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
var findDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        let sliced = nums.slice(0,i).concat(nums.slice(i+1,nums.length));
        if(sliced.includes(nums[i])) return nums[i];
    }
};
