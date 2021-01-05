/**1329. Sort the Matrix Diagonally
 * A matrix diagonal is a diagonal line of cells starting from some 
 * cell in either the topmost row or leftmost column and going in the 
 * bottom-right direction until reaching the matrix's end. 
 * For example, the matrix diagonal starting from mat[2][0], 
 * where mat is a 6 x 3 matrix, includes cells 
 * mat[2][0], mat[3][1], and mat[4][2].
 * 
 * Given an m x n matrix mat of integers, sort each matrix diagonal in 
 * ascending order and return the resulting matrix.
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
    let m = mat.length, n = mat[0].length,
        diagonalMat = [];
    /**
     * 
     * @param {number} i = row 
     * @param {number} j = col
     */
    const moveDiagFill = (i, j) => {
        let subArr = [];
        for (let row = i, col = j; row < m && col < n;
            row++, col++) {
            subArr.push(mat[row][col]);
        }
        diagonalMat.push(subArr);
    }
    /**
     * 
     * @param {number} i = row 
     * @param {number} j = col
     */
    const overRideMatSpots = (i, j) => {
        /**
         * [*, 3, 1, 1],
         * [2, *, 1, 2],
         * [1, 1, *, 2]
         */
        for (let row = i, col = j; row < m && col < n;
            row++, col++) {
            mat[row][col] = diagonalMat.pop();
        }
    }
    /**
     * 
     * @param {function name(row, col) {}} doSomething 
     */
    const moveUpRightBorder = (doSomething) => {
        /**
         * [*, 3, 1, 1],
         * [*, 2, 1, 2],
         * [*, 1, 1, 2]
         */
        for (let i = m - 1; i >= 0; i--) {
            doSomething(i, 0);
        }
        /**
         * [3, *, *, *],
         * [2, 2, 1, 2],
         * [1, 1, 1, 2]
         */
        for (let i = 1; i < n; i++) {
            doSomething(0, i);
        }
    }

    // fill in diagonalMat 
    moveUpRightBorder(moveDiagFill);
    // sort
    diagonalMat.map(ele => (ele.sort((a, b) => a - b)));
    // use reduce to flatten the nested arr
    diagonalMat = diagonalMat.reduce((acc, iter) => acc.concat(iter), []);
    // revered it to pop out 
    diagonalMat.reverse();
    moveUpRightBorder(overRideMatSpots);

    return mat;
    /**
     * Runtime: 96 ms, faster than 86.19% of JavaScript online submissions for Sort the Matrix Diagonally.
     * Memory Usage: 45.4 MB, less than 21.43% of JavaScript online submissions for Sort the Matrix Diagonally.
     */
};
/**
 * Example 1
 * Input:
 * mat = [
 *     [3, 3, 1, 1],
 *     [2, 2, 1, 2],
 *     [1, 1, 1, 2]
 * ];
 * Output:
 * [
 *     [1, 1, 1, 1],
 *     [1, 2, 2, 2],
 *     [1, 2, 3, 3]
 * ];
 *  * Example 2
 * mat2 = [
 *     [3, 5, 66, 7],
 *     [44, 5, 6, 8],
 *     [5, 6, 1, 0]
 * ]
 * ans = [
 *     [1, 0, 8, 7],
 *     [6, 3, 5, 66],
 *     [5, 44, 5, 6]
 * ];
 */