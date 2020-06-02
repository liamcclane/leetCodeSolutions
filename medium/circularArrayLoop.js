/**457. Circular Array Loop
 * You are given a circular array nums of positive and negative integers. 
 * If a number k at an index is positive, then move forward k steps. 
 * Conversely, if it's negative (-k), move backward k steps. 
 * Since the array is circular, you may assume that the last element's 
 * next element is the first element, and the first element's previous 
 * element is the last element.
 * 
 * Determine if there is a loop (or a cycle) in nums. 
 * A cycle must start and end at the same index and the cycle's length > 1. 
 * Furthermore, movements in a cycle must all follow a single direction. 
 * In other words, a cycle must not consist of both forward and backward movements.
 * 
 * Example 1:
 * Input: [2,-1,1,2,2]
 * Output: true
 * Explanation: There is a cycle, from index 0 -> 2 -> 3 -> 0. The cycle's length is 3.
 * 
 * Example 2:
 * Input: [-1,2]
 * Output: false
 * Explanation: The movement from index 1 -> 1 -> 1 ... is not a cycle, because the cycle's length is 1. By definition the cycle's length must be greater than 1.
 * 
 * Example 3:
 * Input: [-2,1,-1,-2,-2]
 * Output: false
 * Explanation: The movement from index 1 -> 2 -> 1 -> ... is not a cycle, because movement from index 1 -> 2 is a forward movement, but movement from index 2 -> 1 is a backward movement. 
 * All movements in a cycle must follow a single direction.
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {
    let arrIndexesWeHaveHit = [];
    let arrOfDirections = [];
    let pointer = 0;
    // console.log(`101 % 10 is ${101 % 10}`);
    while (!(arrIndexesWeHaveHit.includes(pointer))) {
        arrIndexesWeHaveHit.push(pointer);
        if (nums[pointer] >= 0) arrOfDirections.push("forward");
        else arrOfDirections.push("backwards");
        pointer += nums[pointer];
        if (pointer >= nums.length) {
            pointer = pointer % nums.length;
        }
        else if (pointer < 0) {
            pointer = nums.length + pointer;
        }
    }
    console.log(`pointer ended at ${pointer}`);
    console.log(arrIndexesWeHaveHit);
    console.log(arrOfDirections);
    let j = arrIndexesWeHaveHit.indexOf(pointer),
        len = arrIndexesWeHaveHit.length,
        singleDir = arrOfDirections[j];
    if (j === len - 1) return false;
    for (let i = 0; i < len; i++) {
        if (arrOfDirections[i] != singleDir) {
            console.log(`singleDir is ${singleDir}`);
            console.log(arrOfDirections[i]);
            return false;
        }
    }
    return true;
};
// console.log(circularArrayLoop([2,-1,1,-2,-2])); // returns false
// console.log(circularArrayLoop([3,1,2])); // returns true
// console.log(circularArrayLoop([-1,2])); // returns false
console.log(circularArrayLoop([-1, -2, -3, -4, -5])); // returns false
/**
 * Example 1
 * Input: [2,-1,1,2,2]
 * [2,-1,1,2,2],[2,-1,1,2,2],[2,-1,1,2,2],[2,-1,1,2,2]
 *  *
 *       *
 *         *
 *               * Looped => true
 */
/**
 * Example 2
 * [-1,2] [-1,2] [-1,2]
 *          *
 *     *
 *            * We have hit a cycle, BUT it only consists of one movement => false
 */
/**
 * Example 3: [-2,1,-1,-2,-2]
 * [-2,1,-1,-2,-2],[-2,1,-1,-2,-2],[-2,1,-1,-2,-2],[-2,1,-1,-2,-2]
 *                   *
 *           *
 *     *
 *        *
 *     * We have hit a cycle, BUT it is a circular loop of only one movement...
 */
/**
 * Example
 * Input: [2,-1,1,-2,-2]
 *        [2,-1,1,-2,-2], [2,-1,1,-2,-2], [2,-1,1,-2,-2]
 *         *
 *              *
 *                 *
 *            *
 *         * Here is the loop, BUT it was backwards and forwards => false
 */
/**
 * Example
 * Input: [-1,-2,-3,-4,-5]
 *        [-1,-2,-3,-4,-5], [-1,-2,-3,-4,-5], [-1,-2,-3,-4,-5], [-1,-2,-3,-4,-5]
 *                                                                *
 *                                                          *
 *                                        * Looped false thought b/c loop is one long
 */