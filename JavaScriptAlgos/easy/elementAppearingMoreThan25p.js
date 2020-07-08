/**1287. Element Appearing More Than 25% In Sorted Array
 * Given an integer array sorted in non-decreasing order, 
 * there is exactly one integer in the array that occurs more than 25% of the time.
 * 
 * Return that integer.
 * 
 * Example 1:
 * 
 * Input: arr = [1,2,2,6,6,6,6,7,10]
 * Output: 6
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    if(arr.length == 1) {return arr[0];}
    let count = 1, val = arr[0], len = arr.length, magicNum = len*0.25;
    for(let i = 1; i < len; i++){
        if(arr[i] === val) {
            count++
        } else {
            count = 1
            val = arr[i];
        }
        
        if(count > magicNum) return val;
    }
};
/*
 * Runtime: 68 ms, faster than 53.85% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.
 * Memory Usage: 36.5 MB, less than 55.29% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.
*/