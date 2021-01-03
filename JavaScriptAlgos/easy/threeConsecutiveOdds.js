/**1550. Three Consecutive Odds
 * Given an integer array arr, return true if there are three consecutive 
 * odd numbers in the array. Otherwise, return false.
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    if (arr.length < 2) { return false; }
    let len = arr.length;
    const isOdd = num => (num % 2 === 1);
    for (let i = 2; i < len; i++) {
        if (isOdd(arr[i - 2]) && isOdd(arr[i - 1]) && isOdd(arr[i])) {
            return true;
        }
    }
    return false;
    /**
     * Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Three Consecutive Odds.
     * Memory Usage: 38.6 MB, less than 53.08% of JavaScript online submissions for Three Consecutive Odds.
     */
};
/**
 * Example 1:
 * Input: arr = [2,6,4,1]
 * Output: false
 * Explanation: There are no three consecutive odds.
 *
 * Example 2:
 * Input: arr = [1,2,34,3,4,5,7,23,12]
 * Output: true
 * Explanation: [5,7,23] are three consecutive odds.
 */