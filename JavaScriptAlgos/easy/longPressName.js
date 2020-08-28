/**925. Long Pressed Name
 * Your friend is typing his name into a keyboard.  
 * Sometimes, when typing a character c, the key might get long pressed, 
 * and the character will be typed 1 or more times.
 * 
 * You examine the typed characters of the keyboard.  
 * Return True if it is possible that it was your friends name, 
 * with some characters (possibly none) being long pressed.
 *  
 * 
 * Example 1:
 * 
 * Input: name = "alex", typed = "aaleex"
 * Output: true
 * Explanation: 'a' and 'e' in 'alex' were long pressed.
 * 
 * Example 2:
 * 
 * Input: name = "saeed", typed = "ssaaedd"
 * Output: false
 * Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
 * 
 * Example 3:
 * 
 * Input: name = "leelee", typed = "lleeelee"
 * Output: true
 * 
 * Example 4:
 * 
 * Input: name = "laiden", typed = "laiden"
 * Output: true
 * Explanation: It's not necessary to long press any character.
 * 
 ************************
 * "lia"  "lllliiiiaaaa"
 *  *          *
 * 
 * in conclusion
 * we have moved the name pointer forward every time 
 * and then caught the j pointer up, make sure that 
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let j = 0;
    let ans = true;

    for (let c of name) {
        // if we have even gotten to the point where the second pointer has hit the end of the 
        // typed input, but not finished the name loop return false
        if (j === typed.length) return false;

        // IF the pointers are not looking at the same letter
        if (typed[j] != c) {
            // If j === 0 that means the first two letters of name and type never equalled each other => false
            // If typed[j-1] != typed[j] =>
            // that neither typed[j] is not equal to c nor equal to typed[j - 1] (the one previous behind it)
            if (j === 0 || typed[j - 1] != typed[j]) return false;

            // lets store the letter j is sitting on,
            // continue to increase j as long as the pointers letter is
            // equal to the one we stored, 
            // NOTE we cannot use c here because c != typed[j]
            let curr = typed[j];
            while (j < typed.length && typed[j] === curr) {
                j++;
            }
            // and the end of this while loop
            // we now have j = typed.length => false, since we haven't finished the name loop
            // or typed[j] != curr wherever it started, we are hoping that now
            // typed[j] === c, THEREFORE it if does not satisfy these two we can return false
            if (j === typed.length || typed[j] != c) return false
        }
        // ALWAYS increase the second pointer
        // since we have assured that now typed[j] = c after above manipulation
        // or never even stepping into the second if after the for loop
        j++;
    }
    // this array takes care of the rest of the typed word, really only checking the end of the 
    // typed hoping that they all equal the last letter (clearer on line 135)
    let arr = [...typed.slice(j, typed.length)].map(ele => ele === name[name.length - 1]);
    console.log(arr);
    for (let a of arr) {
        if (!a) ans = a;
    }
    // if we have completed this for loop => we can assume that long keypress has passed all tests
    return ans;
    /**
     * Runtime: 60 ms
     * Memory Usage: 35.8 MB
     * Your runtime beats 98.68 % of javascript submissions.
     */
};
// console.log(isLongPressedName("water","wwaterrrrrr"));

const secondSubmission = (name, typed) => {
    let j = 0;
    let ans = true;

    for (let c of name) {
        // if we have even gotten to the point where the second pointer has hit the end of the 
        // typed input, but not finished the name loop return false
        if (j === typed.length) return false;

        // IF the pointers are not looking at the same letter
        if (typed[j] != c) {
            // If j === 0 that means the first two letters of name and type never equalled each other => false
            // If typed[j-1] != typed[j] =>
            // that neither typed[j] is not equal to c nor equal to typed[j - 1] (the one previous behind it)
            if (j === 0 || typed[j - 1] != typed[j]) return false;

            // lets store the letter j is sitting on,
            // continue to increase j as long as the pointers letter is
            // equal to the one we stored, 
            // NOTE we cannot use c here because c != typed[j]
            let curr = typed[j];
            while (j < typed.length && typed[j] === curr) {
                j++;
            }
            // and the end of this while loop
            // we now have j = typed.length => false, since we haven't finished the name loop
            // or typed[j] != curr wherever it started, we are hoping that now
            // typed[j] === c, THEREFORE it if does not satisfy these two we can return false
            if (j === typed.length || typed[j] != c) return false
        }
        // ALWAYS increase the second pointer
        // since we have assured that now typed[j] = c after above manipulation
        // or never even stepping into the second if after the for loop
        j++;
    }
    // this array takes care of the rest of the typed word, really only checking the end of the 
    // typed hoping that they all equal the last letter
    for(; j < typed.length; j++) {
        if(typed[j] != name[name.length -1]) {
            return false;
        }
    }
    return true;
    /**
     * Runtime: 80 ms, faster than 57.27% of JavaScript online submissions for Long Pressed Name.
     * Memory Usage: 37.9 MB, less than 23.35% of JavaScript online submissions for Long Pressed Name.
     */
};

/**tags for later look up
 * nestedForWhile
 * multipleSubmissions
 */