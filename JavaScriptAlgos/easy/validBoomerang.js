/**1037 Valid Boomerang
 * A boomerang is a set of 3 points that are all distinct and not in a straight line.
 * 
 * Given a list of three points in the plane, return whether these points are a boomerang.
 * 
 * Example 1:
 * 
 * Input: [[1,1],[2,3],[3,2]]
 * Output: true
 * Example 2:
 * 
 * Input: [[1,1],[2,2],[3,3]]
 * Output: false
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    // console.log(points[1]==points[2]);
    const anyEqual = (nested) => {
        if(nested[0][0]===nested[1][0] && nested[0][1]===nested[1][1]) return true; // checking nested[0]===nested[1]
        if(nested[0][0]===nested[2][0] && nested[0][1]===nested[2][1]) return true; // checking nested[0]===nested[2]
        if(nested[1][0]===nested[2][0] && nested[1][1]===nested[2][1]) return true; // checking nested[1]===nested[2]
        return false;
    }
    if(anyEqual(points)) return false;
    const slope = (arr1,arr2) => (arr1[1]-arr2[1])/(arr1[0]-arr2[0]);
    let slope1 = slope(points[0],points[1]), 
    slope2 = slope(points[0],points[2]),
    slope3 = slope(points[1],points[2]);    
    // console.log(`${slope1}\t${slope2}\t${slope3}`);
    if(slope1!=slope2 || slope1!=slope3 || slope2!=slope3) return true;
    return false;
};
// console.log(isBoomerang([[1,1],[2,3],[3,2]])); // true
// console.log(isBoomerang([[1,1],[2,2],[3,3]])); // false
console.log(isBoomerang([[0,0],[1,1],[1,1]])); // false
/***
 * Runtime: 72 ms, faster than 14.46% of JavaScript online submissions for Valid Boomerang.
 * Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Valid Boomerang.
 */