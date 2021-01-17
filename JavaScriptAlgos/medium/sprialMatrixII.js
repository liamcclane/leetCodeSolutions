/**59. Spiral Matrix II
 * Given a positive integer n, generate an n x n matrix filled with 
 * elements from 1 to n2 in spiral order.
 * 
 * Example 1:
 * Input: n = 3
 * Output: [[1,2,3],[8,9,4],[7,6,5]]
 * 
 * Example 2:
 * Input: n = 1
 * Output: [[1]]
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let sub = [], mat = [];
    const generateMatrix = () => {
        for(let i = 0; i < n; i++) {
            sub.push(0);
        }
        for(let i = 0; i < n; i++) {
            mat.push(0);
        }
    }
    generateMatrix();
    var spiralOrder = function (matrix) {
        let m = matrix.length, sideN = matrix[0].length,
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
            if (direction === "right" && (currJ + 1) < sideN && !((currI + "" + (currJ + 1)) in touchedPositions)) {
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
        while (ans.length < (m * sideN)) {
            move();
        }
        return ans;
        /**
         * Runtime: 76 ms, faster than 70.13% of JavaScript online submissions for Spiral Matrix.
         * Memory Usage: 38.5 MB, less than 38.72% of JavaScript online submissions for Spiral Matrix.
         */
    };
    return spiralOrder(mat);
};
generateMatrix(3);
// let matrix = [], numbers = [];
// const fillStuff = () => {
//     let arr = [];
//     for (let i = 0; i < n; i++) {
//         arr.push(0);
//     }
//     for (let i = 0; i < n; i++) {
//         matrix.push(arr.slice(0, n));
//     }
//     for (let i = n * n; i > 0; i--) {
//         numbers.push(i);
//     }
// }
// let dict = {}, currI = 0, currJ = 0,
//     directions = ["right", "down", "left", "up"], direction = directions[0];
// const spiralTraverse = () => {
//     if (!((currI + "" + currJ) in dict)) {
//         // console.log("before Pop numbers", numbers);
//         matrix[currI][currJ] = numbers.pop();
//         console.log(matrix);
//         // console.log("after numbers", numbers, "\n\n");
//         dict[currI + "" + currJ] = 0;
//     }
//     // all of the valid moves
//     if (direction === "right" && (currJ + 1) < n && !((currI + "" + (currJ + 1)) in dict)) {
//         currJ++;
//         return;
//     } else if (direction === "down" && (currI + 1) < n && !(((currI + 1) + "" + currJ) in dict)) {
//         currI++;
//         return;
//     } else if (direction === "left" && ((currJ - 1) >= 0) && !((currI + "" + (currJ - 1)) in dict)) {
//         currJ--;
//         return;
//     } else if (direction === "up" && (currI - 1) >= 0 && !(((currI - 1) + "" + currJ) in dict)) {
//         currI--;
//         return;
//     } else {
//         // else change directions
//         direction = directions[((directions.indexOf(direction) + 1) % 4)];
//     }
// }
// fillStuff();
// while (numbers.length != 0) {
//     spiralTraverse();
// }
// return matrix;
/**
 * 
 * 
 * 
 * WORKS BUT TIMED OUT
 * 
var generateMatrix = function(n) {

    let count = 1, sub = [], mat = [];
    
    for(let row = 0; count <= (n*n); count++) {
        
        sub.push(count);
        if(sub.length === n) {
            mat.push(sub);
            sub = [];
        }
    }
    count = 1;
    let directions = ["right", "down", "left", "up"],
        currI = 0, currJ = 0, direction = directions[0],
        touchedPositions = {}, ans = [];
    
    const move = () => {
        if(!((currI + "" + currJ) in touchedPositions)) {
            mat[currI][currJ] = count;
            count++;
            // make your position a key in the touchedPositions dict
            touchedPositions[currI + "" + currJ] = 0;
        }
        // all of the valid moves
        if (direction === "right" && (currJ + 1) < n && !((currI + "" + (currJ + 1)) in touchedPositions)) {
            currJ++;
            return;
        } else if (direction === "down" && (currI + 1) < n && !(((currI + 1) + "" + currJ) in touchedPositions)) {
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
    while(count <= (n*n)) {
        move();
    }
    return mat;
};
 */