/**682. Baseball Game
 * You are keeping score for a baseball game with strange rules. 
 * The game consists of several rounds, where the scores of past 
 * rounds may affect future rounds' scores.
 * 
 * At the beginning of the game, you start with an empty record. 
 * You are given a list of strings ops, where ops[i] is the ith 
 * operation you must apply to the record and is one of the 
 * following:
 * 
 * An integer x - Record a new score of x.
 * "+" - Record a new score that is the sum of the previous two scores. 
 *      It is guaranteed there will always be two previous scores.
 * "D" - Record a new score that is double the previous score. 
 *      It is guaranteed there will always be a previous score.
 * "C" - Invalidate the previous score, removing it from the record. 
 *      It is guaranteed there will always be a previous score.
 * Return the sum of all the scores on the record.
 * 
 * 
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {

    let arr = [];

    for (let val of ops) {

        if (val == "C") {
            arr.pop();
            // console.log(arr);
            continue;
        }

        let x;
        let len = arr.length - 1;

        switch (val) {
            case "+":
                x = arr[len] + arr[len - 1];
                break;
            case "D":
                x = arr[len] * 2;
                break;
            default:
                x = parseInt(val);

        }
        arr.push(x);
        // console.log(arr);
    }

    return arr.reduce((acc, it) => acc + it, 0);
    /**
     * Runtime: 84 ms, faster than 52.25% of JavaScript online submissions for Baseball Game.
     * Memory Usage: 40 MB, less than 23.65% of JavaScript online submissions for Baseball Game.
     */

};
