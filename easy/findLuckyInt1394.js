/**1394. Find Lucky Integer in an Array
 * Share
 * Given an array of integers arr, 
 * a lucky integer is an integer which has a frequency in the array equal to its value.
 * 
 * Return a lucky integer in the array. 
 * If there are multiple lucky integers return the largest of them. 
 * If there is no lucky integer return -1.
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let ans = -1;
    let dict = {};

    for (let val of arr) {
        if (val in dict) {
            dict[val]++;
        } else {
            dict[val] = 1;
        }
    }

    for (let [key, val] of Object.entries(dict)) {
        if(val === Number(key)) ans = val;
    }
    return ans;
};

console.log(findLucky());
/**
 * Runtime: 60 ms, faster than 66.86% of JavaScript online submissions for Find Lucky Integer in an Array.
 * Memory Usage: 35.7 MB, less than 100.00% of JavaScript online submissions for Find Lucky Integer in an Array.
 */