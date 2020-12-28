/**852. Peak Index in a Mountain Array
 * Let's call an array arr a mountain if the following properties hold:
 * 
 * arr.length >= 3
 * There exists some i with 0 < i < arr.length - 1 such that:
 * arr[0] < arr[1] < ... arr[i-1] < arr[i]
 * arr[i] > arr[i+1] > ... > arr[arr.length - 1]
 * Given an integer array arr that is guaranteed to be a mountain, 
 * return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  
    let len = arr.length;
    
    for(let currInd = 0, frontInd = 1; frontInd < len; currInd++, frontInd++) {
        let curr = arr[currInd], front = arr[frontInd];
        if(front < curr) {
            return currInd;
        }
    }
    /**
     * Runtime: 84 ms, faster than 27.98% of JavaScript online submissions for Peak Index in a Mountain Array.
     * Memory Usage: 39.3 MB, less than 52.84% of JavaScript online submissions for Peak Index in a Mountain Array.
     */
    
};
