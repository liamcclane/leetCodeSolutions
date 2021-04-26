/**1642. Furthest Building You Can Reach
 * You are given an integer array heights representing 
 * the heights of buildings, some bricks, and some ladders.
 * 
 * You start your journey from building 0 and move to the next 
 * building by possibly using bricks or ladders.
 * 
 * While moving from building i to building i+1 (0-indexed),
 * 
 * If the current building's height is greater than or equal to
 * the next building's height, you do not need a ladder or bricks.
 * If the current building's height is less than the next building's 
 * height, you can either use one ladder or (h[i+1] - h[i]) bricks.
 * Return the furthest building index (0-indexed) you can reach
 * if you use the given ladders and bricks optimally.
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    
    let len = heights.length, curr = 0, jumpsMade = [];
    
    for(let front = 1; front < len; curr++, front++) {
        if(heights[curr] >= heights[front]) {
            continue;
        } else {
            let bricksNeeded = heights[front] - heights[curr];
            if(bricksNeeded <= bricks) {
                bricks -= bricksNeeded;
                jumpsMade.push(bricksNeeded);
            } else if(ladders > 0) {
                if(jumpsMade.length != 0){
                    let oldLargestJump = Math.max(...jumpsMade);
                    if(oldLargestJump > bricksNeeded) {
                        // get that old jump back
                        bricks += oldLargestJump;
                        // delete it
                        let indOfLar = jumpsMade.indexOf(oldLargestJump);
                        jumpsMade[indOfLar] = 0;
                        // push this currect jump in if you can 
                        jumpsMade.push(bricksNeeded);
                        bricks -= bricksNeeded;
                    }
                }
                ladders--;  
            } else {
                break;
            }
        }
    }
    return curr;
    /**
     * Runtime: 7340 ms, faster than 6.82% of JavaScript online submissions for Furthest Building You Can Reach.
     * Memory Usage: 47.9 MB, less than 100.00% of JavaScript online submissions for Furthest Building You Can Reach.7
     */
};
