/**1436. Destination City
 * You are given the array paths, where paths[i] = [cityAi, cityBi] means 
 * there exists a direct path going from cityAi to cityBi. Return the 
 * destination city, that is, the city without any path outgoing to another city.
 * 
 * It is guaranteed that the graph of paths forms a line without any 
 * loop, therefore, there will be exactly one destination city.
 *  
 * 
 * Example 1:
 * Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
 * Output: "Sao Paulo" 
 * Explanation: Starting at "London" city you will reach 
 * "Sao Paulo" city which is the destination city. 
 * Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
 * 
 * Example 2:
 * Input: paths = [["B","C"],["D","B"],["C","A"]]
 * Output: "A"
 * Explanation: All possible trips are: 
 * "D" -> "B" -> "C" -> "A". 
 * "B" -> "C" -> "A". 
 * "C" -> "A". 
 * "A". 
 * Clearly the destination city is "A".
 * 
 * Example 3:
 * Input: paths = [["A","Z"]]
 * Output: "Z"
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = (paths) => {
    let dict = {};
    if (paths.length == 0) { return "" }; // do you do this even when the "constraints" say it must be at least one length?
    // okay I wasn't sure, if that is the case then no, and then we don't really need 
    // line 38, but it'll kick out faster. lol Got it, just asking . . . 
    if (paths.length == 1) { return paths[0][1] } // 
    for (let i = 0; i < paths.length; i++) {  // ugh my editor says there is something wrong with the for loop, but idk what.
        // console.log(paths)
        let zeroPlace = paths[i][0];
        let firstPlace = paths[i][1];

        if (zeroPlace in dict) {
            dict[zeroPlace][0] = true; // here dict[zeroPlace] evaluates to an object, then we create a new key 0 with a val true
        } else {
            dict[zeroPlace] = { 0: true }; // so here we are creating a key "new york" with a value of another object
        }

        if (firstPlace in dict) {
            dict[firstPlace][1] = true;
        } else {
            dict[firstPlace] = { 1: true };
        }

    }
    // console.log("dict");
    // console.log(dict);
    // hey looks good to me, um, so we just not need to find the key, who's value dictonary only has one key
    for (key in dict) { // right
        // double in loop
        if (!(0 in dict[key])) { return key }
    }
};

/**Yay accepted :) Sweet, dude! Great job! thanks, wanna do another one? I;m down, okie your choice
 * Runtime: 88 ms, faster than 30.06% of JavaScript online submissions for Destination City.
 * Memory Usage: 39.9 MB, less than 7.87% of JavaScript online submissions for Destination City.
 */


let ex1 = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]];
console.log(destCity(ex1)); // San Palo 
let ex2 = [["B", "C"], ["D", "B"], ["C", "A"]];
console.log(destCity(ex2)); // A
let ex3 = [["A", "Z"]];
console.log(destCity(ex3)); // Z

// lol my poor editor lol

