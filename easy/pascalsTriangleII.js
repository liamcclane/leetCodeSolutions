/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex === 0) return [1];
    let prev = [1], count = 1;
    let curr = [];
    while (count <= rowIndex) {
        curr = [1];
        for (let i = 1; i < prev.length; i++) {
            curr.push(prev[i - 1] + prev[i]);
        }
        curr.push(1);
        count++;
        prev = curr;
    }
    return curr;
};
/**
 * Runtime: 100 ms, faster than 5.93% of JavaScript online submissions for Pascal's Triangle II.
 * Memory Usage: 33.9 MB, less than 51.80% of JavaScript online submissions for Pascal's Triangle II.
 */