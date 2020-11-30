/**1662. Check If Two String Arrays are Equivalent
 * Given two string arrays word1 and word2, return true if
 * the two arrays represent the same string, and false otherwise.
 * A string is represented by an array if the array elements
 * concatenated in order forms the string.
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    return word1.join("") == word2.join("");
    /**
     * Runtime: 72 ms, faster than 92.66% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
     * Memory Usage: 38.8 MB, less than 29.79% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
     */
};

const arrStringsEqu = (word1, word2) => {
    let str1 = word1.reduce((acc, iter) => acc + iter, "");
    let str2 = word2.reduce((acc, iter) => acc + iter, "");
    let len = str1.length;
    if (len != str2.length) { return false; }
    for (let i = 0; i < len; i++) {
        if (str1.charAt(i) != str2.charAt(i)) {
            return false;
        }
    }
    return true;
    /**
     * Runtime: 76 ms, faster than 80.39% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
     * Memory Usage: 38.9 MB, less than 29.79% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
     */
}

const arrStrsEqu = (word1, word2) => {

    let len1 = word1.length, len2 = word2.length;

    // indA, indB are pointers for the given arrays word1, word2
    let subStringA, subStringB, indA = 0, indB = 0;

    // a is the iterator through the substringA
    // b is the iterator through the substringB
    // keep looping while we haven't finished looping though 
    // the given arrays
    for (let a = 0, b = 0; indA < len1 && indB < len2; a++, b++) {

        subStringA = word1[indA];
        subStringB = word2[indB];

        // console.log("subStirngA", subStringA);
        // console.log("subStirngB", subStringB);
        // console.log(subStringA.charAt(a), " char at A");
        // console.log(subStringB.charAt(b), " char at B\n");

        if (subStringA.charAt(a) != subStringB.charAt(b)) {
            return false;
        }

        // if we have reached the end of subStringA or subStringB
        // increment the array pointer indA or indB respectively 
        // then reset the inner iterator to -1 because it will be incremented to
        // zero from the for loop
        if (a === subStringA.length - 1) {
            indA++;
            a = -1;
        }
        if (b == subStringB.length - 1) {
            indB++;
            b = -1;
        }
    }
    // now we will return weather BOTH pointers have reached the end of 
    // the words array, if not, this means the letters matched but one was 
    // cut shorter then the other => not completely matching
    return indA === len1 && indB === len2;
    /**
     * Runtime: 76 ms, faster than 80.39% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
     * Memory Usage: 39.2 MB, less than 8.08% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
     */

}


/**
 * Example 1:
 *
 * Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
 * Output: true
 * Explanation:
 * word1 represents string "ab" + "c" -> "abc"
 * word2 represents string "a" + "bc" -> "abc"
 * The strings are the same, so return true.
 * Example 2:
 *
 * Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
 * Output: false
 * Example 3:
 *
 * Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
 * Output: true
 */