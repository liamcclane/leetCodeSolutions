/**Sort Array By Parity 905
 * Given an array A of non-negative integers, return an array consisting 
 * of all the even elements of A, followed by all the odd elements of A.
 * 
 * You may return any answer array that satisfies this condition.
 * 
 * Example 1:
 * Input: [3,1,2,4]
 * Output: [2,4,3,1]
 * The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let ansEven = [], ansOdd = [];
    
    for(let i = 0; i < A.length; i++) {
        if(A[i]% 2 == 0) {
            ansEven.push(A[i]);
        } else {
            ansOdd.push(A[i]);
        }
    }
    
    return ansEven.concat(ansOdd);
    /**
     * Runtime: 180 ms, faster than 5.43% of JavaScript online submissions for Sort Array By Parity.
     * Memory Usage: 38.9 MB, less than 55.72% of JavaScript online submissions for Sort Array By Parity.
     */
};