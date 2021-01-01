/**1347. Minimum Number of Steps to Make Two Strings Anagram
 * Given two equal-size strings s and t. In one step you can 
 * choose any character of t and replace it with another character.
 * 
 * Return the minimum number of steps to make t an anagram of s.
 * 
 * An Anagram of a string is a string that contains the same 
 * characters with a different (or the same) ordering.
 * this algorthim sorts allt the letters given first then comparse as it steps though
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    let dict = {}, count = 0;
    for (let letter of t) {
        if (letter in dict) {
            dict[letter]++;
        } else {
            dict[letter] = 1;
        }
    }
    for (let letter of s) {
        if (letter in dict) {
            dict[letter]--;
            if (dict[letter] === 0) {
                delete dict[letter];
            }
        } else {
            count++;
        }
    }
    return count;
    /**
     * Runtime: 156 ms, faster than 63.85% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
     * Memory Usage: 44.4 MB, less than 73.46% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
     */
};
const inefficientWithASort = (s, t) => {
    let lettersS = s.split("")
        .sort((a, b) => (a.charCodeAt(0) - b.charCodeAt(0))),
        lettersT = t.split("")
            .sort((a, b) => (a.charCodeAt(0) - b.charCodeAt(0)));
    let pointerS = 0, pointerT = 0,
        len = s.length, count = 0;
    while (pointerS < len && pointerT < len) {
        let valS = lettersS[pointerS].charCodeAt(0), valT = lettersT[pointerT].charCodeAt(0);
        if (valS === valT) {
            pointerS++;
            pointerT++;
        } else if (valS > valT) {
            pointerT++;
        } else if (valT > valS) {
            count++;
            pointerS++;
        }
    }
    if (pointerS < len) { count += (len - pointerS); }
    return count;
    /**
     * Runtime: 464 ms, faster than 8.85% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
     * Memory Usage: 52.4 MB, less than 5.00% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
     */
}
/**
 * Example 1:
 * Input: s = "bab", t = "aba"
 * Output: 1
 * Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
 *
 * Example 2:
 * Input: s = "leetcode", t = "practice"
 * Output: 5
 * Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.
 *
 * Example 3:
 * Input: s = "anagram", t = "mangaar"
 * Output: 0
 * Explanation: "anagram" and "mangaar" are anagrams.
 *
 * Example 4:
 * Input: s = "xxyyzz", t = "xxyyzz"
 * Output: 0
 *
 * Example 5:
 * Input: s = "friend", t = "family"
 * Output: 4
 */
