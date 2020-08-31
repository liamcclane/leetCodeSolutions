/**1122. Relative Sort Array
 * Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all 
 * elements in arr2 are also in arr1.
 * 
 * Sort the elements of arr1 such that the relative ordering of items in arr1 
 * are the same as in arr2.  Elements that don't appear in arr2 should be 
 * placed at the end of arr1 in ascending order.
 * 
 * Example 1:
 * 
 * Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * Output: [2,2,2,1,4,3,3,9,6,7,19]
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let rtnArr = [], leftovers = [];
    let dict = {};
    for (let val of arr1) {
        if (!(arr2.includes(val)) && !(leftovers.includes(val))) {
            leftovers.push(val);
        }
    }
    leftovers.sort((a, b) => (a - b));
    // console.log("leftovers ",leftovers);
    arr2.push(...leftovers);
    // console.log("arr2 ",arr2);
    for (let val of arr1) {
        if (val in dict) {
            dict[val].push(val);
        } else {
            dict[val] = [val];
        }
    }
    // console.log(`dict `, dict);
    // console.log(`arr2 `, arr2);
    for (let val of arr2) {
        if (val in dict) {
            rtnArr.push(...dict[val]);
        } else {
            rtnArr.push(val);
        }
        // for(let i = 0; i < dict[val]; i++) {
        //     rtnArr.push(val);
        // }
    }
    // console.log(rtnArr);
    return rtnArr;
    /**
     * Runtime: 92 ms, faster than 25.70% of JavaScript online submissions for Relative Sort Array.
     * Memory Usage: 36.9 MB, less than 42.86% of JavaScript online submissions for Relative Sort Array.
    */
};