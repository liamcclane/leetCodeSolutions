package JavaAlgos.easy;

import java.util.ArrayList;
import java.util.HashMap;

public class CountLargestGroup {
    public int doStuff(int n) {
        // creating a hash map that will hold
        // keys that hold the sum
        // with values that are ArrayLists with numbers who's indiviual intergers equal
        // the key
        HashMap<Integer, ArrayList<Integer>> dict = new HashMap<Integer, ArrayList<Integer>>();

        for (int i = 1; i <= n; i++) {
            Integer sum = 0;
            String s = String.valueOf(i);
            for (int j = 0; j < s.length(); j++) {
                sum += Integer.parseInt(String.valueOf(s.charAt(j)));
            }
            if (dict.containsKey(sum)) {
                dict.get(sum).add(sum);
            } else {
                ArrayList<Integer> x = new ArrayList<Integer>();
                x.add(sum);
                dict.put(sum, x);
            }
        }
        // now that the dict/HashMap is built
        // look for the max length of the arrays
        int count = 0;
        int max = 0;
        for (ArrayList<Integer> a : dict.values()) {
            if (a.size() > max) {
                max = a.size();
            }
        }
        // then increase the count for every key who's value's length matches the max
        for (ArrayList<Integer> a : dict.values()) {
            if (a.size() == max) {
                count++;
            }
        }
        return count;
    }
    public static void main(String[] args) {
        CountLargestGroup c = new CountLargestGroup();
        System.out.println(c.doStuff(13));
    }
}