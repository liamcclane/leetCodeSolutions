/**1684. Count the Number of Consistent Strings
 * You are given a string allowed consisting of distinct characters 
 * and an array of strings words. A string is consistent 
 * if all characters in the string appear in the string allowed.
 * 
 * Return the number of consistent strings in the array words.
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let dict = {}, count = 0;
    for (let letter of allowed) {
        dict[letter] = 0;
    }

    const isValid = (str) => {
        for (let letter of str) {
            if (!(letter in dict)) {
                return false;
            }
        }
        return true;
    }

    for (let word of words) {
        if (isValid(word)) {
            count++;
        }
    }
    return count;
    /**
     * Runtime: 116 ms, faster than 77.45% of JavaScript online submissions for Count the Number of Consistent Strings.
     * Memory Usage: 48 MB, less than 65.28% of JavaScript online submissions for Count the Number of Consistent Strings.
     */
};
/**Examples
 * Example 1:
 * Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
 * Output: 2
 * Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
 *
 * Example 2:
 * Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
 * Output: 7
 * Explanation: All strings are consistent.
 *
 * Example 3:
 * Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
 * Output: 4
 * Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
 */