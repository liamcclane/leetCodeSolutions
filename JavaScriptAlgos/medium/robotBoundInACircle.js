/**1041. Robot Bounded In Circle
 * On an infinite plane, a robot initially stands 
 * at (0, 0) and faces north.  
 * The robot can receive one of three instructions:
 * 
 * "G": go straight 1 unit;
 * "L": turn 90 degrees to the left;
 * "R": turn 90 degrees to the right.
 * The robot performs the instructions given 
 * in order, and repeats them forever.
 * 
 * Return true if and only if there exists a circle 
 * in the plane such that the robot never leaves the circle.
 * 
 * Example 1:
 * Input: "GGLLGG"
 * Output: true
 * Explanation: 
 * The robot moves from (0,0) to (0,2), 
 * turns 180 degrees, and then returns to (0,0).
 * When repeating these instructions, the robot 
 * remains in the circle of radius 2 centered at the origin.
 * 
 * Example 2:
 * Input: "GG"
 * Output: false
 * Explanation: 
 * The robot moves north indefinitely.
 * 
 * Example 3:
 * Input: "GL"
 * Output: true
 * Explanation: 
 * The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {

    // I made some notes in the chat too
    // I think example 3 is the most telling...
    // We want to think about the final position of the robot 
    // with respects to where it started 
    // we need to check if the robot has either
    // returned back to its origin (0,0) OR
    // is not facing forward "N" any more 

    let robot = { position: [0, 0], cardinalDirection: "N" };

    /**Turn Robot
     * this method look at where the robot is 
     * the moves him left or right
     * I used a string "NESW" as a "clock" to rotate around 
     * and used indexOf to find where I was
     * then moved +/- accordingly
     * at the end I had to check if we were out of bounds of the indexes 0-3
     * @param {string} LeftOrRight 
     * @param {string} nextMovement 
     */
    const turnRobot = (LeftOrRight) => {
        let currCard = robot.cardinalDirection,
            directions = "NESW",
            currIndDir = directions.indexOf(currCard);
        if (LeftOrRight == "L") {
            currIndDir--;
        } else if (LeftOrRight == "R") {
            currIndDir++;
        }
        if (currIndDir < 0) {
            currIndDir = 3;
        } else if (currIndDir > 3) {
            currIndDir = 0;
        }
        // here I reset the robot
        robot.cardinalDirection = directions[currIndDir];
    }
    /**Go Forward
     * this method looks at the robots face direction 
     * then moves his forward that direction AND pushes into the 
     * corresponding arrays of movement
     */
    const goForward = () => {
        let currPos = robot.position,
            currCard = robot.cardinalDirection;
        if (currCard === "N") {
            currPos[1]++;
        } else if (currCard === "S") {
            currPos[1]--;
        } else if (currCard === "E") {
            currPos[0]++;
        } else if (currCard === "W") {
            currPos[0]--;
        }
        robot.position == currPos;
    }


    /**Helper
     * this helper method will manipulate the robot according to the instructions
     * will be called during the for loop
     * @param {string} movement, "G","L" or "R"
     */
    const helper = (movement) => {
        // this was the first helper method I wrote for the algo
        // I started putting a ton of logic inside of it
        // but then decided to break it up, lol

        if (movement == "R" || movement == "L") {
            // turn him 90 degrees, but we need to think
            // about wether he is turning again, or will 
            // be using "side momentum",
            // we will do that by looking at the command in 
            // front of what we are at
            turnRobot(movement);
        } else if (movement == "G") {
            //  robot is moving forward, 
            // check his direction and 
            // change his coordinates
            goForward();
        }

    }
    // I looped though instructions
    // moving him around and pushing to the vertical/horizontal arrays
    // and did this for all except for the last one on the array
    let instructionsLength = instructions.length;
    for (let i = 0; i < instructionsLength; i++) {
        // console.log(instructions[i]);
        helper(instructions[i]);
        // console.log(robot);

    }
    return ((robot.position[0] == 0 && robot.position[1] === 0) || robot.cardinalDirection != "N");
    /**
     * Runtime: 64 ms, faster than 99.07% of JavaScript online submissions for Robot Bounded In Circle.
     * Memory Usage: 36.7 MB, less than 87.04% of JavaScript online submissions for Robot Bounded In Circle.
     */
};

// console.log(isRobotBounded("GGLLGG")); // true
// console.log()
// console.log(isRobotBounded("GL")); // true
// console.log()
// console.log(isRobotBounded("GGLL")); // true
// console.log()
// console.log(isRobotBounded("GLRLLGLL")); // true
// console.log()
// console.log(isRobotBounded("GG")); // false
// console.log()
// console.log(isRobotBounded("GGGLGGR")); // should be false

/**tags for later look up
 * SeptemberChallenge
 */