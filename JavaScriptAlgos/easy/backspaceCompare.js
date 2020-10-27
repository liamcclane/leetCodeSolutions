/**844. Backspace String Compare
 * Given two strings S and T, return if they are equal when both are 
 * typed into empty text editors. # means a backspace character.
 * 
 * Note that after backspacing an empty text, the text will continue empty.
 * 
 * Example 1:
 * 
 * Input: S = "ab#c", T = "ad#c"
 * Output: true
 * Explanation: Both S and T become "ac".
 * Example 2:
 * 
 * Input: S = "ab##", T = "c#d#"
 * Output: true
 * Explanation: Both S and T become "".
 * Example 3:
 * 
 * Input: S = "a##c", T = "#a#c"
 * Output: true
 * Explanation: Both S and T become "c".
 * Example 4:
 * 
 * Input: S = "a#c", T = "b"
 * Output: false
 * Explanation: S becomes "c" while T becomes "b".
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    let sArr = [], tArr = [];
    for (const letter of S) {
        if(letter == "#") {
            sArr.pop();
        } else {
            sArr.push(letter);
        }
    }
    for (const letter of T) {
        if(letter == "#") {
            tArr.pop();
        } else {
            tArr.push(letter);
        }
    }
    if(tArr.length != sArr.length) {return false;}
    for (let i = 0; i < sArr.length; i++) {
        if(sArr[i] != tArr[i]) {
            return false;
        }
    }
    return true;
    /**
     * Runtime: 96 ms, faster than 13.25% of JavaScript online submissions for Backspace String Compare.
     * Memory Usage: 39.5 MB, less than 5.10% of JavaScript online submissions for Backspace String Compare.
     */
};