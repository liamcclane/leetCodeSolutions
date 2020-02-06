/** All we have to do for this algorthim is find the first occurance of a number 6 and replace it with a 9
 * Examples include: give 9669 returns 9969 
 * and given 9999 returns 9999
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function(num) {
    return +String(num).replace(6,9)
};