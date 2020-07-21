/**888. Fair Candy Swap
 * Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th 
 * bar of candy that Alice has, and B[j] is the size of the j-th bar of candy that Bob has.
 * 
 * Since they are friends, they would like to exchange one candy bar each so that after the exchange, 
 * they both have the same total amount of candy.  (The total amount of candy a person has is the sum 
 * of the sizes of candy bars they have.)
 * 
 * Return an integer array ans where ans[0] is the size of the candy bar that Alice must 
 * exchange, and ans[1] is the size of the candy bar that Bob must exchange.
 * 
 * If there are multiple answers, you may return any one of them.  It is guaranteed an answer exists.
 * 
 * Example 1:
 * Input: A = [1,1], B = [2,2]
 * Output: [1,2]
 * 
 * Example 2:
 * Input: A = [1,2], B = [2,3]
 * Output: [1,2]
 * 
 * Example 3:
 * Input: A = [2], B = [1,3]
 * Output: [2,3]
 * Example 4:
 * 
 * Input: A = [1,2,5], B = [2,4]
 * Output: [5,4]
 *  
 * 
 * Note:
 * 1 <= A.length <= 10000
 * 1 <= B.length <= 10000
 * 1 <= A[i] <= 100000
 * 1 <= B[i] <= 100000
 * It is guaranteed that Alice and Bob have different total amounts of candy.
 * It is guaranteed there exists an answer.
 * @param {number[]} A 
 * @param {number[]} B 
 * @return {number[]}  where answer array 0-ith element is what needs to be swapped from A's list and 
 *                     1-th element is the needs to be swapped with B's list to make them even
 */
var candySwap = (A, B) => {
    /**
     * so for me, I initially want to just sum up both of the given arrays
     * 
     * then find their difference....
     * then iterate though A and finding the difference needed to balance out the arrays and see if that exist in B
     */
    // find the sums of both the given arrays
    let sumA = 0, sumB = 0;
    A.map(ele => sumA += ele);
    B.map(ele => sumB += ele);
    // console.log("******",sumA, " sumA line 62");
    // console.log("******",sumB, " sumB line 63");
    
    /**
     * this for loop looks at each element of A, and cross checks with each element of B
     * by subtracting the sum of A with the element A[i] that we are on, saves it in a variable named
     * newSum,
     * then by iterating though each element of B
     * we will ADD B[j] to the newSumA
     * and check to see if the newSumB -> +A[i] -B[j] are equivalent (thank you lol)
     */ 
    // :) 
    for(let i = 0; i < A.length; i++) {
        let newSum = sumA - A[i];
        // console.log("\t\t\t\t",newSum)
        for(let j = 0; j < B.length; j++) {
            let newSumA = newSum + B[j];
            let newSumB = sumB + A[i] - B[j];
            // console.log(newSumB, "newSumB\t", A[i], "A[i]",B[j], "B[j]\t", newSumA, " newSumA");
            if(newSumA === newSumB) {
                return [A[i], B[j]];
            }
        }
    }
}
/** 
 * Runtime: 768 ms, faster than 31.33% of JavaScript online submissions for Fair Candy Swap.
 * Memory Usage: 42 MB, less than 35.00% of JavaScript online submissions for Fair Candy Swap.
 */

// // example 1: [1, 2]
console.log(candySwap([1, 1], [2, 2]));
// // example 2: [1, 2]
console.log(candySwap([1,2], [2,3]));
// // example 3: [2, 3]
console.log(candySwap([2], [1,3]));
// // example 4: [5, 4]
console.log(candySwap([1,2,5], [2,4]));