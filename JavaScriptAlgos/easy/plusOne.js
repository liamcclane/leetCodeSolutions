/**66. Plus One
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 * 
 * The digits are stored such that the most significant digit is at the head of the list, 
 * and each element in the array contain a single digit.
 * 
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 * 
 * Example 1:
 *      Input: [1,2,3]
 *      Output: [1,2,4]
 *      Explanation: The array represents the integer 123.
 * 
 * Example 2:
 *      Input: [4,3,2,1]
 *      Output: [4,3,2,2]
 *      Explanation: The array represents the integer 4321.
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length - 1]++;
    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] === 10) {
            digits[i] = 0;
            if(i===0){
                digits.unshift(1);
            } else {
                digits[i-1]++;
            }
        }
    }
    return digits;
};
console.log(plusOne([7,8,9]));
console.log(plusOne([9,9]));

// i think it's important to end with a nine on one example because in that case, 
// we change the index before value
// you're right!!
// I think after we increase, loop thought to see if any of them are === 10
// if they are change the one in front of it.... 
// which might be tricky with 999... agreed
// can we use a if statement for yhe last index and if it 9 start moving backwards?
// Or, will that invoke several if's?

// I like the move backwards thing.... (thumbs up)
// lol YES Perf
// we'll be in contact and keep at it. Today Felt good 
// RitzCollaboration

/**
 * Runtime: 68 ms
 * Memory Usage: 33.7 MB
 * Your runtime beats 90.68 % of javascript submissions.
 * Your memory usage beats 58.03 % of javascript submissions.
 */