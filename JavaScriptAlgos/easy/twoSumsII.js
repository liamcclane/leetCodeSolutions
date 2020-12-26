/**167. Two Sum II - Input array is sorted
 * Given an array of integers that is already sorted in ascending order, 
 * find two numbers such that they add up to a specific target number.
 * 
 * The function twoSum should return indices of the two numbers such 
 * that they add up to the target, where index1 must be less than index2.
 * 
 * Note:
 * 
 * Your returned answers (both index1 and index2) are not zero-based.
 * You may assume that each input would have exactly one solution and you may not use the same element twice.
 * Example:
 * 
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    // for (let i = 0; i < numbers.length; i++) {
    //     let excluded = numbers.slice(0, i).concat(numbers.slice(i + 1, numbers.length));
    //     // console.log(excluded);
    //     if (excluded.includes(target - numbers[i])) {
    //         if (numbers.indexOf(target - numbers[i]) + 1 === i + 1) {
    //             // console.log("inside here");
    //             // console.log(numbers.indexOf(target - numbers[i], 2));
    //             return [i + 1, numbers.indexOf(target - numbers[i], 2) + 2]
    //         }
    //         return [i + 1, numbers.indexOf(target - numbers[i]) + 1];
    //     }
    // }
};
// console.log(twoSum([1, 2, 5, 7, 11, 15], 9)); // [1,2]
// console.log()
// console.log(twoSum([2, 3, 7, 11, 15], 9)); // [1,3]
// console.log()
// console.log(twoSum([0, 0, 3, 4], 0)); // [1,3]
console.log(twoSum([1,2,3,4,4,9,56,90],8))
// console.log([3,4,5,0,6,6,60,0,7,6].lastIndexOf(0));
// console.log("Darrick solution")


var twoSumDarrick = function (numbers, target) {
    // let myMap = new Map();
    // for (let i = 0; i < numbers.length; i++) {
    //     let compliement = target - numbers[i];
    //     if (myMap.has(compliement)) {
    //         return [myMap.get(compliement) + 1, i + 1];
    //     }
    //     myMap.set(numbers[i] + 1, i + 1);
    //     console.log(myMap);
    // }
};
// console.log(twoSumDarrick([2, 7, 11, 15], 9)); // [1,2]
// console.log()
// console.log(twoSumDarrick([2, 3, 7, 11, 15], 9)); // [1,3]
/**tags for later look up
 * unfinished
 * nestedForLoops
 * refactorMe
 */