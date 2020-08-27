/**1317. Convert Integer to the Sum of Two No-Zero Integers
 * Given an integer n. No-Zero integer is a positive integer 
 * which doesn't contain any 0 in its decimal representation.
 * 
 * Return a list of two integers [A, B] where:
 * 
 * A and B are No-Zero integers.
 * A + B = n
 * It's guaranteed that there is at least one valid solution. 
 * If there are many valid solutions you can return any of them.
 * 
 *  
 * 
 * Example 1:
 * Input: n = 2
 * Output: [1,1]
 * Explanation: A = 1, B = 1. A + B = n 
 *      both A and B don't contain any 0 in their decimal representation.
 * 
 * Example 2:
 * Input: n = 11
 * Output: [2,9]
 *
 * Example 3:
 * Input: n = 10000
 * Output: [1,9999]
 *
 * Example 4:
 * Input: n = 69
 * Output: [1,68]
 * 
 * Example 5:
 * Input: n = 1010
 * Output: [11,999]
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
    let ele1 = 1, ele2 = n - ele1;
    /**Contains Zeros
     * this function takes too strings 
     * loops though them looking to see if they contain a zero
     * @param {string} x 
     * @param {string} y 
     * @returns {boolean} 
     */
    const containsZeros = (x, y) => {
        for (let i = 0; i < x.length; i++) {
            if (x[i] === "0") return true;
        }
        for (let i = 0; i < y.length; i++) {
            if (y[i] === "0") return true;
        }
        return false;
    };
    while (containsZeros(ele1.toString(), ele2.toString())) {
        ele1++;
        ele2--;
    }
    return [ele1, ele2];
};

/**
 * Runtime: 76 ms, faster than 22.61% of JavaScript online submissions for Convert Integer to the Sum of Two No-Zero Integers.
 * Memory Usage: 36.2 MB, less than 5.05% of JavaScript online submissions for Convert Integer to the Sum of Two No-Zero Integers.
*/
/**tags for later look up
 * helperFunction
 * refactorMe
 */