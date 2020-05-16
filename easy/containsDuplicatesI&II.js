/**Contains Duplicates - 217
 *Given an array of integers, find if the array contains any duplicates.
 * 
 * Your function should return true if any value appears at least twice in the array, 
 * and it should return false if every element is distinct.
 * 
 * Example 1:
 * 
 * Input: [1,2,3,1]
 * Output: true
 * Example 2:
 * 
 * Input: [1,2,3,4]
 * Output: false
 * Example 3:
 * 
 * Input: [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let dict = {};
    for (let val of nums) {
        if (val in dict) return true
        else dict[val] = 1;
    }
    return false;
};







/*********************************************************/
/** Contains Duplicates II - 219
 * 
 * Given an array of integers and an integer k, 
 * find out whether there are two distinct indices i and j in the array 
 * such that nums[i] = nums[j] and the absolute difference 
 * between i and j is at most k.
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,3,1], k = 3
 * Output: true
 * 
 * Example 2:
 * 
 * Input: nums = [1,0,1,1], k = 1
 * Output: true
 * 
 * Example 3:
 * 
 * Input: nums = [1,2,3,1,2,3], k = 2
 * Output: false
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let dict = {}, ans = true;

    for (let i = 0; i < nums.length; i++) {
        if (!(nums[i] in dict)) {
            dict[nums[i]] = [i];
        } else {
            // let val = nums[i]
            // let arr = dict[val];
            // let indOfLastEle = dict[val].length - 1;
            dict[nums[i]].push(nums.indexOf(nums[i], dict[nums[i]][dict[nums[i]].length - 1] + 1));
            // indexOf(/**value you are trying to find**/, /**starting to search at index**/)
            // dict[val].push(nums.indexOf(val, arr[indOfLastEle] + 1))

        }
    }
    // console.log(dict);
    for (let [key, val] of Object.entries(dict)) {
        if (val.length > 1) {
            for (let i = 0; i < val.length - 1; i++) {
                // console.log(`key : ${key}`);
                if (val[i + 1] - val[i] <= k) {
                    // console.log(`val[i] : ${val[i]}`)
                    // console.log(`val[i+1] : ${val[i + 1]}`)
                    // console.log(`difference : ${val[i + 1] - val[i]}`)
                    return true;
                }
            }
        }
    }
    return false;
};
// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
/**
 * Runtime: 96 ms, faster than 30.36% of JavaScript online submissions for Contains Duplicate II.
 * Memory Usage: 57.2 MB, less than 5.26% of JavaScript online submissions for Contains Duplicate II.
 */








/************************************************/
 /**Contains Duplicate III
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    
};