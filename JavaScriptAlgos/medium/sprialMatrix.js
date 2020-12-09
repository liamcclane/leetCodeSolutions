/**54. Spiral Matrix
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * Input: move clockwise
 * matrix = [
 *          [1,2,3],
 *          [4,5,6],
 *          [7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

    let m = matrix.length, n = matrix[0].length,
        directions = ["right", "down", "left", "up"],
        currI = 0, currJ = 0, direction = directions[0],
        touchedPositions = {}, ans = [];
    const move = () => {
        // it this is the first time evaluating at this position 
        if (!((currI + "" + currJ) in touchedPositions)) {
            // add where you currently are to the ans array
            ans.push(matrix[currI][currJ]);
            // make your position a key in the touchedPositions dict
            touchedPositions[currI + "" + currJ] = 0;
        }
        // all of the valid moves
        if (direction === "right" && (currJ + 1) < n && !((currI + "" + (currJ + 1)) in touchedPositions)) {
            currJ++;
            return;
        } else if (direction === "down" && (currI + 1) < m && !(((currI + 1) + "" + currJ) in touchedPositions)) {
            currI++;
            return;
        } else if (direction === "left" && ((currJ - 1) >= 0) && !((currI + "" + (currJ - 1)) in touchedPositions)) {
            currJ--;
            return;
        } else if (direction === "up" && (currI - 1) >= 0 && !(((currI - 1) + "" + currJ) in touchedPositions)) {
            currI--;
            return;
        } else {
            // else change directions
            direction = directions[((directions.indexOf(direction) + 1) % 4)];
        }
    }
    while (ans.length < (m * n)) {
        move();
    }
    return ans;

};
/**
 * this function goes in a circle not taking into account 
 * positions we have already added to the ans array....
 * @param {number[][]} matrix 
 */
const goesInACircle = (matrix) => {
    let m = matrix.length, n = matrix[0].length;
    let currI = 0, currJ = 0, direction = "right";
    let ans = [];
    const changeDirections = () => {
        let directions = ["right", "down", "left", "up"];
        direction = directions[((directions.indexOf(direction) + 1) % 4)];
    }
    const move = () => {
        if (direction === "right") {
            if ((currJ + 1) >= n) {
                changeDirections();
                move();
            } else {
                ans.push(matrix[currI][currJ]);
                currJ++;
            }
        } else if (direction === "down") {
            if ((currI + 1) >= m) {
                changeDirections();
                move();
            } else {
                ans.push(matrix[currI][currJ]);
                currI++;
            }
        } else if (direction === "left") {
            if ((currJ - 1) < 0) {
                changeDirections();
                move();
            } else {
                ans.push(matrix[currI][currJ]);
                currJ--;
            }
        } else if (direction === "up") {
            if ((currI - 1) < 0) {
                changeDirections();
                move();
            } else {
                ans.push(matrix[currI][currJ]);
                currI--;
            }
        }

    }

    while (ans.length < (m * n)) {
        console.log("ans", ans, "\ncurrent position [", currI, ", ", currJ, "]\ndirection", direction, "\n\n");
        move();
    }

    return ans;
}
/**tags for later look up
 * unfinished
 */