/** 1323. Maximum 69 Number
 * All we have to do for this algorthim is find the first occurance of a 
 * number 6 and replace it with a 9
 * Examples include: give 9669 returns 9969 
 * and given 9999 returns 9999
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    return +String(num).replace(6, 9);
    /**
     * Runtime: 52 ms
     * Memory Usage: 33.9 MB
     * Your runtime beats 100.00 % of javascript submissions.
     * Your memory usage beats 73.23 % of javascript submissions.
     */
};
const maximum69NumberAgain = function (num) {
    return String(num).replace(6, 9);
    /**
     * Runtime: 72 ms, faster than 81.15% of JavaScript online submissions for Maximum 69 Number.
     * Memory Usage: 37 MB, less than 17.08% of JavaScript online submissions for Maximum 69 Number.
     */
};
/**tags for later look up
 * classObjectString
 */