/**1636. Sort Array by Increasing Frequency
 * Given an array of integers nums, sort the array in increasing order 
 * based on the frequency of the values. 
 * If multiple values have the same frequency, 
 * sort them in decreasing order.
 * 
 * Return the sorted array.
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let dict = {}, len = nums.length, str="";
    // build the dict as a count
    for(let i = 0; i < len; i++) {
        let val = nums[i];
        if(val in dict) {
            dict[val]++
        } else {
            dict[val] = 1;
        }
    }
    // sort the key,val pairs using sort
    // the ternary operator takes care of keys that 
    // have the same frequencies, thus sort by the lesser key
    // while parsing it back to a number
    let arr = Object.entries(dict)
        .sort((a,b) => 
        (
            a[1] - b[1] === 0 
            ? (parseInt(a[0]) -  parseInt(b[0])) 
            : a[1] - b[1]
        ));
    // I looped though the [key,val] of the sorted array
    // and repeatedly appended to a string using .repeat()
    // to reduce time
    // I had to leave the space to take into account numbers
    // with multiple digits
    for(let val of arr) {
        str += (val[0]+" ").repeat(val[1]);
    }
    // creating another array with built in function 
    // .split(" ") on the string, and parsing it into 
    // type number
    let ans = str.split(" ").map(ele => parseInt(ele));
    // this pop has to happen for the last " " white space at the 
    // end of the string we built on line 39
    ans.pop();
    console.log(ans); // take this part out for submission
    return ans;
    /**
     * Runtime: 92 ms, faster than 89.13% of JavaScript online submissions for Sort Array by Increasing Frequency.
     * Memory Usage: 41.7 MB, less than 26.81% of JavaScript online submissions for Sort Array by Increasing Frequency.
     */
};
frequencySort([13,12,12,12,12,22,22,12,11,11]);
/**
 * Example 1:
 * Input: nums = [1,1,2,2,2,3]
 * Output: [3,1,1,2,2,2]
 * Explanation: 
 * '3' has a frequency of 1, 
 * '1' has a frequency of 2, and 
 * '2' has a frequency of 3.
 * 
 * Example 2:
 * Input: nums = [2,3,1,3,2]
 * Output: [1,3,3,2,2]
 * Explanation: 
 * '2' and '3' both have a frequency of 2, 
 * so they are sorted in decreasing order.
 * 
 * Example 3:
 * Input: nums = [-1,1,-6,4,5,-6,1,4,1]
 * Output: [5,-1,4,4,-6,-6,1,1,1]
 */