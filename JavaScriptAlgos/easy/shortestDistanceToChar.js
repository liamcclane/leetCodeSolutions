/**821. Shortest Distance to a Character
 * Given a string S and a character C, return an array 
 * of integers representing the shortest distance from the character C in the string.
 * 
 * Example 1:
 * 
 * Input: S = "loveleetcode", C = 'e'
 * Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {

    let ans = [], len = S.length, arrOfChars = S.split("");

    const findChar = (arr, target, ind) => {

        for (let moveLeft = ind, moveRight = ind;
            moveLeft >= 0 || moveRight < len; moveLeft--, moveRight++) {
            if (moveLeft >= 0 && arr[moveLeft] == target) {
                return ind - moveLeft;
            }
            if (moveRight < len && arr[moveRight] == target) {
                return moveRight - ind;
            }
        }
    }

    if(Objects.keys(dict) > 0) {return false;}
    // for (let i = 0; i < len; i++) {
    //     ans.push(findChar(arrOfChars, C, i));
    // }

    return ans;

};
/**
 * Runtime: 92 ms, faster than 49.06% of JavaScript online submissions for Shortest Distance to a Character.
 * Memory Usage: 37.5 MB, less than 81.60% of JavaScript online submissions for Shortest Distance to a Character.
 */