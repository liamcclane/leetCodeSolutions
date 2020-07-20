/**1295. Find Numbers with Even Number of Digits
 * 
 * Given an array nums of integers, return how many of them contain an even number of digits.
 * 
 * Example 1:
 * Input: nums = [12,345,2,6,7896]
 * Output: 2
 * Explanation: 
 *      12 contains 2 digits (even number of digits). 
 *      345 contains 3 digits (odd number of digits). 
 *      2 contains 1 digit (odd number of digits). 
 *      6 contains 1 digit (odd number of digits). 
 *      7896 contains 4 digits (even number of digits). 
 *      Therefore only 12 and 7896 contain an even number of digits.
 * 
 * Example 2:
 * Input: nums = [555,901,482,1771]
 * Output: 1 
 * Explanation: 
 *      Only 1771 contains an even number of digits.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findNumbersRitz = function (nums) {
    let count = 0;
    let tally = 0;
    for (let i = 0; i < nums.length; i++) {
        tally = 0;
        if (nums[i] % 10 == 0) {  //check if digit is zero added for numbers that end in 0 such as 580. 
                                    // We still want to count that as a digit
            console.log("inside this if");
            console.log(nums[i]);
            nums[i] = nums[i] / 10; //if it is divide by ten to reduce digits and keep tally, hang on, i can;t remeber why I subtracted instead of addinf lol
            console.log(nums[i]);
            tally--;
        }
        
        console.log(nums[i] / 10, "line 41"); // Hey :) did we fix it :) I think you did, I will submit to be sure, then would love to see how you would approach
        // sure :)
        while (nums[i] / 10 > 0) { //basically I counted the last digit, divide by ten, and keep track 
            nums[i] = Math.floor(nums[i] / 10);
            console.log(nums[i] + " at line 26***"); // i don;t think we even got here,  no, there is not printing...
            tally++;
            console.log(tally + " at line 28");
        }

        if (tally % 2 == 0) { // if the tally is even so is the number, so we increase the count
            count++;
            // console.log(nums[i] + " count = " + count);
        } else { tally++; }
        // tally = 0;

    }
    return count;
};

// Accepted!!! 07.20.2020
// Runtime: 80 ms, faster than 34.96% of JavaScript online submissions for Find Numbers with Even Number of Digits.
// Memory Usage: 37.1 MB, less than 27.21% of JavaScript online submissions for Find Numbers with Even Number of Digits.



const findNumbersLiaStringParsing = nums => {
    let count = 0; // to be returned and added to
    let ansArr = [];
    for(let i = 0; i < nums.length; i++) {
        let strNum = nums[i].toString();
        if(strNum.length%2 == 0) {
            console.log(nums[i], "nums line 100");
            console.log(typeof nums[i], "nums line 101");
            console.log(strNum, " line 102");
            console.log(typeof strNum, " line 103");
            console.log();
            count++;
            ansArr.push(strNum); // will be of type string
            ansArr.push(nums[i]); // will be of type number
        }
    }
    return count;
}
console.log(findNumbersLiaStringParsing([200,3001,4,55])); // lol make sense... let me submit and see how it goes
/**
 * Runtime: 84 ms, faster than 28.22% of JavaScript online submissions for Find Numbers with Even Number of Digits.
 * Memory Usage: 37 MB, less than 28.61% of JavaScript online submissions for Find Numbers with Even Number of Digits.
 */

// okay say they wanted me to return all the elements that are even though.
// would you create an array and push as you found the even numbers? Yay!!
// yes :), or I could try to do it in place.... hummmmm lol
// example 1: 2 
// console.log(findNumbersRitz([12,345,2,6,7896]));
// console.log();

// // // example 2: 0
// console.log(findNumbersRitz([437,315,322,431,686,264,442]));
// console.log();

// // // example 3: 0 
// console.log(findNumbersRitz([580, 317, 640, 957, 718, 764]));
// console.log();

// // example 4: 1 
// console.log(findNumbersRitz([100000])); // returns 1.... hum


const findNumbersLiaMathy = nums => {
    
    let count = 0;
    let len = nums.length; 

    for(let i = 0; i < len; i++) {
        let tens = 10;
        let tally = 0;
        let whileCatch = 0; // uhhhhh idk what is wrong, I would have to white board or pencile more for math shit
        // let me show you my string way lol cool
        while(nums[i]/tens > 0 && whileCatch < 1000) {
            nums[i] = nums[i]/tens;
            tens *= 10;
            whileCatch++;
            tally++;
        }
        console.log(tally, " line 82");
        if(tally % 2 == 0) {
            count++;
        }
    }
    return count;
}
// console.log(findNumbersLiaMathy([12,44,100,9]));
