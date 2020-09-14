/**57. Insert Interval
 * Given a set of non-overlapping intervals, insert a 
 * new interval into the intervals (merge if necessary).
 * 
 * You may assume that the intervals were initially sorted according to their start times.
 * 
 * Example 1:
 * 
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 * Example 2:
 * 
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], 
 *                         newInterval = [3,8]
 * 
 *             intervalToPush = [3,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {

    const isIntervalsOverlapping = (int1, int2) => {
        // [1,5] [0,0]  // not overlapping
        if (int1[1] < int2[0] && int1[0] < int2[0]) {
            // [1,4]  [7,8]   // not over lapping
            return false;
        } else if (int1[1] >= int2[0]) {
            // [1,4]  [3,9]   // overlapping
            // [1,4]  [4,9]   // overlapping
            return true;
        }
        return true;
    }

    const areIntervalsEncapsulated = (int1, int2) => {
        // [1,4]   [2,3]   // overlapping, completely surrounded
        // [8,10]  [4,8]   // not!
        if (isIntervalsOverlapping(int1, int2) &&
            int1[1] >= int2[1] && int1[0] < int2[0]) {
            return true;
        } else {
            return false;
        }
    }
    // console.log(isIntervalsOverlapping([0, 0], [1, 5]));
    let rntArr = [], i = 0, len = intervals.length;
    let intervalToPush = [], mergeHappened = false;
    if (len === 0) { return [newInterval]; }
    else if (len == 1) {
        if (intervals[0][0] > newInterval[0] &&
            intervals[0][1] > newInterval[0] &&
            intervals[0][0] > newInterval[1] &&
            intervals[0][1] > newInterval[1]) {
            return [newInterval, intervals[0]];
        }
        if (isIntervalsOverlapping(intervals[0], newInterval)) {
            return [[Math.min(intervals[0][0], newInterval[0]), Math.max(intervals[0][1], newInterval[1])]];
        }
    }
    while (i < len) {
        let checkInterval = intervals[i];
        if (areIntervalsEncapsulated(checkInterval, newInterval)) {
            console.log("break");
            console.log(checkInterval, "vs", newInterval);
            break;
        }
        if (isIntervalsOverlapping(checkInterval, newInterval)) {
            // console.log();
            // console.log("overlapping");
            // console.log("checkInterval", checkInterval);
            // console.log("intervalToPush", intervalToPush);
            if (areIntervalsEncapsulated(newInterval, checkInterval) && intervalToPush.length == 2) {
                i++;
                continue;
            } else if (intervalToPush.length == 2) {
                intervalToPush[1] = Math.max(checkInterval[1], intervalToPush[1]);
                // console.log("pushing");
                // console.log("intervalToPush", intervalToPush);
                rntArr.push(intervalToPush);
                intervalToPush = [];
                i++;
                mergeHappened = true;
                break;
            } else {
                intervalToPush.push(Math.min(checkInterval[0], newInterval[0]));
                intervalToPush.push(Math.max(checkInterval[1], newInterval[1]));
                // console.log("intervalToPush built", intervalToPush);
                //  check if the interval in front will over lap,
                // if not, push and exit
                if ((i + 1) < len && !isIntervalsOverlapping(intervalToPush, intervals[i + 1])) {
                    rntArr.push(intervalToPush);
                    // console.log("pushing");
                    // console.log("intervalToPush", intervalToPush);
                    i++;
                    break;
                }
            }
        } else {
            // console.log("not over lapping");
            // console.log(checkInterval);
            rntArr.push(checkInterval);
        }
        i++;
        // console.log("rntArr", rntArr);
        // console.log("newInterval", newInterval);
        // console.log(i);
    }
    console.log(i, "we are out!!");
    if (i === len && !mergeHappened) {
        rntArr.push(newInterval);
    }
    for (; i < len; i++) {
        rntArr.push(intervals[i]);
    }
    return rntArr;
};

/**
 * 
 * @param {number[][]} intervals 
 * @param {number[]} newInterval 
 * @returns {number[][]}
 */
