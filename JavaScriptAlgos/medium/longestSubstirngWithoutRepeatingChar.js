/**3. Longest Substring Without Repeating Characters
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * Example 1:
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 *
 * Example 2:
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * Example 3:
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let subString = "";
    let len = s.length;

    for (let i = 0; i < len; i++) {
        let runningStr = s[i];
        for (let j = i + 1; j < len; j++) {
            if (runningStr.includes(s[j])) {
                break;
            } else {
                runningStr += s[j];
            }
        }
        if (runningStr.length > subString.length) {
            subString = runningStr;
        }
    }

    return subString.length;

};
/**
 * Runtime: 396 ms, faster than 18.15% of JavaScript online submissions for Longest Substring Without Repeating Characters.
 * Memory Usage: 42.9 MB, less than 29.43% of JavaScript online submissions for Longest Substring Without Repeating Characters.
 */
console.log(lengthOfLongestSubstring("bbbb"));
console.log(lengthOfLongestSubstring("pwwwkew"));