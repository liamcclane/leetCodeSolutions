/**1304. Find N Unique Integers Sum up to Zero
 * Given an integer n, return any array containing n unique integers such that they add up to 0.
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let ans = n % 2 == 1 ? [0] : [];
    for(let i = 1; i <= n/2; i++) {
        ans.push(i);
        ans.push(parseInt("-" + i));
    }    
    return ans;
    /**
     * Runtime: 80 ms, faster than 80.20% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.
     * Memory Usage: 39.6 MB, less than 12.03% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.
     */
};
/**
 * Example 1:
 * Input: n = 5
 * Output: [-7,-1,1,3,4]
 * Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
 * 
 * Example 2:
 * Input: n = 3
 * Output: [-1,0,1]
 * 
 * Example 3:
 * Input: n = 1
 * Output: [0]
 */
