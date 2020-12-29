/**1337. The K Weakest Rows in a Matrix
 * 
 * Given a m * n matrix mat of ones (representing soldiers) 
 * and zeros (representing civilians), return the indexes 
 * of the k weakest rows in the matrix ordered from the 
 * weakest to the strongest.
 * 
 * A row i is weaker than row j, if the number of soldiers 
 * in row i is less than the number of soldiers in row j, 
 * or they have the same number of soldiers but i is less than j. 
 * Soldiers are always stand in the frontier of a row, that 
 * is, always ones may appear first and then zeros.
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    let dict = {}, ans = [];
    for (let i = 0; i < mat.length; i++) {
        let count = 0, arr = mat[i];
        for (let val of arr) {
            if (val === 1) {
                count++;
            }
        }
        dict[i] = count;
    }
    let keyVals = Object.entries(dict).sort((a, b) => a[1] - b[1]);

    return keyVals.slice(0, k).map(ele => ele[0]);
    /**
     * Runtime: 76 ms, faster than 96.33% of JavaScript online submissions for The K Weakest Rows in a Matrix.
     * Memory Usage: 40.9 MB, less than 15.18% of JavaScript online submissions for The K Weakest Rows in a Matrix.
     */
};