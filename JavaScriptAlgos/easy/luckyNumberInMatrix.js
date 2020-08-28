/**LUCKY NUMBERS IN A MATRIX - 1380
 * Given a m * n matrix of distinct numbers, 
 * return all lucky numbers in the matrix in any order.
 *
 * A lucky number is an element of the matrix such that 
 * it is the minimum element in its row and maximum in its column.
 * 
 * 
 * Example 1:
 * 
 * Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
 * Output: [15]
 * Explanation: 15 is the only lucky number since it is the minimum 
 * in its row and the maximum in its column
 * 
 * Example 2:
 * 
 * Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
 * 
 * [
 *  [1, 10, 4, 2],
 *  [9,  3, 8, 7],
 *  [15,16,17,12]
 * ]
 * 
 * Output: [12]
 * Explanation: 12 is the only lucky number since it is the minimum 
 * in its row and the maximum in its column.
 * 
 * Example 3:
 * 
 * Input: matrix = [[7,8],[1,2]]
 * Output: [7]
 *  
 * 
 * Constraints:
 * 
 * m == mat.length
 * n == mat[i].length
 * 1 <= n, m <= 50
 * 1 <= matrix[i][j] <= 10^5.
 * All elements in the matrix are distinct.
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function luckyNum(matrix) {

    let [m, n] = [matrix.length, matrix[0].length];

    // this variable is going to hold nested array where the first element 
    // is the min value of each matrix's rows minimum value
    // then the next two elements are the index of that min value
    let arrMin = [];

    // this for loop fill the arrMin variable
    for (let i = 0; i < m; i++) {
        let min = Math.min(...matrix[i]);
        arrMin.push([min, i, matrix[i].indexOf(min)]);
    }

    // this for loop steps though the matrix vertically
    // it creates an array and fills with all the coulmn of the martix then find that max
    // 
    for (let i = 0; i < n; i++) {
        let arr = [];
        for (let j = 0; j < m; j++) {
            arr.push(matrix[j][i]);
        }
        max = Math.max(...arr);
        for (let j = 0; j < arrMin.length; j++) {
            if (arrMin[j][2] === i) {
                if (arrMin[j][0] === max) {
                    return [max];
                };
            }
        }
    }
    return [];
    /**
     * Runtime: 84 ms
     * Memory Usage: 39.3 MB
     * Your runtime beats 69.23 % of javascript submissions.
     * Your memory usage beats 53.23 % of javascript submissions.
     */
}
let ex1 = [
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17]
]; // 15
let ex2 = [
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12]
]; // 12
let ex3 = [
    [7, 8],
    [1, 2]
]; // 7


console.log(luckyNum(ex1));
console.log(luckyNum(ex2));
console.log(luckyNum(ex3));

/**tags for later look up
 * nestedForLoops
 */

