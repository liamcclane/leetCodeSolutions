/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for(let i = 0; i < nums.length; i++){
        let numsExcluding = nums.slice(0,i).concat(nums.slice(i+1,nums.length));
        if(numsExcluding.includes(nums[i])){
        } else {
            return nums[i];
        }
    }
};

let ex = [2,2,1];
let ex2 = [2,3,3,5,2];
let ex3a = [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1];
let ex3b = [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1];

console.log(singleNumber(ex));

/***
 * console.log(ex3a.splice(2,5));
 * console.log(ex3b.slice(2,5).concat(ex3b.slice(10,15)));
 * console.log();
 * console.log(`ex3a is ${ex3a}`)
 * console.log(`ex3b is ${ex3b}`)
 * in summary 
 * 
 * SPLICE will return the 'chunk' of the array you are pulling out
 * and ALTER the orginal array
 * 
 * while
 * SLICE pulls out the 'chunk' of the array you are looking at
 * and leave the orginal alone
 * 
 */