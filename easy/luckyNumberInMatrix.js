/**
 * LUCKY NUMBERS IN A MATRIX - 1380
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
var luckyNumbers  = function(matrix) {
    let dict = {};
    let m = matrix.length, n = matrix[0].length;
    // let arr = [];
    // dict['val'] = matrix[0][0];
    // dict['position'] = [0,0];
    // console.log(dict);
    for(let i = 0; i < m; i++) {
        dict[`row${i}`] = {};
        dict[`row${i}`][`${Math.min(...matrix[i])}`] = [0,0];
        // console.log(Math.min(...matrix[i]));
        for(let j = 0; j < n; j++) {

            if(matrix[i][j]===Math.min(...matrix[i])){
                dict[`row${i}`][`${Math.min(...matrix[i])}`] = [i,j];
                // console.log(`i : ${i} \t j: ${j}`);
            }


            // if(matrix[i][j] < dict['val']) {
            //     dict['val'] = matrix[i][j];
            //     dict['position'] = [i,j]; 
            // }
            // console.log(`i : ${i} \t j: ${j}`);
            // console.log();
        }
    }

    console.log(dict);
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m;j++) {
            // if(matrix[j][i] > Object.keys(dict[`row${i}`])[0].toString()){
            //     dict[`row${i}`] = "empty";
            // }
        }
    }
    console.log(Object.keys(dict[`row0`])[0]);

    console.log(dict);
    // return dict
};

let ex1 = [[3,7,8],[9,11,13],[15,16,17]]; // 15
let ex2 = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]; // 12
let ex3 = [[7,8],[1,2]]; // 7

console.log(luckyNumbers(ex2));