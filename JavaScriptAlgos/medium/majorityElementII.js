/**229. Majority Element II
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 * 
 * Note: The algorithm should run in linear time and in O(1) space.
 * 
 * Example 1:
 * 
 * Input: [3,2,3]
 * Output: [3]
 * Example 2:
 * 
 * Input: [1,1,1,3,3,2,2,2]
 * Output: [1,2]
 * 
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
const majorElement = (nums) => {
    // edge cases

    if(nums.length <= 1) { return nums }

    if(nums.length === 2) {
        // what do we want to return if 
        // [11,12] -> [11,12] 

        if(nums[0] === nums[1]){
            nums.pop();
        }
        return nums;
    }
    
    if(nums.length === 3) {
        let dictLen3 = {};
        for(let val of nums) {
            if (val in dictLen3) {
                return [val];
            } else {
                dictLen3[val] = 1
            }
        }
        return []
    }
    // what do we want to return for 
    // [11,12,13] -> []
    // [11,11,13] -> [11]
    // 

    let magicNum = Math.ceil(nums.length/3);
    let dict = {};
    let ans = [];
    
    for(let val of nums) {
        if(val in dict){
            dict[val]++;
            if(dict[val]>= magicNum && !(ans.includes(val))) {
                ans.push(val);
            }
        } else {
            dict[val] = 1
        }
    }
    return ans;
};


// example 1: [3]
// console.log(majorElement([3,2,3]));

// example 2: [1,2]
// console.log(majorityElement([1,1,1,3,3,2,2,2]));

// test 1: [2]
// console.log(majorityElement([2,2]));

// test 2: [0] 
// console.log(majorElement([0,0,0]));

// test 3: [] 
// console.log(majorElement([1,2,3]));

// test 4: [1] 
// console.log(majorElement([1]));

// test 5: [1,2] 
// console.log(majorElement([1,2]));

// test 6: [3]
// console.log(majorElement([3, 3, 4]));

// test 7: [5] 
// console.log(majorElement([5,5,5,3]));



// Accepted!!
// Runtime: 80 ms, faster than 26.53% of JavaScript online submissions for Majority Element II.
// Memory Usage: 40.5 MB, less than 5.24% of JavaScript online submissions for Majority Element II.
