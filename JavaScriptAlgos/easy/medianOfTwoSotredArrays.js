/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * 
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * The median is 2.0
 * Example 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;
    let median1, median2;
    
    if(n===1){
        median1 = nums1[0];
    } else if(n%2==0){
        let leftCenter = Math.floor(n/2);
        // console.log(nums1[leftCenter])
        // console.log(nums1[leftCenter-1])
        median1 = (nums1[leftCenter] + nums1[leftCenter-1])/ 2;
    } else {
        median1 = nums1[n/2];
    }
    if(m===1){
       median2 = nums2[0];
    } else if(m%2==0){
        let leftCenter = Math.floor(m/2);
        median2 = (nums2[leftCenter] + nums2[leftCenter-1]) / 2; 
    } else {
        median2 = nums2[m/2];
    }
    if(n===0) median1 = 0;
    if(m===0) median2 = 0;
    console.log(median1);
    console.log(median2);
    if(median1===0 || median2===0){
        return median1 + median2;
    }
    return (median1 + median2)/2;
};