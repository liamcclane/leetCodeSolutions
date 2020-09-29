package JavaAlgos.easy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class NumberOfGoodPairs {

    /**
     * 1512. Number of Good Pairs Given an array of integers nums.
     * 
     * A pair (i,j) is called good if nums[i] == nums[j] and i < j.
     * 
     * Return the number of good pairs.
     * 
     * 
     * Example 1:
     * 
     * Input: nums = [1,2,3,1,1,3] Output: 4 Explanation: There are 4 good pairs
     * (0,3), (0,4), (3,4), (2,5) 0-indexed. Example 2:
     * 
     * Input: nums = [1,1,1,1] Output: 6 Explanation: Each pair in the array are
     * good. Example 3:
     * 
     * Input: nums = [1,2,3] Output: 0
     * 
     * @param nums
     * @return
     */
    public static int AmountOfGoodPairs(ArrayList<Integer> nums) {
        int count = 0;

        Map<Integer, List<Integer>> map = new HashMap<>();
        Map<Integer, List<Integer>> treeMap = new TreeMap<>();

        for (int i = 0; i < nums.size(); i++) {
            Integer val = nums.get(i);
            if (map.containsKey(val)) {
                List<Integer> arr = map.get(val);
                arr.add(i);
                map.replace(val, arr);
            } else {
                List<Integer> arr = new ArrayList<>();
                arr.add(i);
                map.put(val, arr);
            }
        }
        
        for (int i = 0; i < nums.size(); i++) {
            Integer val = nums.get(i);
            if(treeMap.containsKey(val)) {
                List<Integer> arr = treeMap.get(val);
                arr.add(i);
                treeMap.remove(val, arr);
            } else {
                List<Integer> arr = treeMap.get(val);
                arr.add(i);
                treeMap.put(val, arr);
            }
        }

        System.out.println(map);
        System.out.println(map.values());
        System.out.println(map.entrySet());

        System.out.println();
        System.out.println(treeMap);
        System.out.println(treeMap.entrySet());
        System.out.println();

        // for (Map.Entry<Integer, ArrayList<Integer>> entry : treeMap.entrySet()) {

        //     // print the entries
        //     System.out.println(entry);

        //     System.out.println("key = " + entry.getKey() + ", value = " + entry.getValue());

        // }

        return count;
    }

    public static void main(String[] args) {

        ArrayList<Integer> arr1 = new ArrayList<>();
        // [1,2,3,1,1,3]
        arr1.add(11);
        arr1.add(2);
        arr1.add(3);
        arr1.add(11);
        arr1.add(11);
        arr1.add(3);

        System.out.println(arr1 + " =  array 1");
        System.out.println(AmountOfGoodPairs(arr1) + " : returns");
    }
}
