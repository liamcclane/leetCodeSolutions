/**1572. Matrix Diagonal Sum
 * Given a square matrix mat, return the sum of 
 * the matrix diagonals.
 * 
 * Only include the sum of all the elements on 
 * the primary diagonal and all the elements on 
 * the secondary diagonal that are not part 
 * of the primary diagonal.
 * 
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    // left to right
    // right to left
    let sum = 0;
    if(mat.length % 2 == 0) {
        // even matrix
        for(let inc = 0, dec = mat.length - 1; inc < mat.length; inc++, dec--) {
            sum += mat[inc][inc] + mat[dec][inc];
        }
    } else {
        // odd matrix
        for(let inc = 0, dec = mat.length - 1; inc < mat.length; inc++, dec--) {
            sum += mat[inc][inc] + mat[inc][dec];
            if(inc == dec) {
                sum -= mat[inc][dec];
            }
        }
    }
    return sum;
    /**
     * Runtime: 80 ms, faster than 55.15% of JavaScript online submissions for Matrix Diagonal Sum.
     * Memory Usage: 40.7 MB, less than 22.81% of JavaScript online submissions for Matrix Diagonal Sum.
     */
};
console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]]), " <= 25");
console.log(diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]), " <= 8");
/**
 * Example 1:
 * Input: mat = [[1,2,3],
 *               [4,5,6],
 *               [7,8,9]]
 * Output: 25
 * Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
 * Notice that element mat[1][1] = 5 is counted only once.
 * 
 * Example 2:
 * Input: mat = [[1,1,1,1],
 *               [1,1,1,1],
 *               [1,1,1,1],
 *               [1,1,1,1]]
 * Output: 8
 * 
 * Example 3:
 * Input: mat = [[5]]
 * Output: 5
 */