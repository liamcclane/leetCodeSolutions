/**4. Median of Two Sorted Arrays
 * You may assume nums1 and nums2 cannot be both empty.
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. 
 * The overall run time complexity should be O(log (m+n)).
 * 
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * The median is 2.0
 *
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = nums1.concat(nums2), len = arr.length, mid = len/2;
    arr = arr.sort((a,b) => {return((a)-(b))});
    if(len % 2 === 1) {
        return arr[Math.ceil(mid-1)];
    }
    return (arr[mid] + arr[mid-1])/2;
}
console.log(findMedianSortedArrays([3], [-2, -1]));
/**
 * Runtime: 116 ms, faster than 69.44% of JavaScript online submissions for Median of Two Sorted Arrays.
 * Memory Usage: 42.7 MB, less than 23.40% of JavaScript online submissions for Median of Two Sorted Arrays.
 */