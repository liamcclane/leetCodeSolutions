/**20. Valid Parentheses
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 * 
 * Example1 "()" true
 * Example2 "()" true
 * Example3 "()" true
 * Example4 "()" true
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    /**
     * in the array below we will push and pop out accordingly to whichever 
     * character shows up first whilst making sure there is a matching closing bracket 
     * in the ar before continuing
     */
    let ar = [];
    for(let i = 0; i<s.length; i++){
        if(s[i] === ')'){
            if(ar.pop() != '(') return false;
        } else if (s[i] === '('){
            ar.push('(');
        }
        if(s[i] === ']'){
            if(ar.pop() != '[') return false;
        } else if (s[i] === '['){
            ar.push('[');
        }
        if(s[i] === '}'){
            if(ar.pop()!='{') return false;
        } else if (s[i] === '{'){
            ar.push('{');
        }
    }
    if(ar.length != 0) return false;
    return true;
    /**
     * Runtime: 64 ms
     * Memory Usage: 35 MB
     * Your runtime beats 98.23 % of javascript submissions.
     * Your memory usage beats 83.95 % of javascript submissions.
     */
};

console.log(isValid("([)]"));