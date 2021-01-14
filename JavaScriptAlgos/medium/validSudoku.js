/**36. Valid Sudoku
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells 
 * need to be validated according to the following rules:
 * 
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    let dict = {};

    const checkAllRows = () => {
        const isValidRow = (ind) => {
            for (let i = 0; i < 9; i++) {
                let num = board[ind][i];
                if (num != "." && !(num in dict)) {
                    dict[num] = 0;
                } else if (num in dict) {
                    return false;
                }
            }
            dict = {};
            return true;
        };

        for (let i = 0; i < 9; i++) {
            if (!isValidRow(i)) {
                return false;
            }
        }
        return true;
    }

    const checkAllCols = () => {
        const isValidCol = (ind) => {
            for (let i = 0; i < 9; i++) {
                let num = board[i][ind];
                if (num != "." && !(num in dict)) {
                    dict[num] = 0;
                } else if (num in dict) {
                    return false;
                }
            }
            dict = {};
            return true;
        }

        for (let i = 0; i < 9; i++) {
            if (!isValidCol(i)) {
                return false;
            }
        }
        return true;
    }

    const checkAll3X3 = () => {
        /**
         */
        const check3X3 = (row, col) => {
            for (let i = row; i < (row + 3); i++) {
                for (let j = col; j < (col + 3); j++) {
                    let num = board[i][j];
                    if (num != "." && !(num in dict)) {
                        dict[num] = 0;
                    } else if (num in dict) {
                        return false;
                    }
                }
            }
            dict = {};
            return true;
        };

        // there are 9 3X3 squares to pass in and check
        for (let row = 0; row < 9; row += 3) {
            for (let col = 0; col < 9; col += 3) {
                if (!check3X3(row, col)) { return false; }
            }
        }
        return true;
    }

    if (checkAllRows() && checkAllCols() && checkAll3X3()) {
        return true;
    }
    return false;
    /**
     * Runtime: 100 ms, faster than 72.64% of JavaScript online submissions for Valid Sudoku.
     * Memory Usage: 41.6 MB, less than 70.71% of JavaScript online submissions for Valid Sudoku.
     */
};
