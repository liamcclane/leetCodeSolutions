/**7. Reverse Integer
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * Input: 123
 * Output: 321
 * Example 2:
 * 
 * Input: -123
 * Output: -321
 * Example 3:
 * 
 * Input: 120
 * Output: 21
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let isNeg = false;
    if (x < 0) {
        x *= -1;
        isNeg = true;
    }
    let s = x.toString();
    s = [...s];
    let j = s.length;
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        let temp = s[i];
        s[i] = s[j - 1 - i];
        s[j - 1 - i] = temp;
    }
    let reservedNumStr = "";
    for (val of s) {
        reservedNumStr += val;
    }
    let ans = parseInt(reservedNumStr);
    if (Math.abs(ans) > 2147483647) {
        return 0;
    }
    if (isNeg) {
        ans *= -1;
    }
    return ans;
};
console.log(reverse(123)); // 321
console.log()
console.log(reverse(-123)); // -321
console.log()
console.log(reverse(1534236469)); // 321
console.log()
/**
 * Runtime: 100 ms, faster than 45.99% of JavaScript online submissions for Reverse Integer.
 * Memory Usage: 39 MB, less than 5.02% of JavaScript online submissions for Reverse Integer.
 */