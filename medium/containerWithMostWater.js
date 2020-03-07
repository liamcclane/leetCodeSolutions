/**
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
var maxArea = function(height) {
    let max = 0;
    let len = height.length, j = len;
    for(let i = 0; i < len; i++){
        
    }
};
function helper() {

}
let ex1 = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(ex1)) // 49 
/**
 * because height[1] = 8 and height[8] = 7
 * and (8-1) * 7 = 49
 */