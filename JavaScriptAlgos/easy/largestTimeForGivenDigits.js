/**949. Largest Time for Given Digits
 * Given an array of 4 digits, return the largest 24 hour time that can be made.
 * 
 * The smallest 24 hour time is 00:00, and the largest is 23:59.  
 * Starting from 00:00, a time is larger if more time has elapsed since midnight.
 * 
 * Return the answer as a string of length 5.  If no valid time can be made, return an empty string.
 * 
 * Example 1:
 * 
 * Input: [1,2,3,4]
 * Output: "23:41"
 * Example 2:
 * 
 * Input: [5,5,5,5]
 * Output: ""
 * @param {number[]} A
 * @return {string}
 */

const timeAgain = A => {
    let areAllZeros = true;
    for (let i = 0; i < 4; i++) {
        if (A[i] != 0) {
            areAllZeros = false;
        }
    }
    if (areAllZeros) { return "00:00"; }

    const allPermutations = (inputArr) => {
        let result = [];
        const permute = (arr, m = []) => {
            // console.log("base case", arr, "<- arr: m ->", m);
            if (arr.length === 0) {
                result.push(m);
                // console.log("\t\t", result);
            } else {
                for (let i = 0; i < arr.length; i++) {
                    let curr = arr.slice();
                    let next = curr.splice(i, 1);
                    permute(curr.slice(), m.concat(next))
                }
            }
        }
        permute(inputArr)
        return result;
    }
    let allPossible = allPermutations(A), len = allPossible.length;

    let largestTime = [0, 0, 0, 0], largestHour, largestMin;

    const setLargestData = (arr) => {
        largestHour = (arr[0] * 10) + arr[1];
        largestMin = (arr[2] * 10) + arr[3];
    }

    for (let i = 0; i < len; i++) {
        let time = allPossible[i];
        let hour = (time[0] * 10) + (time[1]);
        let min = (time[2] * 10) + (time[3]);
        if (hour >= 24) { continue; }
        if (min >= 60) { continue; }
        // console.log("\t\t\t\t",time, "is valid");
        if (largestHour === undefined) {
            largestTime = time;
            setLargestData(time);
        } else if (hour > largestHour) {
            largestTime = time;
            setLargestData(time);
        } else if (hour == largestHour && min > largestMin) {
            largestTime = time;
            setLargestData(time);
        }
    }
    if (largestMin < 10) {
        largestMin = "0" + largestMin;
    }
    if (largestHour < 10) {
        largestHour = "0" + largestHour;
    }
    return largestHour == undefined ? "" : largestHour + ":" + largestMin;
    /**
     * Runtime: 116 ms, faster than 10.75% of JavaScript online submissions for Largest Time for Given Digits.
     * Memory Usage: 39.3 MB, less than 11.83% of JavaScript online submissions for Largest Time for Given Digits.
     */
}
console.log(timeAgain([5, 5, 5, 5]) == "" ? "false" : "should be false");
console.log(timeAgain([1, 2, 3, 4]), "<- 23:41");
// console.log();
console.log(timeAgain([2, 9, 5, 3]), "<- 23:59");
// console.log();
console.log(timeAgain([1, 1, 1, 2]), "<- 21:11");
// console.log();
console.log(timeAgain([4, 1, 2, 5]), "<- 21:54");
// console.log();
console.log(timeAgain([0, 0, 0, 4]), "<- 04:00");
// console.log();
console.log(timeAgain([0, 1, 1, 0]), "<- 11:00");
// console.log();
console.log(timeAgain([4, 0, 2, 1]), "<- 21:40");
// console.log();
console.log(timeAgain([1, 9, 6, 0]), "<- 19:06");
// console.log();
console.log(timeAgain([0, 0, 0, 0]), "<- 00:00");
// console.log();
console.log(timeAgain([2, 0, 6, 6]), "<- 06:26");
// console.log();
console.log(timeAgain([2, 0, 7, 7]), "<- 07:27");

