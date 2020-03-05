/**
 * Runtime: 60 ms, faster than 56.49% of JavaScript online submissions for First Missing Positive.
 * Memory Usage: 35.7 MB, less than 16.67% of JavaScript online submissions for First Missing Positive.
 */
/**
 * FIRST MISSING POSITIVE: 41
 * Given an unsorted integer array, find the smallest missing positive integer.
 * 
 * Example 1:
 * 
 * Input: [1,2,0]
 * Output: 3
 * Example 2:
 * 
 * Input: [3,4,-1,1]
 * Output: 2
 * Example 3:
 * 
 * Input: [7,8,9,11,12]
 * Output: 1
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    if(nums.length === 0) return 1;
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] < 0 ){
            nums = nums.slice(0,i).concat(nums.slice(i+1,nums.length));
            i = -1;
        }
        if(nums[i] > max ) max = nums[i];
    }
    if(nums.length === 0) return 1;
    console.log(`end of loop max is: ${max}`);
    for(let i = 1; i <= max; i++){
        if(!(nums.includes(i))) return i
    }
    return max + 1; 
};

let ex1 = [1, 2, 0]; //2:
let ex2 = [3, 4, -1, 1]; //2
let ex3 = [7, 8, 9, 11, 12] // 1
let ex4 = [-7, -9, -11, 12] // 1

// console.log(firstMissingPositive(ex1));
// console.log();
// console.log(firstMissingPositive(ex2));
// console.log();
// console.log(firstMissingPositive(ex3));
// console.log();
console.log(firstMissingPositive([0,1,2,3,5,-55,-88,-97,-1,4]));