const insertAgain = (intervals, newInterval) => {
    
    const areAllValuesUnique = (arr) => {
        for (let i = 1; i < arr.len; i++) {
            if (arr[i - 1] == arr[i]) { 
                console.log("FALSE");
                return false; 
            }
        }
        return true;
    }

    const areEncapsulated = (interval1, interval2) => {
        let arr = [interval1[0], interval1[1], interval2[0], interval2[1]];
        arr.sort((a, b) => (a - b));
        if (areAllValuesUnique(arr)) {
            return false;
        } else if (arr[0] == interval1[0] &&
            arr[1] == interval2[0] &&
            arr[2] == interval2[1]) {
            return true;
        }
        return false;
    }

    const areOverLapping = (interval1, interval2) => {
        let arr = [interval1[0], interval1[1], interval2[0], interval2[1]];
        arr.sort((a, b) => (a - b));
        // console.log("\tarr", arr);
        // console.log(interval1[0])
        // console.log(interval1[1])
        // console.log(arr[0])
        // console.log(arr[1])
        if (areAllValuesUnique(arr)) {
            return true;
        } else if (arr[0] == interval1[0] && arr[1] == interval1[1]) {
            return false;
        }
        return true;
    }

    // edge case of empty variable intervals
    if (intervals.length === 0) { return [newInterval]; }
    // check if newInterval goes before all the intervals
    if (newInterval[0] < intervals[0][0] &&
        newInterval[0] < intervals[0][1] &&
        newInterval[1] < intervals[0][1] &&
        newInterval[1] < intervals[0][0]) {
        return [newInterval].concat(intervals);
    }

    let i = 0, wasMerged = false, len = intervals.length,
        rntArr = [], intervalToPush = [];

    while (i < len) {
        let checkInterval = intervals[i];
        console.log("\tcheckInterval", checkInterval);
        if (areOverLapping(checkInterval, newInterval)) {
            console.log("\toverlapping");
            if (intervalToPush.length == 2) {
                if (areEncapsulated(checkInterval, newInterval)) {
                    i++;
                    continue;
                } else {
                    intervalToPush[1] = Math.max(intervalToPush[1], checkInterval[1]);
                    wasMerged = true;
                    i++;
                }
            } else {
                intervalToPush.push(Math.min(checkInterval[0], newInterval[0]));
                intervalToPush.push(Math.max(checkInterval[1], newInterval[1]));
            }
        } else {
            console.log("\tNOT overlapping");
            rntArr.push(checkInterval);
        }
        i++;
    }
    console.log(i, "i");
    console.log(intervals[i], "stopped at");

    if (i == len && !wasMerged) {
        return intervals.concat([newInterval]);
    }
    for (; i < len; i++) {
        rntArr.push(intervals[i]);
    }
    return rntArr;

}




console.log("insertAgain([[1,3], [4,5], [6,8], [9,10], [11, 13], [14, 15]], newInterval [12, 16])");
console.log(insertAgain([[1, 3], [4, 5], [6, 8], [9, 10], [11, 13], [14, 15]], [12, 16]));
console.log([[3, 5]])
console.log()














// console.log("insertAgain([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval [4, 8])");
// console.log(insertAgain([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));
// console.log([[1, 2], [3, 10], [12, 16]]);
// console.log();

// console.log("insertAgain([[1, 3], [6, 9]], newInterval [2, 5])");
// console.log(insertAgain([[1, 3], [6, 9]], [2, 5]));
// console.log([[1, 5], [6, 9]]);
// console.log();


// console.log("insertAgain([[2, 10]],  newInterval [3, 5])");
// console.log(insertAgain([[2, 10]], [3, 5]));
// console.log([[2, 10]]);
// console.log();

// console.log("insertAgain([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]  newInterval,[4, 8])");
// console.log(insertAgain([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));
// console.log([[1, 2], [3, 10], [12, 16]]);
// console.log();


// console.log("insertAgain([[1, 5]],  newInterval [2, 7])");
// console.log(insertAgain([[1, 5]], [2, 7]), "should be ");
// console.log([[1, 7]]);
// console.log();





// console.log("insertAgain([[1, 5]],  newInterval [0, 3])");
// console.log(insertAgain([[1, 5]], [0, 3]),);
// console.log([[0, 5]]);
// console.log();

// console.log("insertAgain([[1, 5], [6, 8]]  newInterval,[5, 6])");
// console.log(insertAgain([[1, 5], [6, 8]], [5, 6]));
// console.log([[1, 8]]);
// console.log();



// console.log("insertAgain([[1, 5]],  newInterval [6, 7])");
// console.log(insertAgain([[1, 5]], [6, 7]), "should be ");
// console.log([[1, 5], [6, 7]]);
// console.log();

// console.log("insertAgain([[2, 5], [6, 7], [8, 9]],  newInterval [0, 1])");
// console.log(insertAgain([[2, 5], [6, 7], [8, 9]], [0, 1]));
// console.log([[0, 1], [2, 5], [6, 7], [8, 9]]);
// console.log();

// console.log("insertAgain([[1, 5]],  newInterval [0, 0])");
// console.log(insertAgain([[1, 5]], [0, 0]), "should be ");
// console.log([[0, 0], [1, 5]]);
// console.log();

// console.log("insertAgain([], newInterval [3, 5])");
// console.log(insertAgain([], [3, 5]));
// console.log([[3, 5]])
// console.log()