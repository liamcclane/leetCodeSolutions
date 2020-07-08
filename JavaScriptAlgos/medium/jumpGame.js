/**
 * morning, found anything good yet?
 * 
 * https://leetcode.com/problems/jump-game/
 * this doesn't look too bad, 
 * read it, maybe keep shopping
 * 
 * 
 * Hey this one is type changing 
 * https://leetcode.com/problems/add-to-array-form-of-integer/
 * 
 * 
 * 
 */

/**55. Jump Game
* Given an array of non-negative integers, you are initially positioned at the first index of the array.
* 
* Each element in the array represents your maximum jump length at that position.
* 
* Determine if you are able to reach the last index.
* 
*  
* 
* Example 1:
* 
* Input: nums = [2,3,1,1,4]
* Output: true
* Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index. //  okay ya
* hum, I will deff keep that in mind :) Thank you :) my other friend here has a one month old living on the other 
  side of the house, it's her niece, so I feel very cautious about visiting :/ but I'd love to see you :)

* 
* Example 2:
* 
* Input: nums = [3,2,1,0,4]
* Output: false
* Explanation: You will always arrive at index 3 no matter what. 
*              Its maximum jump length is 0, which makes it impossible to reach the last index.
* @param {number[]} nums
* @return {boolean}
*/
const canJumpWIP = nums => {
    let curr = 1, possibleJumpLen = [1], canJump = true;
    let p2 = 0;
    // let count = 0

    while (curr < nums.length) {
        if (nums[curr] == 0) {
            // canJump = false;
            p2++;
            if (p2 >= possibleJumpLen.length) {
                // console.log(`p2 ${p2}`);
                return false;
            }
            curr -= possibleJumpLen[p2 - 1];
        } else {
            if (!(possibleJumpLen.includes(nums[curr]))) {
                possibleJumpLen.push(nums[curr]);
                possibleJumpLen.sort();
            }
            curr += nums[curr];
        }

        // count++;
        // console.log(possibleJumpLen);
        // console.log(nums[curr]);
    }
    return true;
}


console.log(canJumpWIP([3, 2, 1, 0, 4])) // returns false
console.log(canJumpWIP([5,4,3,2,1,0,0])) // false
console.log(canJumpWIP([0,1])) // false
console.log(canJumpWIP([10,0])) // false

console.log(canJumpWIP([2, 2, 2, 0, 1, 4])); // true
console.log(canJumpWIP([3, 4, 1, 1, 2, 0, 2, 2])); // true
console.log(canJumpWIP([0])) // true
console.log(canJumpWIP([1])) // true
console.log(canJumpWIP([10])) // true
console.log(canJumpWIP([10,2])) // true
console.log(canJumpWIP([1,2])) // true


























var canJumpOld = function (nums) {
    let curr = 1, largestStepPossible = 1, otherStepQuantities = [], count = 0;
    let timesWeHaveRestarted = 0;

    while (pointer <= nums.length && count < 1000) {
        if (nums[curr] === 0) {
            // if we hit a zero
            // go back to where we were
            // then do the next largest step to see if we can finish
            timesWeHaveRestarted++;
            if (timesWeHaveRestarted === otherStepQuantities.length) {
                // here is where we can not "choose" another quantity of step
                // becasue we have exhausted them all...
                // this might need to be reset with the idea of 
                // path finding twice in the same array
                // ex [3,4,1,1,2,0,2,2]
                //       *              // lgNum = 4, oSteps = [1], restart = 0
                //               *      //
                //               needs resetting => we need to save how big our last step was...
                //                      // prevJump = 4, lgNum = 4, oStep = [1], restart = 1     if reset reaches 2 we should kick out...
                //       *              // now only take 1 step // why do we take one step here?
                //         *            // then take 4 steps
                //                 *    // lgNum = 4, oSteps = [1,2],  restart = 0


                return false;

            }
        } else {
            if (largestStepPossible < nums[curr]) {
                // overriding max
                if (!(otherStepQuantities.includes(largestStepPossible))) {
                    // only add to the otherStep arr if it isn't there
                    otherStepQuantities.push(largestStepPossible);
                }
                largestStepPossible = nums[curr];
            }
            curr += nums[curr];
            console.log(`${nums[curr]} added to ${curr}`);
        }
        count++;
    }

    return true;
};


const canJumpR = nums => {
    let curr = 1, next = 1, prev = 0, count = 0;
    while (curr < nums.length && count <= 2) {
        //  t - Table
        console.log("top of loop")
        console.log(`\tcurr: ${curr} \tprev: ${prev}\t count: ${count} `);
        console.log(`\tnums[curr]: ${nums[curr]}`);
        console.log(`\tnums[next]: ${nums[next]}`);
        next += nums[curr];
        if (nums[next] === 0) {
            curr = prev;
            count++;
        } else {
            curr = next;
            count = 1;
        }
        console.log("after logic")
        console.log(`\tcurr: ${curr} \tprev: ${prev}\t count: ${count} `);
        console.log(`\tnums[curr]: ${nums[curr]}`);
        console.log(`\tnums[next]: ${nums[next]}`);
        console.log()
    }
    if (count > 2) {
        return false;
    } else {
        return true;
    }
}

// console.log(canJumpR([3, 2, 1, 0, 4])) // returns false
// console.log(canJumpR([2, 2, 2, 0, 1, 4])); // true
// console.log(canJumpR([3, 4, 1, 1, 2, 0, 2, 2])); // true



// console.log(canJump([2, 3, 1, 1, 4]));
//                     //  *
//                     //      *
//                     //            
//                     //               * // ya? I think it's diff, let me adjust what I imagine
//                     // i was thinking it started at index one, but I think I was confused
// console.log("********")
// console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([3, 2, 0, 1, 4])); // should output true
                //   *
                //            *
                //               *      // correct? that's what I thought, but it added index 1 and 2, not 0 and 1