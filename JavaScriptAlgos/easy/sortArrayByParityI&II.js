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
var sortArrayByParity = function (A) {
    let ansEven = [], ansOdd = [];

    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 == 0) {
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


/**922. Sort Array By Parity II
 * Given an array A of non-negative integers, half of the 
 * integers in A are odd, and half of the integers are even.
 * 
 * Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
 * 
 * You may return any answer array that satisfies this condition.
 * 
 * Example 1:
 * Input: [4,2,5,7]
 * Output: [4,5,2,7]
 * Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    let odds = [], evens = [], aLen = A.length;
    for (let i = 0; i < aLen; i++) {
        if (A[i] % 2 == 0) {
            evens.push(A[i]);
        } else { odds.push(A[i]); }
    }

    for (let i = 0, j = 0; j < aLen / 2; i += 2, j++) {
        A[i] = evens[j];
        A[i + 1] = odds[j];
    }
    return A;
};
/**
 * Runtime: 156 ms, faster than 22.07% of JavaScript online submissions for Sort Array By Parity II.
 * Memory Usage: 43.6 MB, less than 45.69% of JavaScript online submissions for Sort Array By Parity II.
 */