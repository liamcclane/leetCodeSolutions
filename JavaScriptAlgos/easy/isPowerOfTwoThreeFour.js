/**
 * Given an integer, write a function to determine if it is a power of two.
 * 
 * Example 1:
 * 
 * Input: 1
 * Output: true 
 * Explanation: 20 = 1
 * Example 2:
 * 
 * Input: 16
 * Output: true
 * Explanation: 24 = 16
 * Example 3:
 * 
 * Input: 218
 * Output: false
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n === 0) return false;
    let x = Math.round(Math.log2(n));
    if (2 ** x === n) return true
    return false;
};
// for (let i = 1; i <= 64; i++) {
//     if (isPowerOfTwo(i)) {
//         console.log(isPowerOfTwo(i), i);
//     } else {
//         console.log("\t", isPowerOfTwo(i), i);
//     }
// }
/**
 * Given an integer, write a function to determine if it is a power of three.
 * 
 * Example 1:
 * 
 * Input: 27
 * Output: true
 * Example 2:
 * 
 * Input: 0
 * Output: false
 * Example 3:
 * 
 * Input: 9
 * Output: true
 * Example 4:
 * 
 * Input: 45
 * Output: false
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n === 0) return false;
    while (n >= 1) {
        if (n === 1) return true;
        n = n / 3;
    }
    return false
};
// for (let i = 1; i <= 64; i++) {
//     if (isPowerOfThree(i)) {
//         console.log(isPowerOfThree(i), i);
//     } else {
//         console.log("\t", isPowerOfThree(i), i);
//     }
// }
/**
 * Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
 * 
 * Example 1:
 * 
 * Input: 16
 * Output: true
 * Example 2:
 * 
 * Input: 5
 * Output: false
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
    if (num === 0) return false;
    let x = Math.round(Math.log2(num));
    if (x % 2 == 1) {
        return false;
    } else if (2 ** x === num) {
        return true;
    }
    return false;
};
// for (let i = 1; i <= 64; i++) {
//     if (isPowerOfFour(i)) {
//         console.log(isPowerOfFour(i), i);
//     } else {
//         console.log("\t", isPowerOfFour(i), i);
//     }
// }