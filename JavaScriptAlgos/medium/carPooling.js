/**1094. Car Pooling
 * You are driving a vehicle that has capacity empty seats 
 * initially available for passengers.  The vehicle only 
 * drives east (ie. it cannot turn around and drive west.)
 * 
 * Given a list of trips, 
 * trip[i] = [num_passengers, start_location, end_location] 
 * contains information about the i-th trip: the number of passengers 
 * that must be picked up, and the locations to pick them up and drop 
 * them off.  The locations are given as the number of kilometers 
 * due east from your vehicle's initial location.
 * 
 * Return true if and only if it is possible to pick up and drop 
 * off all passengers for all the given trips. 
 * 
 * Example 1:
 * 
 * Input: trips = [[2,1,5],[3,3,7]], capacity = 4
 * Output: false
 * 
 * Example 2:
 * Input: trips = [[2,1,5],[3,3,7]], capacity = 5
 * Output: true
 * 
 * Example 3:
 * Input: trips = [[2,1,5],[3,5,7]], capacity = 3
 * Output: true
 * 
 * Example 4:
 * Input: trips = [[3,2,7],[3,7,9],[8,3,9]], capacity = 11
 * Output: true
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {

    let amountOfPeopleOnBus = 0;

    let onInfo = {};
    let offInfo = {};

    for (let i = 0; i < trips.length; i++) {
        let amount = trips[i][0],
            onDest = trips[i][1],
            offDest = trips[i][2];
        if (onDest in onInfo) {
            onInfo[onDest] += amount;
        } else {
            onInfo[onDest] = amount;
        }
        if (offDest in offInfo) {
            offInfo[offDest] += amount;
        } else {
            offInfo[offDest] = amount;
        }
    }
    let max = Math.max(...trips.map(ele => ele[1]), ... trips.map(ele => ele[2]));
    // console.log(max);
    for(let i = 1; i <= max; i++) {
        if(i in offInfo) {
            amountOfPeopleOnBus -= offInfo[i];
        }
        if(i in onInfo) {
            amountOfPeopleOnBus += onInfo[i];
        }
        if(amountOfPeopleOnBus > capacity) {
            return false;
        }
    }
    return true;
    /**
     * Runtime: 104 ms, faster than 41.11% of JavaScript online submissions for Car Pooling.
     * Memory Usage: 39.5 MB, less than 26.67% of JavaScript online submissions for Car Pooling.
     */
};

console.log("***true****");
console.log(carPooling([[2, 1, 5], [3, 3, 7]], 5));
console.log(carPooling([[2, 1, 5], [3, 5, 7]], 3));
console.log(carPooling([[3, 2, 7], [3, 7, 9], [8, 3, 9]], 11));
console.log(carPooling([[3, 2, 8], [4, 4, 6], [10, 8, 9]], 11));
console.log("***false****");
console.log(carPooling([[2, 1, 5], [3, 3, 7]], 4));