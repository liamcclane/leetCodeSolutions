/**1491. Average Salary Excluding the Minimum and Maximum Salary
 * Given an array of unique integers salary where salary[i] is the salary of the employee i.
 * Return the average salary of employees excluding the minimum and maximum salary.
 * 
 * Example 1:
 * Input: salary = [4000,3000,1000,2000]
 * Output: 2500.00000
 * Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
 * Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500
 * 
 * Example 2:
 * Input: salary = [1000,2000,3000]
 * Output: 2000.00000
 * Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
 * Average salary excluding minimum and maximum salary is (2000)/1= 2000
 * 
 * Example 3:
 * Input: salary = [6000,5000,4000,3000,2000,1000]
 * Output: 3500.00000
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let minSal = salary[0];
    let maxSal = salary [0]; // lol nice
    let sum = 0;
    for (let i = 0; i < salary.length; i++) {
        if (salary[i] < minSal) {
            minSal = salary[i];
        } else if(salary[i] > maxSal){
            maxSal = salary[i];
        } 
        sum += salary[i];
        // so I don't think we can be looking and adding at the same time, i do see the problem 
        // unless we do something similary to the Abby and Bob chocolate switch thing,
        // add up every time not matter what, then just subtract the max and min
        // nice :)
    }
    sum -= minSal; 
    // I like this one :) we still did it in oh of N time :) while finding the max and min
    //  I think it is funny how a lot of humans instinct is to add and multiply, as opposed to subtracting and dividing
    // there was this lady, teach I had in middle school who's husband had a big stroke, and as he was making new connections back in his
    // brain, he got really fast and smart again with addition and multiplication, but had hard time with concepts of subtraction and division
    
    
    // that's so interesting. I think we have negative connotations with less, but to think of how instinctive that is, crazy
    
    // agreed :) 
    // yay!! this was fun!
    sum -= maxSal; 
    // return sum/salary.length - 2; // will this not follow pedmas? will it subtract before dividing? // NO lol I'm a bit of a math nerd with some things
    // lol I love it, FOILing and stuff can be fun lol 
    // ever though of an AA in Math? Not for a long time, I have been thinking lately of school, I have time, but money not so much
    // I understand that sister.
    // Yup, always have had more time than money XD
    return sum/(salary.length - 2); // oh, idk, I don't think so, but let's just test to see then all parens
};
// Accepted!! 07.22.2020
// Runtime: 92 ms, faster than 27.96% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
// Memory Usage: 36.6 MB, less than 100.00% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
// lol 100!!! yaya
// ya what counts as memory usage? maybe dict and arrays. idk

/** WOOT WOOT 100!!! I've gotten that on a few, it always surprises me, ohh that makes sense
 * 
 * Runtime: 100 ms, faster than 18.57% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
 * Memory Usage: 36.8 MB, less than 100.00% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
 */

 // so your's was faster, I think destructuring Math.max/min is a full loop => mine is 3N (three Oh of n)
 // nah, same space, yours is faster, one loop though and that is all you needed, I did 3 loops, none of them nested
 // :)
 // okie again tomorrow :)
 // AWH Birthday!!! yay!!!!! okie, HAPPY early BIRTHDAY, look at me I can not even type lolol
 // right hahahahahhaha
 // well have a very happy birthday, let me know when you wanna connect again :)
// Sounds good, maybe friday until 11:30 or satudray late morning. lolz I only do late mornings lol, 
// lol the word don't just started typing itself after morning hahahaha
// okieee bye bye 
// Saturday it is lol :)Hahhaha Byeeeeee! 
// Yay! Go us! Well, friend, we can chat but today is my last day to be 35. I have a pedi appointment in the morning and then visiting grandpa
let salary1 = [4000, 3000, 1000, 2000];
console.log(average(salary1)); // 2500.00000
console.log(average([1000, 2000, 3000]));//2000.00000
console.log(average([6000, 5000, 4000, 3000, 2000, 1000]));//3500.00000


const averageSal = salary => {
    let min = Math.min(...salary); // these two lines are destructuring the triple dots spread out the elements, interesting
    let max = Math.max(...salary); // these two lines are destructuring the triple dots spread out the elements
    let sum = 0;
    salary.map(ele=> { // the .map() is a for loop, but did not like the key word continue // saw that in the terminal
        if(ele != min && ele != max){
            sum += ele;
        }
    })
    // for(let ele of salary) {
    //     if(ele == min || ele == max) { // ::thumbs up:: Not much really helped me then, I would get so much more out of that class now 
    //         // I am sure, it would be fun, you would be top of the class for sure :))
    //         // pssssttt stop it lol
    //         // haha, only if you aren't there ;) lol
    //         //:) the standford one cool :))
    //         continue; // continue vs break as interesting to use and get to know
    //     }
    //     sum += ele;
    // }
    return sum/(salary.length - 2);
}
/**
 * Runtime: 120 ms, faster than 7.75% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
 * Memory Usage: 36.6 MB, less than 100.00% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
 */
console.log();
console.log(averageSal(salary1)); // 2500.00000
console.log(averageSal([1000, 2000, 3000]));//2000.00000
console.log(averageSal([6000, 5000, 4000, 3000, 2000, 1000]));//3500.00000


// nice!
// I have tried that one but am stuck on numbers larger than the 64bit thingy,
// so like I changed it to a string and then back to a number, but wh
// i was thinking of changing to an array and then back into a number lol I like arrays
// that might work better.... but I think we will still run into a similar problem.....

//  say we have reserseInt(12345678999999) // should output 99999987654321, 
// if we did it a more mathy way,
// I think we still need the demoniator, to be 12345678999999/100000000000000, or however many zeros go there
// ya becuase it sucks fat eggs

// We could work on it, lol I am down to try a new method, okay lol we are both so agreeable

// i'll check it out later since you've already ut in soem time, Hahaha, for sure 


// how do you feel about matrices? 
// skeptical, 
// lol, they're intimidating to me
// there is this one I got stuck on, because it wants it done in place.

// which one?
// I will open the file



// okay, that one should be "easy" lol
// sure 1431
// :)

// okay nvm I cannot find it lol, but this one might be "fast" and easy lol