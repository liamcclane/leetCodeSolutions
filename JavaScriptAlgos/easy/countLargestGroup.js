/**1399. Count Largest Group
 * Given an integer n. 
 * Each number from 1 to n is grouped according to the sum of its digits. 
 * 
 * Return how many groups have the largest size.
 * 
 * Example 1:
 * 
 * Input: n = 13
 * Output: 4
 * Explanation: 
 *    There are 9 groups in total, they are grouped 
 *    according sum of its digits of numbers from 1 to 13:
 *    [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9]. 
 *    There are 4 groups with largest size.
 * ***********
 * Example 2:
 * 
 * Input: n = 2
 * Output: 2
 * Explanation: There are 2 groups [1], [2] of size 1.
 * ************
 * Example 3:
 * 
 * Input: n = 15
 * Output: 6
 * ************
 * Example 4:
 * 
 * Input: n = 24
 * Output: 5
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
    // this dictionary's keys are the sums the integers add up to
    // the values of this dict is an array of numbers who's individual integers add up to it.
    let dict = {};

    // in this for loop we take the number and turn it into a string
    // this loop though the "letters" parsing them back to type number and added 
    // up the individual "letters" to the sum
    // then add or whatnot to the dictionary
    for (let i = 1; i <= n; i++) {
        let strN = i.toString();
        let sum = 0;
        for (let letter of strN) {
            sum += Number(letter);
        }
        if(sum in dict) {
            dict[sum].push(i);
        } else {
            dict[sum] = [i];
        }
    }
    // console.log('dict');
    // console.log(dict);
    let maxLen = 0, count = 0;
    // this loop looks though the dict looking for the longest val array
    for(let key in dict) {
        if(dict[key].length > maxLen) maxLen = dict[key].length;
    }
    // this loop counts how many of them are at that max
    for(let key in dict) {
        if(dict[key].length === maxLen) count++;
    }
    return count;
};

console.log(countLargestGroup(13)); // returns 4
console.log(countLargestGroup(2)); // returns 2
console.log(countLargestGroup(15)); // returns 6
console.log(countLargestGroup(24)); // returns 5
/**
 * Runtime: 64 ms, faster than 72.28% of JavaScript online submissions for Count Largest Group.
 * Memory Usage: 38.4 MB, less than 100.00% of JavaScript online submissions for Count Largest Group.
 */