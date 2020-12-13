/**1021. Remove Outermost Parentheses
 * A valid parentheses string is either empty (""), "(" + A + ")", 
 * or A + B, where A and B are valid parentheses strings, and + 
 * represents string concatenation.  For example, "", "()", "(())()", 
 * and "(()(()))" are all valid parentheses strings.
 * 
 * A valid parentheses string S is primitive if it is nonempty, 
 * and there does not exist a way to split it into S = A+B, 
 * with A and B nonempty valid parentheses strings.
 * 
 * Given a valid parentheses string S, consider its primitive 
 * decomposition: S = P_1 + P_2 + ... + P_k, where P_i are 
 * primitive valid parentheses strings.
 * 
 * Return S after removing the outermost parentheses of 
 * every primitive string in the primitive decomposition of S.
 * 
 * Example 1:
 * Input: "(()())(())"
 * Output: "()()()"
 * Explanation: 
 * The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
 * After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
 * 
 * Example 2:
 * Input: "(()())(())(()(()))"
 * Output: "()()()()(())"
 * Explanation: 
 * The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
 * After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
 * 
 * Example 3:
 * Input: "()()"
 * Output: ""
 * Explanation: 
 * The input string is "()()", with primitive decomposition "()" + "()".
 * After removing outer parentheses of each part, this is "" + "" = "".
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {

    let answer = "", SLen = S.length;

    /**
     * This helper method keeps a count starting at the 
     * given index and finds the ending index of the matching 
     * bracket
     * @param {number} ind
     * @returns {number} 
     */
    const findMatchingBracket = (ind) => {
        let count = 1;
        for (let i = ind + 1; i < SLen; i++) {
            if (S.charAt(i) === "(") {
                count++;
            } else if (S.charAt(i) === ")") {
                count--;
            }
            // after dec/inc the count check if we should return
            if (count === 0) {
                return i;
            }
        }
    };


    for (let i = 0; i < SLen; i++) {
        if (S.charAt(i) === "(") {
            let j = findMatchingBracket(i);
            answer += S.substring(i + 1, j);
            i = j - 1;
        }
    }

    return answer;
    /**
     * Runtime: 100 ms, faster than 7.84% of JavaScript online submissions for Remove Outermost Parentheses.
     * Memory Usage: 39.4 MB, less than 92.59% of JavaScript online submissions for Remove Outermost Parentheses.
     */
};