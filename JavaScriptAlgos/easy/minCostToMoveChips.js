// https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/
/**1217. Minimum Cost to Move Chips to The Same Position
 * We have n chips, where the position of the ith chip is position[i].
 * 
 * We need to move all the chips to the same position. 
 * In one step, we can change the position of the ith chip from position[i] to:
 * 
 * position[i] + 2 or position[i] - 2 with cost = 0.
 * position[i] + 1 or position[i] - 1 with cost = 1.
 * Return the minimum cost needed to move all the chips to the same position.
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function(chips) {
    let len = chips.length;
    let dict = { 
        "evens": 0,
        "odds": 0, 
    };
    for (let i = 0; i < len; i++){
        if(chips[i]%2 == 0){dict["evens"]++;}
        else { dict["odds"]++;}
    }
    return Math.min(dict["odds"], dict["evens"]);
    /**
     * Runtime: 72 ms, faster than 82.69% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.
     * Memory Usage: 38.3 MB, less than 32.69% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.
     */
};

 /**
  * hey, 
  * so the given array is telling us positions of where the chips are.
  * [2,2,2,3,3]
  * then whenever we can, we want to move the chips by two bc those are zero cost.
  * I think we also want to think about all the chips moving to the pile that is the most 
  * established
  * Agree so far
  * I kinda want to make a dict....  of the mat... like
  * well thinking about example three, I don't think it is most efficient...
  * 
  * So, yes it sounds like a dict is the best approach to me
  * 
  * Have you read the hints? I just realized there are a few
  * 
  * do you get what they mean by parity Yes, i think so. In this case, 
  * it would be the number of times in the array, right? so the "level" or height of each number?
  * 
  * ummmm I see it as, just checking which of the coins are odd or even, 
  * every even jump is zero cost OHHHHHHHH
  * so we only really YA!!! haha
  * we need to see the difference of "odd" coins that need to take one step
  * So, wait, why in example one do we move one at a time? 
  * okay so with the example of 
  * 
  * [2,2,2,3,3]
  * we declare "the parity" (thanks) we want to be even numbers
  * 
  * there are two coins that sit on the odd spots, so two coins need to be moved
  * onto even numbers to be zero cost moves
  * 
  * let me make another example
  * 
  * 
  * 
  *           *
  *     *     *     *  *
  *    ------------------------
  *     1  2  3  4  5  6  7
  * 
  * okay at the above example what would we want to return?
  * input [1,3,3,5,6]
  * 
  * i would think 3, but i'm not so sure
  * let me put it in leetcode and see if i understand the algo,
  * I think it should return 1
  * okay leet code says it returns 1, so. 
  * 
  * is it because everything was odd except the 6?
  * 
  * YES!
  * so the parity we want all the coins to sit on is "odd" and the cost of moving 
  * the single 6 coin onto an odd number is one 
  * if there were two 6's in the array, would the answer be 2? Okay, cool
  * So maybe a dict that count odds and evens?   YA, 
  * 
  * 
  * YES
  * but it get's "tricky" when we have a close amount of coins on both odd and even numbers
  * :)
  * So the parity is referring to the position
  * 
  * 
  * 
  * 
  * 
  */

/**
 * Examples
 * Input: position = [1,2,3]
 * Output: 1
 * Explanation: First step: Move the chip at position 3 to position 1 with cost = 0.
 * Second step: Move the chip at position 2 to position 1 with cost = 1.
 * Total cost is 1.
 **************** 
 * Input: position = [2,2,2,3,3]
 * Output: 2
 * Explanation: We can move the two chips at poistion 3 to position 2. 
 * Each move has cost = 1. The total cost = 2.
 ***************
 * Input: position = [1,1000000000]
 * Output: 1
 */