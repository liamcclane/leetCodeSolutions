/**1424. Diagonal Traverse II
 * Given a list of lists of integers, nums, 
 * return all elements of nums in diagonal order as shown in the below images.
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
    let tuples = [];
    for (let row = 0; row < nums.length; row++) {
        for (let col = 0; col < nums[row].length; col++) {
            tuples.push([row, col, row + col]);
        }
    }
    tuples.sort((a, b) => {
        if (a[2] > b[2]) { return -1; }
        else if (a[2] < b[2]) { return 1; }
        else { return 0; }
    });
    // console.log(tuples);
    let rntArr = [];
    for (let i = tuples.length - 1 ; i >=0 ;i-- ) {
        const tup = tuples[i];
        // console.log(tup[0], "row", tup[1], "col", " =>", nums[tup[0]][tup[1]]);
        rntArr.push(nums[tup[0]][tup[1]]);
    }
    return rntArr;
    /**
     * Runtime: 340 ms, faster than 75.29% of JavaScript online submissions for Diagonal Traverse II.
     * Memory Usage: 74.3 MB, less than 5.88% of JavaScript online submissions for Diagonal Traverse II.
     */
};

/******BRAIN STORMING*******/
/**
 *              [[1,2,3],
 *               [4,5,6],
 *               [7,8,9],
 *               [0,10,11]]
 *              3X4
 *              0,0 | 1,0 | 0,1       equal 1
 *              2,0 | 1,1 | 0,2       equal 2
 *              3,0 | 2,1 | 1,2       equal 3
 *              3,1 | 2,2 | 3,2       equal 5
 *              
 * 
 * row 0 col 0
 * 
 * row 1 col 0
 * row 0 col 1
 * 
 * row 2 col 0
 * row 1 col 1
 * row 0 col 2
 * 
 * row 2 col 1
 * row 1 col 2
 * 
 * row 2 col 2
 * 
 */
/**
 * Example 1:
 * Input: nums = [[1,2,3],
 *                [4,5,6],
 *                [7,8,9]]
 * Output: [1,4,2,7,5,3,8,6,9]
 *
 * Example 2:
 * Input: nums = [[1, 2, 3,  4,    5],
 *                [6, 7],
 *                [8],
 *                [9, 10,11],
 *                [12, 13,14,15,16]]
 * Output: [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]
 * 
 * Example 3:
 * Input: nums = [[1,2,3],[4],[5,6,7],[8],[9,10,11]]
 * Output: [1,4,2,5,3,8,6,9,7,10,11]
 * 
 * Example 4:
 * Input: nums = [[1,2,3,4,5,6]]
 * Output: [1,2,3,4,5,6]
*/

// console.log(findDiagonalOrder([[1, 2, 3, 4, 5], [6, 7], [8], [9, 10, 11], [12, 13, 14, 15, 16]]));
// console.log([1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]);


// console.log(findDiagonalOrder([[1, 2, 3],
// [4],
// [5, 6, 7],
// [8],
// [9, 10, 11]]));
// console.log([1, 4, 2, 5, 3, 8, 6, 9, 7, 10, 11]);

// console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// console.log([1, 4, 2, 7, 5, 3, 8, 6, 9]);