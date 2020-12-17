/**1389. Create Target Array in the Given Order
 * Given two arrays of integers nums and index. 
 * Your task is to create target array under the following rules:
 * 
 * Initially target array is empty.
 * From left to right read nums[i] and index[i], 
 * insert at index index[i] the value nums[i] in target array.
 * Repeat the previous step until there are no elements to read in nums and index.
 * Return the target array.
 * 
 * It is guaranteed that the insertion operations will be valid.
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {

    let target = [], len = nums.length;

    for (let i = 0; i < len; i++) {

        let indexVal = index[i], val = nums[i];
        let currLen = target.length;
        // console.log("before",target);

        if (indexVal === currLen) {
            target.push(val);
        } else {
            let front = target.slice(0, indexVal),
                back = target.slice(indexVal, currLen);
            target = front.concat(val, ...back);
        }
        // console.log("after",target, "\n");
    }

    return target;
    /**
     * Runtime: 80 ms, faster than 51.00% of JavaScript online submissions for Create Target Array in the Given Order.
     * Memory Usage: 39.9 MB, less than 12.18% of JavaScript online submissions for Create Target Array in the Given Order.
     */
};
/**
 * Example 1:
 * Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
 * Output: [0,4,1,3,2]
 * Explanation:
 * nums       index     target
 * 0            0        [0]
 * 1            1        [0,1]
 * 2            2        [0,1,2]
 * 3            2        [0,1,3,2]
 * 4            1        [0,4,1,3,2]
 *
 * Example 2:
 * Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
 * Output: [0,1,2,3,4]
 * Explanation:
 * nums       index     target
 * 1            0        [1]
 * 2            1        [1,2]
 * 3            2        [1,2,3]
 * 4            3        [1,2,3,4]
 * 0            0        [0,1,2,3,4]
 *
 * Example 3:
 * Input: nums = [1], index = [0]
 * Output: [1]
 */