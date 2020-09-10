/**165. Compare Version Numbers
 * Compare two version numbers version1 and version2.
 * If version1 > version2 return 1; 
 * if version1 < version2 return -1;
 * otherwise return 0.
 * 
 * You may assume that the version strings are non-empty 
 * and contain only digits and the . character.
 * 
 * The . character does not represent a decimal point 
 * and is used to separate number sequences.
 * 
 * For instance, 2.5 is not "two and a half" or "half way to version three", 
 * it is the fifth second-level revision of the second first-level revision.
 * 
 * You may assume the default revision number for each level of a 
 * version number to be 0. For example, version number 3.4 has 
 * a revision number of 3 and 4 for its first and second level 
 * revision number. Its third and fourth level revision 
 * number are both 0.
 * 
 * Example 1:
 * Input: version1 = "0.1", version2 = "1.1"
 * Output: -1
 * 
 * Example 2:
 * Input: version1 = "1.0.1", version2 = "1"
 * Output: 1
 * 
 * Example 3:
 * Input: version1 = "7.5.2.4", version2 = "7.5.3"
 * Output: -1
 * 
 * Example 4:
 * Input: version1 = "1.01", version2 = "1.001"
 * Output: 0
 * Explanation: 
 *      Ignoring leading zeroes, both “01” and “001" 
 *      represent the same number “1”
 * 
 * Example 5:
 * Input: version1 = "1.0", version2 = "1.0.0"
 * Output: 0
 * Explanation: 
 *      The first version number does not have a third 
 *      level revision number, which means its third level revision 
 *      number is default to "0"
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    // 2nd submission refactored

    // so, I took the string of each version and applied the .split(".")
    // so it looked like 
    // ["1", "1","1"], ["1","0","1"]
    // then using the .map(ele => parseInt(ele)) // I used functional programming to 
    // changed the type from string to type number 
    // .map(ele => (something here)) 
    // is a built in function for "functional programming" that iterates though an array
    // and does something with that element and replaces at the index with whatever you return
    // let me show you more examples below

    // [11,22,33,44].map( function(ele) {
    //     console.log(ele);
    //     console.log(typeof ele);
    //     let str = ele.toString();
    //     console.log(str);
    //     //return str; // if I comment this out and did
    //     return 0;
    //     // the array would then be filled with zeros, it is another way to iterate though an array
    //     // ya it is really nice
    // })

    let v1Nums = version1.split(".").map(ele => parseInt(ele)),
        v2Nums = version2.split(".").map(ele => parseInt(ele));
    // so now v1Nums = [1,1,1] // as type numbers
    let v1Len = v1Nums.length, v2Len = v2Nums.length;
    let max = Math.max(v1Len, v2Len);

    /** helper functions to even out the arrays
     * this helper function will be called to fill out the shorter array
     * so all the number arrays are of the same length
     */
    const helper = () => {
        // this if below is a quick exit case where we don't need to do anything
        if (v1Len === v2Len) { return; }
        // since this function is a child, or wrapped completely inside of the 
        // compareVersions we can use the declared variable above it
        // they are scope specific, so like I can use v1Nums here BUT cannot use 
        // expandedArr outside of the curley braces is was declared
        let expandedArr = [];
        // created a new array that will hold leading zeros
        // iterated though a for loop to the max length of the biggest array
        for (let i = 0; i < max; i++) {
            // did some if and elses
            if (v1Len > v2Len) {
                if (i < v2Len) {
                    expandedArr.push(v2Nums[i]);
                } else {
                    // this is where you can see on both line 100 and 107
                    // that I will push 0, to the expanded array
                    expandedArr.push(0);
                }
            } else {
                if (i < v1Len) {
                    expandedArr.push(v1Nums[i]);
                } else {
                    expandedArr.push(0);
                }
            }
        }
        // at the end of the for loop 
        // I check which one needs to be overridden by the lengths
        if (v1Len > v2Len) {
            v2Nums = expandedArr;
        } else {
            v1Nums = expandedArr;
        }
    }
    // then you need to call the helper method to do changes to the v1Nums, and v2Nums
    helper();
    // now since they are of same length, (the larger length) iterate though
    for (let i = 0; i < max; i++) {
        if (v1Nums[i] > v2Nums[i]) {
            return 1;
        } else if (v1Nums[i] < v2Nums[i]) {
            return -1;
        }
    }
    // if we got to the end, they were of same version value.
    return 0;
    /**
     * Runtime: 72 ms, faster than 81.43% of JavaScript online submissions for Compare Version Numbers.
     * Memory Usage: 36.7 MB, less than 33.95% of JavaScript online submissions for Compare Version Numbers.
     */

};
console.log("***All -1's****");
// Example 1:
console.log(compareVersion("0.1", "1.1"), "should be -1");
console.log();
// Output: -1

