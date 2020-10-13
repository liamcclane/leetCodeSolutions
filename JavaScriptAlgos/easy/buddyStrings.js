/**859. Buddy Strings
 * Given two strings A and B of lowercase letters, 
 * return true if you can swap two letters in 
 * A so the result is equal to B, otherwise, return false.
 * 
 * Swapping letters is defined as taking two indices 
 * i and j (0-indexed) such that i != j and swapping 
 * the characters at A[i] and A[j]. For example, 
 * swapping at indices 0 and 2 in "abcd" results in "cbad".
 * 
 * Example 1:
 * 
 * Input: A = "ab", B = "ba"
 * Output: true
 * Explanation: You can swap A[0] = 'a' and A[1] = 'b' to get "ba", which is equal to B.
 * Example 2:
 * 
 * Input: A = "ab", B = "ab"
 * Output: false
 * Explanation: The only letters you can swap are A[0] = 'a' and A[1] = 'b', which results in "ba" != B.
 * Example 3:
 * 
 * Input: A = "aa", B = "aa"
 * Output: true
 * Explanation: You can swap A[0] = 'a' and A[1] = 'a' to get "aa", which is equal to B.
 * Example 4:
 * 
 * Input: A = "aaaaaaabc", B = "aaaaaaacb"
 * "------**" 
 * letter = b
 * 
 * Output: true
 * Example 5:
 * 
 * Input: A = "", B = "aa"
 * Output: false
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {

    if (A.length != B.length) { return false; }
    let count = 0, dict = {
        strA1: "",
        strA2: "",
        strB1: "",
        strB2: "",
    };
    for (let i = 0; i < A.length; i++) {
        if (A[i] != B[i]) {
            count++;
            if (count == 1) {
                dict['strA1'] = A[i];
                dict['strB1'] = B[i];
            } else if (count == 2) {
                dict['strA2'] = A[i];
                dict['strB2'] = B[i];
            } else {
                return false;
            }
        }
    }
    if (count == 0) {
        let dict = {};
        for (let s of A) {
            if (s in dict) {
                return true;
            } else {
                dict[s] = 1;
            }
        }
        return false;
    }

    return dict['strA1'] == dict['strB2'] && dict['strA2'] == dict['strB1'];
    /**
     * Runtime: 88 ms, faster than 51.33% of JavaScript online submissions for Buddy Strings.
     * Memory Usage: 41.5 MB, less than 7.08% of JavaScript online submissions for Buddy Strings.
     */
};

// console.log(buddyStrings("aa","aa") ," <= true");
// console.log(buddyStrings("liamcclane", "mialcclane"), " <= true");
// console.log(buddyStrings("yellow", "yellow"), " <= true");

// console.log(buddyStrings("mcclanelia", "mialcclane"), " <= false");
// console.log(buddyStrings("ab", "bc"), " <= false");
// console.log(buddyStrings("ab","ab") , " <= false");





