/**1422. Maximum Score After Splitting a String
 * Given a string s of zeros and ones, return the 
 * maximum score after splitting the string into two non-empty 
 * substrings (i.e. left substring and right substring).
 * 
 * The score after splitting a string is the number of zeros in 
 * the left substring plus the number of ones in the right substring.
 * 
 * Example 1:
 * Input: s = "011101"
 * Output: 5 
 * Explanation: 
 *      All possible ways of splitting s into two non-empty substrings are:
 *      left = "0" and right = "11101", score = 1 + 4 = 5 
 *      left = "01" and right = "1101", score = 1 + 3 = 4 
 *      left = "011" and right = "101", score = 1 + 2 = 3 
 *      left = "0111" and right = "01", score = 1 + 1 = 2 
 *      left = "01110" and right = "1", score = 2 + 1 = 3
 *      // no it's not binary, you are just counting the amount of one on the right of the split 
 *      // and then counting the amount of zeros on the left side of the split
 *      // then add those two numbers
 *      // ya easier than it looks but I am splitting weird or something idk 
 *      // OHHHHHH! got it okay let's see whats happening
 * 
 * Example 2:
 * Input: s = "00111"
 * Output: 5
 * Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5
 * 
 * Example 3:
 * Input: s = "1111"
 * Output: 3
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let arrZeroCount = [], arrOneCount = [], count = 0, len = s.length;

    // one loop to count the amount of zeros at that current index
    for (let i = 0; i < len; i++) {
        if (s[i] == "0") {
            count++;
        }
        arrZeroCount.push(count);
    }
    // console.log(arrZeroCount);
    // console.log(count, "amount of zeros");
    // reset count;
    count = 0;

    // set backwards thought the s string to count the amount of ones 
    // from that index looking ahead
    for (let i = len - 1; i > 0; i--) {
        if (s[i] == "1") { count++; }
        arrOneCount.unshift(count);
    }
    // console.log(count + " amount of ones");
    // console.log(arrOneCount);
    // console.log([4,3,2,1,1]);
    // now we will use count as a holder for max
    count = 0;

    for (let i = 0; i < len - 1; i++) {
        if (arrZeroCount[i] + arrOneCount[i] > count) {
            count = arrZeroCount[i] + arrOneCount[i];
        }
    }
    return count;
    /** 
     * Runtime: 84 ms, faster than 74.83% of JavaScript online submissions for Maximum Score After Splitting a String.
     * Memory Usage: 37.6 MB, less than 51.02% of JavaScript online submissions for Maximum Score After Splitting a String.
     */
};
// console.log(maxScore("011101"), " should be 5");
// console.log();
// console.log(maxScore("00111"), " should be 5");
// console.log();
// console.log(maxScore("1111"), " should be 3");
// console.log();
// console.log(maxScore("00"), " should be 1");