// Example 3:
console.log(compareVersion("7.5.2.4", "7.5.3"), "should be -1");
console.log();
// Output: -1


console.log("***All 1's****");
// Example 3:
console.log(compareVersion("1.10", "1.1"), "should be 1");
console.log();
// Output: -1

// Example 2:
console.log(compareVersion("1.0.1", "1"), "should be 1");
console.log();
// Output: 1

console.log("***All 0's****");
// Example 4:
console.log(compareVersion("1.01", "1.001"), "should be 0");
console.log();
// Output: 0
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

// Example 5:
console.log(compareVersion("1.0", "1.0.0"), "should be 0");
console.log();
// Output: 0

const again = (version1, version2) => {
    // 1st submission
    let v1Nums = version1.split(".").map(ele => parseInt(ele)),
        v2Nums = version2.split(".").map(ele => parseInt(ele));
    let v1Len = v1Nums.length, v2Len = v2Nums.length;
    /**
     * this helper function will be called to fill out the shorter array
     * so all the number arrays are of the same length
     * @param {number[]} v1Nums 
     * @param {number[]} v2Nums 
     * @param {number} v1Len 
     * @param {number} v2Len 
     */
    const helper = (v1Nums, v2Nums, v1Len, v2Len) => {
        if (v1Len === v2Len) { return [v1Nums, v2Nums]; }
        let max = Math.max(v1Len, v2Len);
        let expandedArr = [];
        for (let i = 0; i < max; i++) {
            if (v1Len > v2Len) {
                if (i < v2Len) {
                    expandedArr.push(v2Nums[i]);
                } else {
                    expandedArr.push(0);
                }
            } else {
                if (i < v1Len) {
                    expandedArr.push(v1Nums[i]);
                } else {
                    expandedArr.push(0);
                }
            }
        }
        if (v1Len > v2Len) {
            return [v1Nums, expandedArr];
        } else {
            return [expandedArr, v2Nums];
        }
    }

    let adjustedArrs = helper(v1Nums, v2Nums, v1Len, v2Len);

    v1Nums = adjustedArrs[0];
    v2Nums = adjustedArrs[1];

    let p1 = 0, p2 = 0; // these are pointers
    // we need both to see if one ends sooner than the other
    while (p1 < v1Len || p2 < v2Len) {
        // since I changed the strings to numbers in the functional programming
        // i am getting ride of 
        // num1= parseInt(v1Nums[p1]);
        // num2 = parseInt(v2Nums[p2]);
        if (v1Nums[p1] === parseInt(v2Nums[p2])) {
            // move both pointers
            p1++;
            p2++;
        } else if (v1Nums[p1] > parseInt(v2Nums[p2])) {
            // we need to think about example 2
            // wait... okay,   I think we just need to break out of the while
            // loop here because what about 1 vs 1.0.1  (thinking...)

            return 1;
        } else {
            return -1;
        }
    }
    return 0;
    /**
     * Runtime: 76 ms, faster than 64.72% of JavaScript online submissions for Compare Version Numbers.
     * Memory Usage: 36.6 MB, less than 48.01% of JavaScript online submissions for Compare Version Numbers.
     */
}

/**tags for later look up
 * SeptemberChallenge
 * multipleSubmissions
 * helperFunction
 * collaboration
 */