/**962. Maximum Width Ramp
 * Given an array A of integers, a ramp is a tuple (i, j) for which i < j and A[i] <= A[j].  
 * The width of such a ramp is j - i.
 * 
 * Find the maximum width of a ramp in A.  
 * If one doesn't exist, return 0.
 * 
 * Example 1:
 * Input: [6,0,8,2,1,5]
 * Output: 4
 * Explanation: 
 * The maximum width ramp is achieved at (i, j) = (1, 5): A[1] = 0 and A[5] = 5.
 * 
 * Example 2:
 * Input: [9,8,1,0,1,9,4,0,4,1]
 * Output: 7
 * Explanation: 
 * The maximum width ramp is achieved at (i, j) = (2, 9): A[2] = 1 and A[9] = 1.
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function (A) {
    let max = 0, len = A.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (A[j] - A[i] >= 0) {
                max = (j - i) > max ? (j - i) : max;
            }
        }
    }
    return max;
    /**
     * Runtime: 6716 ms, faster than 8.20% of JavaScript online submissions for Maximum Width Ramp.
     * Memory Usage: 43.5 MB, less than 47.54% of JavaScript online submissions for Maximum Width Ramp.
     */
};