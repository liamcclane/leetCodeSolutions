/** Reverse String II - 541
 * 
 * Given a string and an integer k, 
 * you need to reverse the first k characters 
 * for every 2k characters counting from the start of the string. 
 * If there are less than k characters left, reverse all of them. 
 * If there are less than 2k but greater than or equal to k characters, 
 * then reverse the first k characters and left the other as original.
 * 
 * Example:
 * Input: s = "abcdefg", k = 2
 * Output:    "bacdfeg"
 * 
 * Example:
 * Input: s = "aabccddeffgghiij", k = 5;
 * Output:    "ccbaaddeffiihggj";
 * 
 * Example:
 * Input: s = "aabccddeffgghiijjk", k = 5;
 * Output:    "ccbaaddeffiihggjjk";
 * 
 * Example:
 * Input: s = "aaBccddEf" k = 5;
 * Output:    "ccBaaddEf";
 * 
 * Example:
 * Input: s = "aaBccddEffggHiijjKll", k = 5;
 * Output:    "ccBaaddEffiiHggjjKll";
 * 
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    const helper = (inner) => {
        let arr = inner.split("");
        for (let i = 0, j = inner.length - 1;
            i <= j; i++, j--) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.join("");
    }

    let ans = "", ind = 0, sLen = s.length;
    for (; ind < sLen; ind += k) {
        if (ind + (2 * (k - 1)) < sLen) {
            ans += helper(s.slice(ind, ind + k));
            ind += k;
            ans += s.slice(ind, ind + k);
        } else if (ind + (k - 1) > sLen) {
            ans += helper(s.slice(ind, sLen));
            break;
        } else {
            ans += helper(s.slice(ind, ind + k));
            ind += k;
            ans += s.slice(ind, sLen);
            break;
        }
    }
    return ans;
    /**
     * Runtime: 88 ms, faster than 46.31% of JavaScript online submissions for Reverse String II.
     * Memory Usage: 38.6 MB, less than 72.54% of JavaScript online submissions for Reverse String II.
     */
}
console.log(reverseStr("aabccddeffgghiij", 5));
console.log("ccbaaddeffiihggj");