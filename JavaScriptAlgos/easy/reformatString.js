/**1417. Reformat The String
 * Given alphanumeric string s. (Alphanumeric string is a 
 * string consisting of lowercase English letters and digits).
 * 
 * You have to find a permutation of the string where no letter 
 * is followed by another letter and no digit is followed by another digit. 
 * That is, no two adjacent characters have the same type.
 * 
 * Return the reformatted string or return an empty string if it 
 * is impossible to reformat the string.
 * 
 * Example 1:
 * Input: s = "a0b1c2"
 * Output: "0a1b2c"
 * Explanation: No two adjacent characters 
 * have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" 
 * are also valid permutations.
 * 
 * Example 2:
 * Input: s = "leetcode"
 * Output: ""
 * Explanation: "leetcode" has only characters so we cannot separate them by digits.
 * 
 * Example 3:
 * Input: s = "1229857369"
 * Output: ""
 * Explanation: "1229857369" has only digits so we cannot separate them by characters.
 * 
 * Example 4:
 * Input: s = "covid2019"
 * Output: "c2o0v1i9d"
 * 
 * Example 5:
 * Input: s = "ab123"
 * Output: "1a2b3"
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
    let nums = "", alpha = "", len = s.length;
    for (let i = 0; i < len; i++) {
        if (s[i].match(/[0-9]/i)) {
            nums += s[i];
        } else {
            alpha += s[i];
        }
    }
    // here I am checking for early exit case, we need 
    let ansStr = "", numPointer = 0, alphaPointer = 0, ansCounter = 0;
    if (Math.abs(nums.length - alpha.length) > 1) { return ""; }
    if (nums.length > alpha.length) {
        ansStr += nums[0];
        ansCounter++;
        numPointer++;
    }
    for (/*no declarations needed*/; ansCounter < len;
        numPointer++, alphaPointer++, ansCounter += 2) {
        ansStr += (alphaPointer < alpha.length) ? alpha[alphaPointer] : "";
        ansStr += (numPointer < nums.length) ? nums[numPointer] : "";
    }
    return ansStr;
    /**
     * Runtime: 96 ms, faster than 54.61% of JavaScript online submissions for Reformat The String.
     * Memory Usage: 43.8 MB, less than 8.12% of JavaScript online submissions for Reformat The String.
     */

};

console.log(reformat("a0b1c2"), "<- 0a1b2c");
console.log(reformat("leetcode"), "<-  empty");
console.log(reformat("1229857369"), "<-  empty");
console.log(reformat("covid2019"), "<- c2o0v1i9d");
console.log(reformat("ab123"), "<- 1a2b3");

/**tags for later look up
 * regx
 */