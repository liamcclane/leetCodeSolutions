/**1539. Kth Missing Positive Number
 * Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
 * 
 * Find the kth positive integer that is missing from this array.
 *  
 * 
 * Example 1:
 * Input: arr = [2,3,4,7,11], k = 5
 * Output: 9
 * Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
 * 
 * Example 2:
 * Input: arr = [1,2,3,4], k = 2
 * Output: 6
 * Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {

    let missingNums = [];
    let max = Math.max(...arr);
    let i = 1
    for (; i <= max; i++) {
        if (!(arr.includes(i))) {
            missingNums.push(i);
        }
    }

    while (k > missingNums.length) {
        missingNums.push(i);
        i++;
    }

    return missingNums[k - 1];

};
/**
 * Runtime: 88 ms, faster than 68.18% of JavaScript online submissions for Kth Missing Positive Number.
 * Memory Usage: 37.6 MB, less than 28.57% of JavaScript online submissions for Kth Missing Positive Number.
 */