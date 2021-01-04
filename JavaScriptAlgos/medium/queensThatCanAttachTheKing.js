/**1222. Queens That Can Attack the King
 * On an 8x8 chessboard, there can be multiple Black Queens and one White King.
 * 
 * Given an array of integer coordinates queens that represents the positions 
 * of the Black Queens, and a pair of coordinates king that represent the 
 * position of the White King, return the coordinates of all the queens 
 * (in any order) that can attack the King.
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
    let queenPositions = {},
        kingPos = {};
    kingPos[(king[0] + "" + king[1])] = 0;
    for (let queen of queens) {
        queenPositions[queen[0] + "" + queen[1]] = 0;
    }
    // going north
    const checkNorthSouth = (queen) => {
        const checkNorth = () => {
            for (let checkRow = queen[0] - 1; checkRow >= 0; checkRow--) {
                if ((checkRow + "" + queen[1]) in queenPositions) {
                    return false;
                }
                if ((checkRow + "" + queen[1]) in kingPos) {
                    return true;
                }
            }
            return false;
        }
        // going south
        const checkSouth = () => {
            for (let checkRow = queen[0] + 1; checkRow < 8; checkRow++) {
                if ((checkRow + "" + queen[1]) in queenPositions) {
                    return false;
                }
                if ((checkRow + "" + queen[1]) in kingPos) {
                    return true;
                }
            }
            return false;
        }
        return checkNorth() || checkSouth();
    }
    const checkEastWest = (queen) => {
        const checkEast = () => {
            for (let checkRow = queen[1] - 1; checkRow >= 0; checkRow--) {
                if ((queen[0] + "" + checkRow) in queenPositions) {
                    return false;
                }
                if ((queen[0] + "" + checkRow) in kingPos) {
                    return true;
                }
            }
            return false;
        }
        const checkWest = () => {
            for (let checkRow = queen[1] + 1; checkRow < 8; checkRow++) {
                if ((queen[0] + "" + checkRow) in queenPositions) {
                    return false;
                }
                if ((queen[0] + "" + checkRow) in kingPos) {
                    return true;
                }
            }
            return false;
        }
        return checkEast() || checkWest();
    }
    const downLeftDiagonal = (queen) => {
        const northWest = () => {
            for (let row = queen[0] - 1, col = queen[1] - 1;
                row >= 0 && col >= 0; row--, col--) {
                if ((row + "" + col) in queenPositions) {
                    return false;
                }
                if ((row + "" + col) in kingPos) {
                    return true;
                }
            }
            return false;
        }
        const southEast = () => {
            for (let row = queen[0] + 1, col = queen[1] + 1;
                row < 8 && col < 8; row++, col++) {
                if ((row + "" + col) in queenPositions) {
                    return false;
                }
                if ((row + "" + col) in kingPos) {
                    return true;
                }
            }
            return false;
        }
        return northWest() === true || southEast() === true;
    }
    const upRightDiagonal = (queen) => {
        const southWest = () => {
            for (let row = queen[0] + 1, col = queen[1] - 1;
                row < 8 && col >= 0; row++, col--) {
                if ((row + "" + col) in queenPositions) {
                    return false;
                }
                if ((row + "" + col) in kingPos) {
                    return true;
                }
            }
            return false;
        }
        const northEast = () => {
            for (let row = queen[0] - 1, col = queen[1] + 1;
                col < 8 && row >= 0; row--, col++) {
                if ((row + "" + col) in queenPositions) {
                    return false;
                }
                if ((row + "" + col) in kingPos) {
                    return true;
                }
            }
            return false;
        }
        return southWest() || northEast();
    }
    const findQueenEndPoints = (queen) => {
        if (checkNorthSouth(queen)) {
            return "hit King vertical";
        }
        if (checkEastWest(queen)) {
            return "hit hortizontal";
        }
        if (downLeftDiagonal(queen)) {
            return "hit downleft";
        }
        if (upRightDiagonal(queen)) {
            return "hit up right"; ''
        }
        return "king never hit";
    }

    let ans = [];
    for (let queen of queens) {
        // console.log("queen", queen);
        let res = findQueenEndPoints(queen);
        // console.log(res);
        if (res != "king never hit") {
            ans.push(queen);
        }
    }
    return ans;
    /**
     * Runtime: 88 ms, faster than 33.87% of JavaScript online submissions for Queens That Can Attack the King.
     * Memory Usage: 40.9 MB, less than 12.90% of JavaScript online submissions for Queens That Can Attack the King.
     */
};