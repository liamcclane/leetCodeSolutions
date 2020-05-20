/**367. Valid Perfect Square
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.
 * 
 * Follow up: Do not use any built-in library function such as sqrt.
 * 
 * Example 1:
 * 
 * Input: num = 16
 * Output: true
 * Example 2:
 * 
 * Input: num = 14
 * Output: false
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let check = 0;
    while (check * check < num) {
        check++;
    }
    return check * check == num;
};
console.log(isPerfectSquare(81));