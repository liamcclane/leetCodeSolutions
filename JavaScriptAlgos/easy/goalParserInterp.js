/**1678. Goal Parser Interpretation
 * You own a Goal Parser that can interpret a string command. 
 * The command consists of an alphabet of "G", "()" and/or "(al)" in some order. 
 * The Goal Parser will interpret "G" as the string "G", "()" 
 * as the string "o", and "(al)" as the string "al". 
 * The interpreted strings are then concatenated in the original order.
 * 
 * Given the string command, return the Goal Parser's interpretation of command.
 * 
 * Example 1:
 * 
 * Input: command = "G()(al)"
 * Output: "Goal"
 * Explanation: The Goal Parser interprets the command as follows:
 * G -> G
 * () -> o
 * (al) -> al
 * The final concatenated result is "Goal".
 * 
 * Example 2:
 * Input: command = "G()()()()(al)"
 * Output: "Gooooal"
 * 
 * Example 3:
 * Input: command = "(al)G(al)()()G"
 * Output: "alGalooG"
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {

    let ans = "";

    for (let i = 0; i < command.length; i++) {

        if (command[i] == "(" && command[i + 1] == ")") {
            ans += "o";
            i++;
        } else if (command.charAt(i) == "G") {
            ans += "G";
        } else {
            ans += "al";
            i += 3;
        }

    }
    return ans;
    /**
     * Runtime: 76 ms, faster than 85.27% of JavaScript online submissions for Goal Parser Interpretation.
     * Memory Usage: 38.5 MB, less than 66.09% of JavaScript online submissions for Goal Parser Interpretation.
     */
};