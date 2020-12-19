/**1614. Maximum Nesting Depth of the Parentheses
 * A string is a valid parentheses string (denoted VPS) if it meets one of the following:
 * 
 * It is an empty string "", or a single character not equal to "(" or ")",
 * It can be written as AB (A concatenated with B), where A and B are VPS's, or
 * It can be written as (A), where A is a VPS.
 * We can similarly define the nesting depth depth(S) of any VPS S as follows:
 * 
 * depth("") = 0
 * depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
 * depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
 * depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
 * For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.
 * 
 * Given a VPS represented as string s, return the nesting depth of s.
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {

    let countParen = 0, maxParens = 0,
        startIndSub = 0, endIndSub = 0;

    for (let letter of s) {
        if (letter == "(") {
            countParen++;
        } else if (letter == ")") {
            countParen--;
        } else {
            continue;
        }
        maxParens = Math.max(maxParens, countParen);
    }
    return maxParens;
    /**
     * Runtime: 80 ms, faster than 71.43% of JavaScript online submissions for Maximum Nesting Depth of the Parentheses.
     * Memory Usage: 38.9 MB, less than 20.73% of JavaScript online submissions for Maximum Nesting Depth of the Parentheses.
     */
};

/**
 * again but fast runtime by controlling the i in the for loop more
 * @param {string} s
 * @returns {number} 
 */
const again = (s) => {

    let countParen = 0, maxParens = 0, len = s.length;
    let nextOpen = len, nextClose = len;
    for (let i = 0; i < len;) {
        // console.log(i);
        let letter = s.charAt(i);
        if (letter == "(") {
            countParen++;
        } else if (letter == ")") {
            countParen--;
        }
        maxParens = Math.max(maxParens, countParen);
        nextOpen = s.indexOf("(", i + 1) === -1 ? len : s.indexOf("(", i + 1);
        nextClose = s.indexOf(")", i + 1) === -1 ? len : s.indexOf(")", i + 1);
        if (nextClose == len && nextOpen == len) { break; }
        i = Math.min(nextOpen, nextClose);
    }
    return maxParens;
    /**
     * Runtime: 64 ms, faster than 99.30% of JavaScript online submissions for Maximum Nesting Depth of the Parentheses.
     * Memory Usage: 38.9 MB, less than 34.31% of JavaScript online submissions for Maximum Nesting Depth of the Parentheses.
     */

}

/** Examples
 * Example 1:
 *
 * Input: s = "(1+(2*3)+((8)/4))+1"
 * Output: 3
 * Explanation: Digit 8 is inside of 3 nested parentheses in the string.
 * Example 2:
 *
 * Input: s = "(1)+((2))+(((3)))"
 * Output: 3
 * Example 3:
 *
 * Input: s = "1+(2*3)/(2-1)"
 * Output: 1
 * Example 4:
 *
 * Input: s = "1"
 * Output: 0
 */
// Below Code is added if you wanted the number or content inside the most nested parenthese
    // if(maxParens == 0) {return 0;}
    // countParen = 0;
    // for(let i = 0; i < s.length; i++) {
    //     let letter = s.charAt(i);
    //     if(letter == "(") {
    //         countParen++;
    //     } else if (letter ==")") {
    //         countParen--;
    //     }
    //     if(countParen === maxParens) {
    //         startIndSub = i;
    //         endIndSub = s.slice(i,s.length).indexOf(")") + i;
    //         console.log(s.slice(startIndSub + 1, endIndSub));
    //         return s.slice(startIndSub + 1, endIndSub);
    //     }
    // }