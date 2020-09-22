package JavaAlgos.medium;

import java.util.HashMap;

class CarPooling {
    public static void main(String[] args) {
        int[][] ex1Trips = { { 3, 2, 8 }, { 4, 4, 6 }, { 10, 8, 9 } };
        int cap = 11;
        System.out.println(carPooling(ex1Trips, cap));

    }

    public static boolean carPooling(int[][] trips, int capacity) {
        HashMap<Integer, Integer> onInfo = new HashMap<Integer, Integer>();
        HashMap<Integer, Integer> offInfo = new HashMap<Integer, Integer>();

        int max = 0;
        int amountOfPeopleOnBus = 0;
        for (int[] trip : trips) {
            // finding the max eastward we will travel
            if (max < trip[1]) {
                max = trip[1];
            }
            if (max < trip[2]) {
                max = trip[2];
            }

            // trip = [num_passengers, start_location, end_location]
            // inside my maps I want keys to be location
            // and values to be num_passengers
            if (onInfo.containsKey(trip[1])) {
                Integer x = onInfo.get(trip[1]);
                x += trip[0];
                onInfo.replace(trip[1], x);
            } else {
                onInfo.put(trip[1], trip[0]);
            }
            if (offInfo.containsKey(trip[2])) {
                Integer x = offInfo.get(trip[2]);
                x += trip[0];
                offInfo.replace(trip[2], x);
            } else {
                offInfo.put(trip[2], trip[0]);
            }
        }

        // iterate though the stops and use the HashMaps to see
        // when AND how many people get on and off you bus
        for (int i = 0; i <= max; i++) {
            if (onInfo.containsKey(i)) {
                amountOfPeopleOnBus += onInfo.get(i);
            }
            if (offInfo.containsKey(i)) {
                amountOfPeopleOnBus -= offInfo.get(i);
            }
            // here after we hit a stop we check if we are over capacity
            if (amountOfPeopleOnBus > capacity) {
                return false;
            }
        }
        // we have successfully made all the stops AND never went over capacity
        // we can return true
        return true;
    }
}