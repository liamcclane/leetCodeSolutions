/**11. Container With Most Water** 
 * Given n non-negative integers a1, a2, ..., an , 
 * where each represents a point at coordinate (i, ai). n 
 * vertical lines are drawn such that the two endpoints of line i 
 * is at (i, ai) and (i, 0). Find two lines, which together with 
 * x-axis forms a container, such that the container contains the most water.
 * 
 * Note: You may not slant the container and n is at least 2.
 * 
 * Photo/Graph constianerWithMostWater.jpg
 * 
 * The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
 * In this case, the max area of water (blue section) the container can contain is 49.
 * Example:
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let amountOfWater = 0;
    let len = height.length;
    /**
     * Pass in two heights from the given array and the difference of there
     * indexes to calculate the amount of water held between those two
     * @param {number} height1 
     * @param {number} height2 
     * @param {number} widthDiff 
     * @returns {number}
     */
    function calculateAmountOfWater(height1, height2, widthDiff) {
        return Math.min(height1, height2) * widthDiff;
    }
    
    for(let i = 0; i < len; i++) {
        for(let j = i+1; j < len;j++) {
            let y = calculateAmountOfWater(height[i],height[j],Math.abs(i-j));
            if(y > amountOfWater) {
                amountOfWater = y;
            }
        }
    }
    return amountOfWater;
};

let ex1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(ex1)) // 49 
/**
 * because height[1] = 8 and height[8] = 7
 * and (8-1) * 7 = 49
 */
let ex2 = [1, 2, 1];
console.log(maxArea(ex2));
/**
 * because height[0] = 1 and height[2] = 1
 * and (2-0) * 1 = 2
 * 
 * RETURNS 2
 */

/**
 * Runtime: 788 ms, faster than 12.15% of JavaScript online submissions for Container With Most Water.
 * Memory Usage: 36.8 MB, less than 21.55% of JavaScript online submissions for Container With Most Water.
 */

 /**
  * 
    // taking into account the case where we shouldn't be calculating according to the max in the array
    // example [1,2,1] should return 2

    // sorry, what are we returning?? The max area? Cool. I think I get it. 
    // So, we want to the largest values in the array, that are also the furthest apart? YES basically, while still
    // optimizing...
    // the amount of squares that would be water, ya I have the visual in my files too. 

    // with the above code I have to first test case down, but now need to think about [1,2,1] return 2 and not 1.

  * Dead code from when I just wrote thinking about the only example given
  * 
  * refactored with nested for loop, giving a o(n^2) solution above.
  * 
  * Inefficient, but gets the job done... will refactor later.
  * 
  * // let firstMax = { ind: 0, val: height[0] };
    // for (let i = 0; i < len; i++) {
    //     if (firstMax.val < height[i]) {
    //         firstMax.ind = i;
    //         firstMax.val = height[i];
    //     }
    // }
    // console.log(firstMax);
    // for (let i = 0; i < height.length; i++) {
    //     let x = calculateAmountOfWater(firstMax.val, height[i], Math.abs(firstMax.ind - i));
    //     if (x > amountOfWater) {
    //         amountOfWater = x;
    //     }
    // }
    // console.log(amountOfWater);
  */