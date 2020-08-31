/**263. Ugly Number 
 * Write a program to check whether a given number is an ugly number.
 * 
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 * 
 * Example 1:
 * 
 * Input: 6
 * Output: true
 * Explanation: 6 = 2 × 3
 * Example 2:
 * 
 * Input: 8
 * Output: true
 * Explanation: 8 = 2 × 2 × 2
 * Example 3:
 * 
 * Input: 14
 * Output: false 
 * Explanation: 14 is not ugly since it includes another prime factor 7.
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
    let arr = [];
    let numCopy = num;
    for (let i = 2; i <= num; i++) {
        console.log(i);
        while (numCopy % i === 0 && numCopy > 0) {
            numCopy = numCopy / i;
            arr.push(i);
        }
    }
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === 2 ||
            arr[i] === 3 ||
            arr[i] === 5) {
                // console.log("herer")
            arr[i] = 0;
        }
    }
    console.log(arr);
    for (let val of arr) {
        if (val != 0) return false
    }
    return true;
};
// console.log(isUgly(8));
// console.log();
// console.log(isUgly(6));
// console.log();
// console.log(isUgly(14));

function isUgly2(num){
    if(num<=0)return false;
    if(num===1)return true;
    let arr = [];
    let numCopy = num;
    for (let i = 2; i <=numCopy; i++) {
        // console.log(i);
        while (numCopy % i === 0 && numCopy > 0) {
            numCopy = numCopy / i;
            arr.push(i);
        }
        if(numCopy === 0) break;
    }
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === 2 ||
            arr[i] === 3 ||
            arr[i] === 5) {
                // console.log("herer")
            arr[i] = 0;
        }
    }
    console.log(arr);
    for (let val of arr) {
        if (val != 0) return false
    }
    return true;
}
// console.log(isUgly2(8));
// console.log();
// console.log(isUgly2(6));
// console.log();
console.log(isUgly(937351770));
console.log();
console.log(isUgly(1369479539));
/**tags for late look up
 * unfinished
 * timeLimitError
 * nestedForWhile
 */