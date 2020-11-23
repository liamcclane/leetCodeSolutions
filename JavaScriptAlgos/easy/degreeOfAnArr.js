/**697. Degree of an Array
 * Given a non-empty array of non-negative integers nums, 
 * the degree of this array is defined as the maximum frequency 
 * of any one of its elements.
 * 
 * Your task is to find the smallest possible length of a 
 * (contiguous) subarray of nums, 
 * that has the same degree as nums.
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let dict = {}, max = 0, len = nums.length;
    let arrOfMaxes = [];
    let min = len;
    for (let i = 0; i < len; i++) {
        let val = nums[i];
        if (val in dict) {
            dict[val]["count"]++;
            dict[val]["indices"].push(i);
            if (max < dict[val]["count"]) {
                max = dict[val]["count"];
            }
        } else {
            dict[val] = {
                "count": 1,
                "indices": [i]
            };
            if (max < dict[val]['count']) {
                max = dict[val]['count'];
            }
        }
    }
    for (let key in dict) {
        if (dict[key]["count"] == max) {
            arrOfMaxes.push(dict[key]);
        }
    }
    if (arrOfMaxes.length <= 1) {
        let arr = arrOfMaxes[0]["indices"];
        return arr[arr.length - 1] - arr[0] + 1;
    }
    for (let obj of arrOfMaxes) {
        let arr = obj["indices"];
        if ((arr[arr.length - 1] - arr[0]) < min) {
            min = arr[arr.length - 1] - arr[0];
        }
    }
    return min + 1;
    /**
     * Runtime: 100 ms, faster than 52.88% of JavaScript online submissions for Degree of an Array.
     * Memory Usage: 45.7 MB, less than 26.92% of JavaScript online submissions for Degree of an Array.
     */
};
/**
 * Example 1:
 * Input: nums = [1,2,2,3,1]
 * Output: 2
 * Explanation: 
 * The input array has a degree of 2 because both elements 1 and 2 appear twice.
 * Of the subarrays that have the same degree:
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * The shortest length is 2. So return 2.
 * 
 * Example 2:
 * Input: nums = [1,2,2,3,1,4,2]
 * Output: 6
 * Explanation: 
 * The degree is 3 because the element 2 is repeated 3 times.
 * So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 */