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
    let curr = 0; 

}
moveZeros([0, 1, 0, 3, 12]);
// moveZeros([1]);
// moveZeros([0, 1]);





var moveZeroesReturningCopy = function (nums) {

    let arr = [];

    for (let val of nums) {
        if (val != 0) arr.push(val);
    }
    let len = arr.length;
    for (let i = len; i < nums.length; i++) {
        arr.push(0);
    }
    return arr;
};

// console.log(moveZeroesReturningCopy([1,0,3,13,0,0,5]))