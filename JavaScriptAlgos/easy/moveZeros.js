/**283. Move Zeroes
 * Given an array nums, write a function to move all 0's to the end
 * of it while maintaining the relative order of the non-zero elements.
 * 
 * Example:
 * 
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * Note:
 * 
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 * @param {number[]} nums
 * @return {*} Do not return anything, modify nums in-place instead.
 */
var moveZeros = nums => {
    let count = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] === 0 && nums[j] != 0) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }
    nums.map(ele => { if (ele === 0) { count++; } });
    for (let k = 0; k < count; k++) {
        for (let inner = 0; inner < (nums.length - 1); inner++) {
            [nums[inner], nums[inner + 1]] = [nums[inner + 1], nums[inner]];
        }
    }
    /**
     * Runtime: 184 ms, faster than 5.30% of JavaScript online submissions for Move Zeroes.
     * Memory Usage: 39 MB, less than 7.46% of JavaScript online submissions for Move Zeroes.
     */
}

const move = (nums) => {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count++;
            for (let j = i; j < (nums.length - 1); j++) {
                // console.log("in here");
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
    console.log(nums);
    // move([1]);
    // move([0, 1, 0, 3, 12]);
    // move([0, 0, 1]);
    // almost non working edge case line 51
}

/**tags for later look up
 * nestedForLoops
 * refactorMe
 */