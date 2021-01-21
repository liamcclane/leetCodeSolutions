/**1679. Max Number of K-Sum Pairs
 * You are given an integer array nums and an integer k.
 * 
 * In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,3,4], k = 5
 * Output: 2
 * Explanation: Starting with nums = [1,2,3,4]:
 * - Remove numbers 1 and 4, then nums = [2,3]
 * - Remove numbers 2 and 3, then nums = []
 * There are no more pairs that sum up to 5, hence a total of 2 operations.
 * Example 2:
 * 
 * Input: nums = [3,1,3,4,3], k = 6
 * Output: 1
 * Explanation: Starting with nums = [3,1,3,4,3]:
 * - Remove the first two 3's, then nums = [1,4,3]
 * There are no more pairs that sum up to 6, hence a total of 1 operation.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {

    let compliments = {}, count = 0;

    for (let val of nums) {
        if (val >= k) { continue; }
        let comp = k - val;
        if (val in compliments) {
            compliments[val]--;
            count++;
            if (compliments[val] === 0) {
                delete compliments[val];
            }
        } else if (comp in compliments) {
            compliments[comp]++;
        } else {
            compliments[comp] = 1;
        }
    }

    return count;
    /**
     * Runtime: 148 ms, faster than 73.21% of JavaScript online submissions for Max Number of K-Sum Pairs.
     * Memory Usage: 54 MB, less than 45.61% of JavaScript online submissions for Max Number of K-Sum Pairs.
     */
};

const firstTry = (nums, k) => {
    let compliments = { 'half': 0 }, count = 0,
        half = k % 2 == 0 ? k / 2 : k + 1;

    for (let val of nums) {
        if (val >= k) { continue; }
        let comp = k - val;
        if (comp === half) {
            compliments['half']++;
            continue;
        }
        if (val in compliments) {
            compliments[val]--;
            count++;
            if (compliments[val] === 0) {
                delete compliments[val];
            }
        } else if (comp in compliments) {
            compliments[comp]++;
        } else {
            compliments[comp] = 1;
        }

    }

    count += Math.floor(compliments['half'] / 2);

    return count;
    /**
     * Runtime: 132 ms, faster than 82.35% of JavaScript online submissions for Max Number of K-Sum Pairs.
     * Memory Usage: 51.7 MB, less than 59.77% of JavaScript online submissions for Max Number of K-Sum Pairs.
     */
}