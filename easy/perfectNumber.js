/**507. Perfect Number
 * We define the Perfect Number is a positive integer that is equal 
 * to the sum of all its positive divisors except itself.
 * 
 * Now, given an integer n, write a function that returns true when 
 * it is a perfect number and false when it is not.
 * 
 * Example:
 * Input: 28
 * Output: True
 * Explanation: 28 = 1 + 2 + 4 + 7 + 14
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    if (num === 0) return false;
    let divisors = [];
    for (let i = 1; i < num; i++) {
        if (num % i === 0) divisors.push(i);
    }
    let sum = 0;
    for (let i = 0; i < divisors.length; i++) {
        sum += divisors[i];
    }
    if (sum === num) return true;
    return false;
};