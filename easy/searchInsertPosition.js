/**
 * Given a sorted array and a target value, return the index if the target is found. 
 * If not, return the index where it would be if it were inserted in order.
 * 
 * You may assume no duplicates in the array.
 * 
 * Example 1:
 * 
 * Input: [1,3,5,6], 5
 * Output: 2
 * Example 2:
 * 
 * Input: [1,3,5,6], 2
 * Output: 1
 * Example 3:
 * 
 * Input: [1,3,5,6], 7
 * Output: 4
 * Example 4:
 * 
 * Input: [1,3,5,6], 0
 * Output: 0
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let ind = 0;
    if (nums.includes(target)) {
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] == target) {
                ind = i;
            }
        }
    } else {
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] < target) {
                ind = i+1;
            }
        }
    }
    return ind;
};
let ex1 = [1,3,5,6], tar1 = 5; //2

let ex2 = [1,3,5,6], tar2 = 2; //1

let ex3 = [1,3,5,6], tar3 = 7; //4

let ex4 = [1,3,5,6], tar4 = 0; //0

// console.log(searchInsert(ex1,tar1));
// console.log(searchInsert(ex4,tar4));
/**
 * Runtime: 52 ms, faster than 82.65% of JavaScript online submissions for Search Insert Position.
 * Memory Usage: 34.5 MB, less than 37.50% of JavaScript online submissions for Search Insert Position.
 */