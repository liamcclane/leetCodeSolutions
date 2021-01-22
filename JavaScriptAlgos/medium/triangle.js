/**120. Triangle
 * Given a triangle array, return the minimum path sum from top to bottom.
 * 
 * For each step, you may move to an adjacent number of the row below. 
 * More formally, if you are on index i on the current row, 
 * you may move to either index i or index i + 1 on the next row.
 *  
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {

    for (let row = triangle.length - 2; row >= 0; row--) {
        for (let ind = 0; ind < triangle[row].length; ind++) {
            triangle[row][ind] += Math.min(triangle[row + 1][ind], triangle[row + 1][ind + 1]);
        }
    }
    return triangle[0][0];
    /**
     * Runtime: 76 ms, faster than 90.24% of JavaScript online submissions for Triangle.
     * Memory Usage: 39.1 MB, less than 62.19% of JavaScript online submissions for Triangle.
     */

};
/**
 * Example 1:
 * Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
 * Output: 11
 * Explanation: The triangle looks like:
 *    2
 *   3 4
 *  6 5 7
 * 4 1 8 3
 * The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11.
 * 
 * Example 2:
 * Input: triangle = [[-10]]
 * Output: -10
 */
/**
 * recursive algo
 * @param {number[][]} triangle 
 */
const topDownChoosingMin = triangle => {
    const helper = (row = 0, ind = 0, sum = 0) => {
        if (row === triangle.length) { return sum; }
        if (triangle[row][ind] > triangle[row][ind + 1]) {
            sum += triangle[row][ind + 1];
            return helper(row + 1, ind + 1, sum);
        } else {
            sum += triangle[row][ind];
            return helper(row + 1, ind, sum);
        }
    }
    return helper();
}

/**
 * recursive algo
 * @param {number[][]} triangle 
 */
const topDownMethodTimesOut = (triangle) => {
    const helper = (row = 0, ind = 0, sum = 0) => {
        if (row === triangle.length) { return sum; }
        sum += triangle[row][ind];
        return Math.min(helper(row + 1, ind, sum), helper(row + 1, ind + 1, sum));
    }
    return helper();
}