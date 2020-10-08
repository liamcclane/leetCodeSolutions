/**Trapping Rain Water
 * Given n non-negative integers representing an 
 * elevation map where the width of each bar is 1, 
 * compute how much water it is able to trap after raining.
 * 
 * see rainwatertrap.png
 * 
 * The above elevation map is represented by 
 * array [0,1,0,2,1,0,1,3,2,1,2,1]. 
 * In this case, 6 units of rain water (blue section) are being trapped. 
 * Thanks Marcos for contributing this image!
 * 
 * Example:
 * 
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // edge cases
    if (!height) return 0;
    if (height.length === 0) return 0;

    let totalWater = 0;

    // loop the height array
    for (let i = 0; i < height.length; i++) {
        // initialize the max on the left and the max on the right
        let leftMax = 0,
            rightMax = 0;

        // get leftMax
        for (let j = 0; j < i; j++) {
            leftMax = Math.max(leftMax, height[j]);
        }

        // get rightMax
        for (let j = i + 1; j < height.length; j++) {
            rightMax = Math.max(rightMax, height[j]);
        }

        // get newWater
        let newWater = Math.min(leftMax, rightMax) - height[i];

        // if it amounts to anything add it
        if (newWater > 0) {
            totalWater += newWater;
        }
    }
    return totalWater;
    /**
     * Runtime: 168 ms, faster than 5.46% of JavaScript online submissions for Trapping Rain Water.
     * Memory Usage: 39.3 MB, less than 30.55% of JavaScript online submissions for Trapping Rain Water.
     */
};