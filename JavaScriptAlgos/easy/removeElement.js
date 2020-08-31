/**27. Remove Element
 * Given an array nums and a value val, remove all instances of that value
 * in-place and return the new length.
 * 
 * Do not allocate extra space for another array, you must do this by 
 * modifying the input array in-place with O(1) extra memory.
 * 
 * The order of elements can be changed. 
 * It doesn't matter what you leave beyond the new length.
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let len = nums.length;
    let countValOccurrence = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] == val) countValOccurrence++
    }
    for (let i = 0; i < len; i++) {
        if (nums[i] == val) {
            let j = i;
            while (nums[j] == val) {
                j++;
            }
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
    nums.length = len - countValOccurrence;
    return nums.length;
    /**
     * Runtime: 116 ms
     * Memory Usage: 33.4 MB
     * Your memory usage beats 89.81 % of javascript submissions.
     */
}

let ex1 = [3, 2, 5, 3];
console.log(removeElement(ex1, 3));
