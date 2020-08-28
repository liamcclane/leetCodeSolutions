/**88. Merge Sorted Array
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * 
 * Note:
 * 
 * The number of elements initialized in nums1 and nums2 are m and n respectively.
 * You may assume that nums1 has enough space (size that is equal to m + n) 
 * to hold additional elements from nums2.
 * 
 * Example:
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * Output: [1,2,2,3,5,6]
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    let count = m + n - 1

    // fill in backwards
    while (m > 0 && n > 0) {

        if (nums1[m] > nums2[n]) {
            nums1[count] = nums1[m - 1];
            m--;
        } else {
            nums1[count] = nums2[n - 1];
            n--;
        }
        count--;
    }

    while (n > 0) {
        nums1[count] = nums2[n - 1];
        count--;
        n--;
    }
    console.log(nums1);

    /**
     * Runtime: 60 ms
     * Memory Usage: 33.9 MB
     * Your runtime beats 99.35 % of javascript submissions.
     * Your memory usage beats 75.47 % of javascript submissions.
     */

}
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

/**
 * this function does it too, but returns a new array, and we need to do it in place of nums1
 * @param {*} nums1 
 * @param {*} m 
 * @param {*} nums2 
 * @param {*} n 
 */
function mergSortedArrs(nums1, m, nums2, n) {

    let result = [];
    let mPointer = 0;
    let nPointer = 0;

    while (result.length < n + m) {

        if (mPointer == m || nPointer == n) {
            if (mPointer == m) {

                for (let i = 0; i < nums2.slice(nPointer, n).length; i++) {
                    result.push(nums2.slice(nPointer, n)[i]);
                }
            }
            if (nPointer == n) {


                for (let i = 0; i < nums1.slice(mPointer, m).length; i++) {
                    result.push(nums1.slice(mPointer, m)[i]);
                }

            }
        } else {

            if (nums1[mPointer] > nums2[nPointer]) {
                result.push(nums2[nPointer]);
                nPointer++;
            } else {
                result.push(nums1[mPointer]);
                mPointer++;
            }

        }
    }
    console.log(nums1);
    return result;
};