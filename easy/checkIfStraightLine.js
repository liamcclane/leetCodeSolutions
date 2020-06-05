/**1232. Check If It Is a Straight Line
 * You are given an array coordinates, coordinates[i] = [x, y], 
 * where [x, y] represents the coordinate of a point. 
 * Check if these points make a straight line in the XY plane.
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    /**
     * calculates the slope between two points
     * returns string "undef" if the slope is undefined
     * @param {number[]} cod1 [x,y] position coordinates
     * @param {number[]} cod2 [x,y] position coordinates
     * @returns either number or "undef"
     */
    const findSlope = (cod1, cod2) => {
        if (cod1[0] - cod2[0] === 0) return "undef";
        return ((cod1[1] - cod2[1]) / (cod1[0] - cod2[0]));
    }

    let slope = findSlope(coordinates[0], coordinates[1]);

    for (let i = 1; i < coordinates.length - 1; i++) {
        let runningSlope = findSlope(coordinates[i], coordinates[i + 1]);
        if (runningSlope != slope) {return false;}
    }
    return true;
};