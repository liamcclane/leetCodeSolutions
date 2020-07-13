// NOT DONE!
/**56. Merge Intervals
 * 
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * Example 1:
 * 
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 * 
 * Example 2:
 * 
 * Input: [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    // let sorted = intervals.sort((a,b) => {
    //     console.log(`a ${a}`);
    //     console.log(`b ${b}`);
    //     return (a[0]-b[0])});
    // if(intervals === sorted) {
    //     console.log("given all sorted arrays");
    // }
    // console.log(sorted);

    let ans = [];
    let interval = [intervals[0][0]];
    for (let i = 1; i < intervals.length; i++) {
        if (interval[0] <= intervals[i][1]) {
            interval.push(intervals[i][1]);
            ans.push(interval);
            interval = [interval[i][1]];
        } else {
            ans.push(intervals[i]);
        }
        // console.log(ans);
    }
    // console.log(ans);
    return ans;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // returns [[1,6],[8,10],[15,18]]
console.log();
console.log(merge([[1, 4], [4, 5]])); // returns [[1,5]]
console.log();
console.log(merge([[1, 4], [5, 6]])); // returns [[1,4],[5,6]]