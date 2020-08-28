/**14. Longest Common Prefix
 * Write a function to find the longest common prefix string amongst an array of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * Example 2:
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    if (strs.length === 0) return ""

    let result = '';

    // only need to check with the first word and keep moving along with the list of words
    // first for loop loops through the letters
    for (let i = 0; i < strs[0].length; i++) {

        // this for loop keeps moving though the list of words
        for (let j = 0; j < strs.length; j++) {

            // the moment one of the letters of the list don't match 
            // with the first word, return the result
            if (strs[0][i] !== strs[j][i]) return result
        }
        result += strs[0][i];
    }
    return result;
    /**
     * Runtime: 56 ms, faster than 82.61% of JavaScript online submissions for Longest Common Prefix.
     * Memory Usage: 35.1 MB, less than 34.38% of JavaScript online submissions for Longest Common Prefix.
     */
};
ex1 = ["flower", "flow", "flight"];
ex2 = ["flower", "flow", "water"];
ex2 = ["racecar", "water"];

console.log(longestCommonPrefix(ex2));

/**tags for later look up
 * nestedForLoops
 */
