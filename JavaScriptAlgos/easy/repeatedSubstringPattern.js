/**459. Repeated Substring Pattern
 * Given a non-empty string check if it can be constructed by taking 
 * a substring of it and appending multiple copies of the substring 
 * together. You may assume the given string consists of lowercase 
 * English letters only and its length will not exceed 10000.
 * 
 * Example 1:
 * 
 * Input: "abab"
 * Output: True
 * Explanation: It's the substring "ab" twice.
 * 
 * Example 2:
 * 
 * Input: "aba"
 * Output: False
 * 
 * Example 3:
 * 
 * Input: "abcabcabcabc"
 * Output: True
 * Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
 * @param {string} s
 * @return {boolean}
 */
const repSubPattern = (s) => {
    let pattern = s[0],
        i = 0,                              // my base iterator
        len = s.length,
        runner = 1;                         // this is my j index, it is going to reset to one in front of i each time 
                                            // because we could have a pattern like aaabaaa aaabaaa , I do a check for if 
                                            // runner has ever hit the end of the string 

    if (len == 1) { return false; }         // edge case caught by leetcode XP

    /**
     * I created this helper method to be called whenever I want to
     * do the repeated check, the iterator inside the for loop increments by
     * p.length, and does a early check to make sure that 
     * p.length is a multiple of s.length
     * I used the built in function .slice(starterInd, endInd(exclusive)) 
     * to pull out of the string and check for repeating
     * and it returns a boolean
     * @param {string} p
     * @returns {boolean}
     */
    helper = (p) => {
        let pLen = p.length;
        if (len % pLen != 0) { return false; }
        for (let ind = 0; ind < len; ind += pLen) {
            if (!(p == (s.slice(ind, ind + pLen)))) {
                return false;
            }
        }
        return true;
    }


    /**
     * the second half of the conditional is for the case that the first letter
     * of the string is never found again in the s => it never repeats
     */
    while (i < len && !(runner > len && i === 0)) {
        if (s[i] === s[runner]) {                               // check if the pattern repeats though the string
            let found = helper(pattern);
            if (found) {
                return true;
            } else if (runner > len) {                          // if we are here we know that found is false
                pattern = s[i];                                 // and runner has it the end of s, so we want to 
                runner = i + 1;                                 // reset the variable pattern, runner to 1 ahead of i 
                i++;                                            // and increment i
            } else {
                pattern += s[runner];                           // even though s[i] === s[runner] we know that 
                runner++;                                       // our helper method says it is not the pattern
                                                                // and if runner is not at the end of s
                                                                // add to pattern and increment runner
            }
        } else if (s[i] != s[runner]) {
            pattern += s[runner];
            runner++;
        }
    }
    // if we have gotten to the end of the while loop we know that we never found a pattern
    return false;
    /**
     * Runtime: 104 ms, faster than 53.52% of JavaScript online submissions for Repeated Substring Pattern.
     * Memory Usage: 43.2 MB, less than 54.44% of JavaScript online submissions for Repeated Substring Pattern.
     */
}
console.log("\t", repSubPattern("abab")); // true
console.log("")
console.log("\t", repSubPattern("aaaaaaa")); // true
console.log("")
console.log("\t", repSubPattern("cabcabcab")); // true
console.log("")
console.log("\t", repSubPattern("abaab abaab ")); // true
console.log("")
console.log("\t", repSubPattern("liaaliaaliaa")); // true
console.log("")



console.log("FALSE below")
// // false
console.log("\t", repSubPattern("cabab")); // false 
console.log("")
console.log("\t", repSubPattern("a")); // false 
