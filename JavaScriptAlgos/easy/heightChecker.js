/**1051. Height Checker
 * Students are asked to stand in non-decreasing order of heights for an annual photo.
 * 
 * Return the minimum number of students that must move in order for all 
 * students to be standing in non-decreasing order of height.
 * 
 * Notice that when a group of students is selected they can reorder in any 
 * possible way between themselves and the non selected students remain on their seats.
 *  
 * 
 * Example 1:
 * Input: heights = [1,1,4,2,1,3]
 * Output: 3
 * Explanation: 
 *      Current array : [1,1,4,2,1,3]
 *      Target array  : [1,1,1,2,3,4]
 *      On index 2 (0-based) we have 4 vs 1 so we have to move this student.
 *      On index 4 (0-based) we have 1 vs 3 so we have to move this student.
 *      On index 5 (0-based) we have 3 vs 4 so we have to move this student.
 * 
 * Example 2:
 * Input: heights = [5,1,2,3,4]
 * Output: 5
 * 
 * Example 3:
 * Input: heights = [1,2,3,4,5]
 * Output: 0
 */
/**Height Checker
 * in this method, we will make a copy of the given array using the .slice() method,
 * then we will sort the given array,
 * then we iterate though both arrays heights(give, sorted) and the old copy 
 * and count for differences
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let count = 0, len = heights.length, copy = heights.slice(0, len);
    heights.sort((a, b) => (a - b));

    for (let i = 0; i < len; i++) {
        if (heights[i] != copy[i]) {
            count++;
        }
    }
    return count;
};
/**
 * Runtime: 88 ms, faster than 28.99% of JavaScript online submissions for Height Checker.
 * Memory Usage: 36.5 MB, less than 11.36% of JavaScript online submissions for Height Checker.
 */
// example 1: 3
console.log(heightChecker([1, 1, 4, 2, 1, 3]));

// example 2: 5
console.log(heightChecker([5, 1, 2, 3, 4]));

// example 3: 0
console.log(heightChecker([1, 2, 3, 4, 5]));

// okay, so the .sort()
// takes a function with params (a, b) and returns either a positive or negative num then switches the indexes
// also it sorts that array! Thus, I cannot compare sorted and heights. they are the same thing... 
// so I have to make a copy, but without the .slice(0,len) function it is just a pointer,
// a reference to heights, therefore when it gets sorted on line 85 it is still "looking" 
// at itself 