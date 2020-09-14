/**198. House Robber
 * You are a professional robber planning to rob houses along a street. 
 * Each house has a certain amount of money stashed, the only constraint 
 * stopping you from robbing each of them is that adjacent houses have 
 * security system connected and it will automatically contact the police 
 * if two adjacent houses were broken into on the same night.
 * 
 * Given a list of non-negative integers representing the amount of money 
 * of each house, determine the maximum amount of money you can rob tonight 
 * without alerting the police.
 *  
 * 
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 *              Total amount you can rob = 1 + 3 = 4.
 * 
 * Example 2:
 * Input: nums = [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
 *              Total amount you can rob = 2 + 9 + 1 = 12.
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 0) { return 0; }
    else if (nums.length == 1) { return nums[0]; }
    else if (nums.length == 2) { return Math.max(...nums); }
    else if (nums.length == 3) { return Math.max((nums[0] + nums[2]), nums[1]); }

    let len = nums.length, moneyBag = [];

    moneyBag.push(nums[0]);
    moneyBag.push(Math.max(nums[0], nums[1]));

    // nums  [ 25, 0, 10, 35]
    // mB    [ 25,25, 35, 60]
    for (let i = 2; i < len; i++) {
        moneyBag.push(Math.max(nums[i] + moneyBag[i - 2], moneyBag[i - 1]));
    }
    return moneyBag[len - 1];
    /**
     * Runtime: 76 ms, faster than 60.10% of JavaScript online submissions for House Robber.
     * Memory Usage: 36.8 MB, less than 26.23% of JavaScript online submissions for House Robber.
     */
};
console.log(rob([2, 7, 9, 3, 1]));

/**
 * dynamicProgramming
 * SeptemberChallenge
 */