console.log("*****invalid******");
console.log(timeAgain([2, 4, 4, 4]), "<- false");
// console.log();
console.log(timeAgain([5, 5, 5, 5]), "<- false");
// console.log();
console.log(timeAgain([0, 9, 7, 7]), "<- false");

/**tags for later look up
 * SeptemberDailyChallenge
 * Permutations
 */

/**
 * broken code below
 * @param {*} A 
 */
var largestTimeFromDigits = function (A) {
    let ans = "";
    if (!(A.includes(0) || A.includes(1) || A.includes(2))) {
        return "";
    }
    if (A.includes(2)) {
        // there much include either a 0,1,2, or 3 that is not the two
        let ind = A.indexOf(2), found = false;
        for (let j = 0; j < 4; j++) {
            if (j == ind) {
                continue;
            } else if (A[j] <= 3) {
                found = true;
            }
        }
        if (!found) {
            return "";
        }
    }
    if (!A.includes(2)) {
        // [0, 9, 7, 7]
        // we still need to check for a number that is less than 5
        let ind = A.indexOf(0), ind2 = A.indexOf(1);
        let found = false;
        for (let i = 0; i < 4; i++) {
            if (A[i] > 5 || i == ind || i == ind2) {
                continue;
            } else {
                found = true;
            }
        }
        if (!found) {
            return "";
        }
    }
    // therefor we know all the numbers are valid
    let num = 0, i = 0;
    for (; i < 4; i++) {
        if (A[i] > 2) {
            continue;
        } else if (num < A[i]) {
            num = A[i];
        }
    }

    i = A.indexOf(num);
    [A[0], A[i]] = [A[i], A[0]];
    // console.log(A, "after first position");
    ans += num + "";
    num = 0;
    i = 1;

    for (; i < 4; i++) {
        if (A[0] === 2) {
            if (A[i] > 3) {
                continue;
            } else if (num < A[i]) {
                num = A[i];
            }
        } else {
            if (num < A[i]) {
                num = A[i];
            }
        }
    }

    i = A.indexOf(num, 1);
    [A[1], A[i]] = [A[i], A[1]];
    // console.log(A, "after the second position");
    ans += A[1] + ":";

    i = 2;
    num = 0;
    for (; i < 4; i++) {
        if (A[i] > 6) {
            continue;
        } else if (num < A[i]) {
            num = A[i];
        }
    }
    i = A.indexOf(num, 2);
    [A[2], A[i]] = [A[i], A[2]];
    ans += A[2] + "" + A[3];
    return (ans);
};

/**
 * this code breaks with the example 2,0,6,6
 * @param {number[]} A 
 */
const largestTime = (A) => {
    if (!(A.includes(0) || A.includes(1) || A.includes(2))) {
        return "FALSE there does not contain a 0,1, or 2";
    }

    const findInfo = (searchTarget, startingInd) => {
        while (searchTarget >= 0) {
            for (let i = startingInd; i < 4; i++) {
                if (A[i] === searchTarget) {
                    return [A[i], i];
                }
            }
            searchTarget--;
        }
        return false;
    };

    const classicSwap = (j, k) => {
        [A[j], A[k]] = [A[k], A[j]];
    }

    const findThird = (target, start) => {
        if (findInfo(target, start) === false) {
            // we need to do more here;
            console.log("try more paths");
            return false;
        }
        return findInfo(target, start);
    }

    let ans = "", result = findInfo(2, 0);

    if (result === false) {
        return "FALSE number less than two not found";
    }
    ans += result[0] + "";
    classicSwap(0, result[1]);

    if (A[0] === 2) {
        result = findInfo(3, 1);
    } else {
        result = findInfo(9, 1);
    }

    if (result === false) {
        return "FALSE no valid find for the second number";
    }
    ans += result[0] + ":";
    classicSwap(1, result[1])

    result = findThird(5, 2);
    if (result === false) {
        return "FALSE no number less than 6";
    }
    ans += result[0] + "";
    if (result[1] != 2) {
        swapInd = result[1];
        [A[2], A[swapInd]] = [A[swapInd], A[2]];
    }
    return ans + A[3];
}