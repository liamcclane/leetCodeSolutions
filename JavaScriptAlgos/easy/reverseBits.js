/**
 * Reverse bits of a given 32 bits unsigned integer.
 * 
 * Example 1:
 * 
 * Input: 00000010100101000001111010011100
 * Output: 00111001011110000010100101000000
 * Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, 
 *  so return 964176192 which its binary representation is 00111001011110000010100101000000.
 * 
 * Example 2:
 * 
 * Input: 11111111111111111111111111111101
 * Output: 10111111111111111111111111111111
 * Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, 
 *  so return 3221225471 which its binary representation is 10111111111111111111111111111111.
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let ans = (n).toString(2);
    let rentAns = ""
    for(let i = ans.length -1; i >= 0; i--) {
        rentAns += ans[i];
    }
    return parseInt(rentAns, 2);
};
console.log(reverseBits(4294967293));