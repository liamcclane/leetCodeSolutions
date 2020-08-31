/**1207. Unique Number of Occurrences
 * Given an array of integers arr, write a function that returns true if and only if 
 * the number of occurrences of each value in the array is unique.
 * 
 * Example 1:
 * 
 * Input: arr = [1,2,2,1,1,3]
 * Output: true
 * Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. 
 * cvjbghNo two values have the same number of occurrences.
 * 
 * Example 2:
 * 
 * Input: arr = [1,2]
 * Output: false
 * 
 * Example 3:
 * 
 * Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
 * Output: true
 * @param {number[]} arr : a list of numbers, most of the time repeated
 * @return {boolean} : returns true if there is unique amounts or different numbers
 */
var uniqueOccurrences = function (arr) {
    let numFrequ = {};
    for (let n of arr) {
        if (n in numFrequ) numFrequ[n] += 1;
        else numFrequ[n] = 1;
    }
    // console.log(numFrequ);
    let rep = [];
    for (let key in numFrequ) {
        for (let v of rep) {
            if (v == numFrequ[key]) return false
        }
        rep.push(numFrequ[key]);
    }
    return true;
    /**
     * Runtime: 60 ms
     * Memory Usage: 34.6 MB
     * Your runtime beats 99.50 % of javascript submissions
     * Your memory usage beats 75.44 % of javascript submissions.
     */
};

// console.log(uniqueOccurrences([66,55]))
console.log(uniqueOccurrences([1, 1, 1, 2, 2, 3]))
console.log(uniqueOccurrences([1, 1, 2, 2, 3]))

/**tags for late look up
 * nestedForLoops
 * refactorMe
 */