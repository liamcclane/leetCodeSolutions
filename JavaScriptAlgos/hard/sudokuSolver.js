/**37. Sudoku Solver
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * 
 * A sudoku solution must satisfy all of the following rules:
 * 
 * Each of the digits 1-9 must occur exactly once in each row.
 * Each of the digits 1-9 must occur exactly once in each column.
 * Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
 * The '.' character indicates empty cells.
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    let numsDict = {}, numOfEmptySlots = 0, oldNum = 0;
    const which3X3 = (row, col) => {
        let squ = "";
        const findCol = () => {
            if (col > 5) {
                return "6";
            } else if (col > 2) {
                return "3";
            } else {
                return "0";
            }
        };
        if (row > 5) {
            squ += "6" + findCol();
        } else if (row > 2) {
            squ += "3" + findCol();
        } else {
            squ += "0" + findCol();
        }
        return squ;
    };
    const addIntoTheDict = (row, col, target) => {
        if (target in numsDict) {
            numsDict[target].row.push(row);
            numsDict[target].col.push(col);
            numsDict[target]["3X3"].push(which3X3(row, col));
            if (numsDict[target].row.length === 9) {
                delete numsDict[target];
            }
            // else {
            //     numsDict[target].row.sort((a, b) => a - b);
            //     numsDict[target].col.sort((a, b) => a - b);
            //     numsDict[target]["3X3"].sort((a, b) => a - b);
            // }
        } else {
            numsDict[target] = {
                "row": [row], "col": [col], "3X3": [which3X3(row, col)]
            };
        }
    }
    const canExistInThisSpot = (row, col, target) => {
        // if there does not exist this number anywhere on the 
        // board, then we should add it as an potienal
        if (!(target in numsDict)) { return true; }
        // does target, 1, exist in this row already?
        if (numsDict[target].row.includes(row)) { return false; }
        if (numsDict[target].col.includes(col)) { return false; }
        let curr3X3 = which3X3(row, col);
        if (numsDict[target]["3X3"].includes(curr3X3)) { return false; }
        return true;
    };
    const whatCouldThisSlotBe = (row, col) => {
        let arr = [];
        for (let i = 1; i <= 9; i++) {
            let b = canExistInThisSpot(row, col, i);
            if (b) {
                arr.push(i);
            }
        }
        return arr;
    };
    const prettyBoardPrint = () => {
        for (let row = 0; row < 9; row++) {
            let arr = board[row];
            let s = "";
            for (let i = 0; i < 9; i++) {
                s += arr[i] + " ";
                if ((1 + i) % 3 === 0) { s += "|"; }
            }
            console.log(s);
            if ((1 + row) % 3 === 0) {
                console.log("-----------");
            }
        }
    };
    const onlyOneSpot = (number, obj) => {
        const findMissingNum = (arr) => {
            for (let i = 0; i < 9; i++) {
                if (!arr.includes(i)) { return i; }
            }
        };
        let missingCol = findMissingNum(obj.col),
            missingRow = findMissingNum(obj.row);
        board[missingRow][missingCol] = number + "!";
        numOfEmptySlots--;
        addIntoTheDict(missingRow, missingCol, number);
    };
    const traverseThroughSubBox = (row, col) => {
        for (let i = row; i < (row + 3); i++) {
            for (let j = 0; j < 9; j++) {
                board[i][j] = "*";
            }
        }
        for (let i = 0; i < 9; i++) {
            for (let j = col; j < (col + 3); j++) {
                board[i][j] = "*";
            }
        }
    }
    // console.log("given");
    // prettyBoardPrint();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (num === ".") {
                numOfEmptySlots++;
                continue;
            } else {
                addIntoTheDict(i, j, num);
            }
        }
    }
    // console.log("numsDict");
    // console.log(numsDict);
    while (numOfEmptySlots > 0 && oldNum != numOfEmptySlots) {
        oldNum = numOfEmptySlots;
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let num = board[i][j];
                if (num === ".") {
                    let arr = whatCouldThisSlotBe(i, j);
                    if (arr.length === 1) {
                        numOfEmptySlots--;
                        board[i][j] = arr[0].toString();
                        addIntoTheDict(i, j, arr[0].toString());
                    }
                }
            }
        }
    }
    console.log("numOfEmptySlots => ", numOfEmptySlots);
    if (numOfEmptySlots === 0) { return board; }
    // console.log("numsDict");
    // console.log(numsDict);
    prettyBoardPrint();
    for (let [key, val] of Object.entries(numsDict)) {
        if (val.row.length === 7) {
            onlyOneSpot(key, val);
        }
    }
    if (numOfEmptySlots === 0) { return board; }
    console.log("not done one more time");
    prettyBoardPrint();
    let subBoxes = ['00', '03', '06', '30', '33', '36', '60', '63', '66'];
    // for(let subBoxCorner of subBoxes) {
    //     traverseThroughSubBox(parseInt(subBoxCorner[0]), parseInt(subBoxCorner));
    // }
    traverseThroughSubBox(6, 6);
    console.log("done?")
    prettyBoardPrint();
    return board;
};
let board1 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
let board2 = [
    [".", ".", "9", "7", "4", "8", ".", ".", "."],
    ["7", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", "2", ".", "1", ".", "9", ".", ".", "."],
    [".", ".", "7", ".", ".", ".", "2", "4", "."],
    [".", "6", "4", ".", "1", ".", "5", "9", "."],
    [".", "9", "8", ".", ".", ".", "3", ".", "."],
    [".", ".", ".", "8", ".", "3", ".", "2", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", "2", "7", "5", "9", ".", "."]
];
// solveSudoku(board1);
// solveSudoku(board2);
let subBoard2 = [
    [".", ".", "9", "7", "4", "8", ".", ".", "2"],
    ["7", ".", ".", "6", ".", "2", ".", ".", "."],
    [".", "2", ".", "1", ".", "9", ".", ".", "."],
    [".", ".", "7", "9", "8", "6", "2", "4", "1"],
    ["2", "6", "4", "3", "1", "7", "5", "9", "8"],
    ["1", "9", "8", "5", "2", "4", "3", "6", "7"],
    [".", ".", ".", "8", "6", "3", ".", "2", "."],
    [".", ".", "2", "4", "9", "1", ".", ".", "6"],
    [".", ".", ".", "2", "7", "5", "9", ".", "."]
];
solveSudoku(subBoard2);