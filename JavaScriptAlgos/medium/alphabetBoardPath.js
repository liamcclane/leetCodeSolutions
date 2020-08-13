/**1138. Alphabet Board Path
 * On an alphabet board, we start at position (0, 0), corresponding to character board[0][0].
 * 
 * Here, board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"], as shown in the diagram below.
 * 
 * We may make the following moves:
 * 
 * 'U' moves our position up one row, if the position exists on the board;
 * 'D' moves our position down one row, if the position exists on the board;
 * 'L' moves our position left one column, if the position exists on the board;
 * 'R' moves our position right one column, if the position exists on the board;
 * '!' adds the character board[r][c] at our current position (r, c) to the answer.
 * (Here, the only positions that exist on the board are positions with letters on them.)
 * 
 * Return a sequence of moves that makes our answer equal to target in the minimum 
 * number of moves. You may return any path that does so.
 * 
 * 
 * Example 1:
 * Input: target = "leet"
 * Output: "DDR!UURRR!!DDD!"
 * 
 * Example 2:
 * Input: target = "code"
 * Output: "RR!DDRR!UUL!R!"
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
    const keyBoardRow = [
        "abcde",
        "fghij",
        "klmno",
        "pqrst",
        "uvwxy",
        "z"
    ];

    let ans = "";
    const findPath = (start, end) => {
        console.log("start ", start, " --", end, " end");
        if (start === end) { return "!" }
        let s = "", startRowInd, endRowInd, currInd;
        for (let i = 0; i < keyBoardRow.length; i++) {
            let boardRow = keyBoardRow[i];
            if (boardRow.includes(end)) {
                endRowInd = i;
            }
            if (boardRow.includes(start)) {
                startRowInd = i;
                currInd = boardRow.indexOf(start);
            }
        }

        if (startRowInd < endRowInd) {
            // console.log("\tmove down ", endRowInd - startRowInd, " times");
            s += "D".repeat(endRowInd - startRowInd);
            console.log(s, " <- line 58");
        } else if (startRowInd > endRowInd) {
            // console.log("\tmove up", startRowInd - endRowInd, " times");
            s += "U".repeat(startRowInd - endRowInd);
        }

        if (endRowInd == 5) {
            // console.log(s.slice(0, s.length - 1), " <- the slice");
            s = s.slice(0, s.length - 1);
            console.log(s, " <- s");
        }

        // now that we have "moved vertically" we need to think about horizontal
        let endPoint = keyBoardRow[endRowInd].indexOf(end);
        // if (currInd == endPoint) {
        //     return s += "!";
        // }
        if (endPoint > currInd) {
            s += "R".repeat(endPoint - currInd);
        } else if (endPoint < currInd) {
            s += "L".repeat(currInd - endPoint);
        }

        if (endRowInd == 5) {
            s += "D";
            console.log(s, " <- s endRowInd");
        }

        return s += "!";

    }

    ans += findPath("a", target[0]);
    for (let i = 0; i < target.length - 1; i++) {
        ans += findPath(target[i], target[i + 1]);
    }
    return ans;
};
/**
 * Runtime: 68 ms, faster than 96.23% of JavaScript online submissions for Alphabet Board Path.
 * Memory Usage: 37.1 MB, less than 52.83% of JavaScript online submissions for Alphabet Board Path.
 */
console.log(alphabetBoardPath("leet"));
console.log("DDR!UURRR!!DDD!");
console.log(alphabetBoardPath("code"));
console.log();
console.log(alphabetBoardPath("cab"));
console.log();
console.log(alphabetBoardPath("zdz"));
console.log("DDDDD!UUUUURRR!DDDDLLLD!  answer should be");





