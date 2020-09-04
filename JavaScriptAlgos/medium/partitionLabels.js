/**763. Partition Labels
 * A string S of lowercase English letters is given. 
 * We want to partition this string into as many parts 
 * as possible so that each letter appears in at most 
 * one part, and return a list of integers representing 
 * the size of these parts.
 *  
 * 
 * Example 1:
 * 
 * Input: S = "ababcbacadefegdehijhklij"
 * Output: [9,7,8]
 * Explanation:
 * The partition is "ababcbaca", "defegde", "hijhklij".
 * This is a partition so that each letter appears in at most one part.
 * A partition like "ababcbacadefegde", "hijhklij" is incorrect, 
 * because it splits S into less parts.
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
    let nest = [], ans = [],
        dict = {}, len = S.length;

    /**
     * checks if it needs to change the global variable nest
     * @param {*} interval 
     */
    const intervalChecking = (interval) => {
        let givenLower = interval[0], givenUpper = interval[1], nestLen = nest.length;
        let lastIntLow = nest[nestLen - 1][0], lastIntUp = nest[nestLen - 1][1];
        for (let i = 0; i < nestLen; i++) {
            let thisIntervalLow = nest[i][0], thisIntervalUp = nest[i][1];
            if (givenLower >= thisIntervalLow &&
                givenLower <= thisIntervalUp &&
                givenUpper <= thisIntervalUp &&
                givenUpper >= thisIntervalLow) {
                // check if it is completely encapsulated
                return;
            }
        }
        // now we know we will need to do is look at the last element of nest 
        // see if we need to add to the nest arr, or manipulate it
        if (lastIntUp < givenLower) {
            nest.push(interval);
            return;
        }
        if (givenUpper > lastIntUp) {
            nest[nestLen - 1][1] = givenUpper;
        }
        if (givenLower < lastIntLow && givenUpper < lastIntUp) {
            nest[nestLen - 1][0] = givenLower;
        }
    }

    for (let i = 0; i < len; i++) {
        if (S[i] in dict) {
            dict[S[i]].pop();
            dict[S[i]].push(i);
        } else {
            dict[S[i]] = [i, i];
        }
    }
    for (let letter of Object.keys(dict)) {
        if (nest.length === 0) {
            nest.push(dict[letter]);
            continue;
        }
        intervalChecking(dict[letter]);
    }

    for (let inney of nest) {
        if (inney.length === 2) {
            ans.push((inney[1] - inney[0]) + 1);
        }
    }
    return ans;
    /**
     * Runtime: 76 ms, faster than 95.69% of JavaScript online submissions for Partition Labels.
     * Memory Usage: 39.2 MB, less than 16.53% of JavaScript online submissions for Partition Labels. 
     */
};
// partitionLabels("ababcbacadefegdehijhklij");
// console.log("*****", [9, 7, 8], "*****");
// console.log();
// console.log();

// partitionLabels("abcdef");
// console.log("*****", [1, 1, 1, 1, 1, 1], "*****");
// console.log();
// console.log();

// partitionLabels("caedbdedda");
// console.log("*****", [1, 9], "*****");
// console.log();
// console.log();

/**tags for later look up
 * SeptemberChallenge
 */