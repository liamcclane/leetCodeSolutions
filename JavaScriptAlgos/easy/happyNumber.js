/**202. Happy Number
 * 
 * Write an algorithm to determine if a number n is "happy".
 * 
 * A happy number is a number defined by the following process: 
 * Starting with any positive integer, replace the number by the 
 * sum of the squares of its digits, and repeat the process until 
 * the number equals 1 (where it will stay), or it loops endlessly 
 * in a cycle which does not include 1. Those numbers for which t
 * his process ends in 1 are happy numbers.
 * 
 * Return True if n is a happy number, and False if not.
 * 
 * Example: 
 * 
 * Input: 19
 * Output: true
 * Explanation: 
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 * 
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    if (n === 1) { return true; }

    let arr = [n], nCopy = n;

    while (nCopy != 1) {
        let sum = 0
        let str = nCopy.toString();

        for (let l of str) {
            sum += Number(l) * Number(l);
        }
        if (arr.includes(sum)) { return false; }
        else if (sum === 1) { return true; }
        arr.push(sum);

        nCopy = sum;

    }

    return false;

};
/**
 * Runtime: 208 ms, faster than 5.01% of JavaScript online submissions for Happy Number.
 * Memory Usage: 46.7 MB, less than 5.09% of JavaScript online submissions for Happy Number.
 */

/**tags for later look up
 * nestedForLoops
 * refactorMe
 */