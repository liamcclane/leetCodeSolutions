/**315. Count of Smaller Numbers After Self
 * You are given an integer array nums and you have to return a new counts array. The counts array has the property  * where counts[i] is the number of smaller elements to the right of nums[i].
 * 
 * Example:
 * 
 * Input: [5,2,6,1]
 * Output: [2,1,1,0] 
 * Explanation:
 * To the right of 5 there are 2 smaller elements (2 and 1).
 * To the right of 2 there is only 1 smaller element (1).
 * To the right of 6 there is 1 smaller element (1).
 * To the right of 1 there is 0 smaller element.
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmallerONSqrt2 = function (nums) {
    let ans = [];
    let len = nums.length - 1;
    for (let i = len; i >= 0; i--) {
        let count = 0;
        for (let j = i + 1; j <= len; j++) {
            // console.log(`j : ${nums[j]}\t i: ${nums[i]}`);
            if (nums[j] < nums[i]) {
                count++;
            }
            // console.log(count);
        }
        // console.log();
        ans.unshift(count);
        // info.push({val:nums[i], ind: i, valsSmallerToRight:arr});
    }
    return ans;
};
/**
 * Runtime: 756 ms, faster than 12.18% of JavaScript online submissions for Count of Smaller Numbers After Self.
 * Memory Usage: 39.6 MB, less than 49.56% of JavaScript online submissions for Count of Smaller Numbers After Self.
 */