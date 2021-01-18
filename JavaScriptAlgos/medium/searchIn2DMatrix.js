/**74. Search a 2D Matrix
 * Write an efficient algorithm that searches for a value in an m x n matrix. 
 * This matrix has the following properties:
 * 
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let n = matrix.length,
        m = n > 0 ? matrix[0].length : [];
    const findRow = () => {
        let front, back;
        for (let i = 0; i < n; i++) {
            front = matrix[i][0];
            back = matrix[i][m - 1];
            if (back < target) {
                continue;
            } else {
                return matrix[i];
            }
        }
        return false;
    };
    let arr = findRow();
    if (arr === false) { return false; }
    for (let i = 0; i < m; i++) {
        if (arr[i] > target) { return false; }
        else if (arr[i] === target) { return true; }
    }
    /**
     * Runtime: 80 ms, faster than 61.73% of JavaScript online submissions for Search a 2D Matrix.
     * Memory Usage: 38.8 MB, less than 53.28% of JavaScript online submissions for Search a 2D Matrix.
     */
};