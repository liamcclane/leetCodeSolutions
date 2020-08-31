/**1470. Shuffle the Array
 * Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
 * 
 * Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 * 
 * Example 1:
 * 
 * Input: nums = [2,5,1,3,4,7], n = 3
 * Output: [2,3,5,4,1,7] 
 * Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
 * 
 * Example 2:
 * 
 * Input: nums = [1,2,3,4,4,3,2,1], n = 4
 * Output: [1,4,2,3,3,2,4,1]
 * 
 * Example 3:
 * 
 * Input: nums = [1,1,2,2], n = 2
 * Output: [1,2,1,2]
 *  
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let ans = [];
    for (let i = 0, j = n; i < n; i++, j++) {
        ans.push(nums[i]);
        ans.push(nums[j]);
    }
    return ans;
    /**
     * Runtime: 112 ms, faster than 22.52% of JavaScript online submissions for Shuffle the Array.
     * Memory Usage: 39.3 MB, less than 6.77% of JavaScript online submissions for Shuffle the Array.
     */
};


/**
 * @param {number[]} nums
 * @param {number} n
 * @returns {number[]}
 */
const again = (nums, n) => {
    let splitNest = [], pointer = 0, ansArr = [];
    let arrTemp = [];
    while (pointer < nums.length) {
        arrTemp.push(nums[pointer]);
        if ((pointer + 1) % n === 0) {
            splitNest.push(arrTemp);
            arrTemp = [];
        }
        pointer++;
    }
    console.log(splitNest);

    for (let j = 0; j < splitNest[0].length; j++) {
        for (let i = 0; i < splitNest.length; i++) {
            ansArr.push(splitNest[i][j]);
        }
    }
    return ansArr;
    /**
     * Runtime: 88 ms, faster than 42.75% of JavaScript online submissions for Shuffle the Array.
     * Memory Usage: 38.6 MB, less than 100.00% of JavaScript online submissions for Shuffle the Array.
     */
}
console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
console.log(shuffle([1, 1, 1, 5, 6, 7], 3));

/**tags for later look up
 * multipleSubmissions
 * refactorMe
 */