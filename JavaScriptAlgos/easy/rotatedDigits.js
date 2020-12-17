/**788. Rotated Digits
 * X is a good number if after rotating each digit individually by 180 degrees, 
 * we get a valid number that is different from X.  
 * Each digit must be rotated - we cannot choose to leave it alone.
 * 
 * A number is valid if each digit remains a digit after rotation. 
 * 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other 
 * (on this case they are rotated in a different direction, in 
 * other words 2 or 5 gets mirrored); 6 and 9 rotate to each other, 
 * and the rest of the numbers do not rotate to any other 
 * number and become invalid.
 * 
 * Now given a positive number N, how many numbers X from 1 to N are good?
 * 
 * Example:
 * Input: 10
 * Output: 4
 * Explanation: 
 * There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
 * Note that 1 and 10 are not good numbers, 
 * since they remain unchanged after rotating.
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {

    let dict = { "2": 5, "5": 2, "0": 0, "1": 1, "6": 9, "9": 6, "8": 8 };
    const helper = (num) => {
        let s = num.toString(), fliped = "";
        for (let i = 0; i < s.length; i++) {
            if (!(s[i] in dict)) { return false; }
            fliped += dict[s[i]];
        }
        // console.log("s", s,": flipped", fliped, " returns", fliped != s);
        return fliped != s;
    };

    let count = 0;
    while (N >= 1) {
        if (helper(N)) {
            count++;
        }
        N--;
    }
    return count;
    /**
     * Runtime: 108 ms, faster than 23.31% of JavaScript online submissions for Rotated Digits.
     * Memory Usage: 42.3 MB, less than 39.26% of JavaScript online submissions for Rotated Digits.
     */
};