/**118. Pascal's Triangle
 * output a nested array that represents pascals triangle
 * Input: 5
 * Output:
 * [
 *     [1],
 *     [1, 1],
 *     [1, 2, 1],
 *     [1, 3, 3, 1],
 *     [1, 4, 6, 4, 1]
 * ]
* @param {number} numRows
* @return {number[][]}
*/
var generate = function (numRows) {
    if (numRows === 0) return [];
    let tri = [[1]];
    for (let i = 1; i < numRows; i++) {
        let row = [1];
        let arr = tri[i-1];
        for(let j = 1; j < arr.length; j++) {
            let sum = arr[j-1] + arr[j];
            row.push(sum);
        }
        row.push(1);
        tri.push(row);
    }
    return tri;
};

console.log(generate(1));
console.log();
console.log(generate(2));
console.log();
console.log(generate(3));
console.log();
console.log(generate(4));
console.log();
console.log(generate(5));
console.log();
console.log(generate(6));
/**
 * Runtime: 92 ms, faster than 7.09% of JavaScript online submissions for Pascal's Triangle.
 * Memory Usage: 33.3 MB, less than 80.52% of JavaScript online submissions for Pascal's Triangle.
 */
/**tags for later look up
 * nestedForLoops
 */