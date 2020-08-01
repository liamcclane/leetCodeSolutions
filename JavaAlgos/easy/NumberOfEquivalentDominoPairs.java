package JavaAlgos.easy;

import java.util.ArrayList;
import java.util.HashMap;

public class NumberOfEquivalentDominoPairs {

    public int doStuff(int[][] dominoes) {
        int max = 0;
        HashMap<int[], Integer> dict = new HashMap<int[], Integer>();
        for (int[] val : dominoes) {
            if (val[0] < val[1]) {
                int temp = val[0];
                val[0] = val[1];
                val[1] = temp;
            }
        }
        for (int[] val : dominoes) {
            if (dict.containsKey(val)) {
                System.out.println("inside if ");
                Integer o = dict.get(val);
                int increase = Integer.valueOf(o);
                increase++;
                Integer n = increase;
                dict.replace(val, o, n);
            } else {
                System.out.println("inside else ");
                System.out.println(val);
                Integer i = 1;
                dict.put(val, i);
            }
        }

        for (Integer i : dict.values()) {
            if (max < Integer.valueOf(i)) {
                max = Integer.valueOf(i);
            }
            System.out.println(" i is line 36");
            System.out.println(i);
        }
        // for (int i = 1; i < dominoes.length; i++) {
        // int[] frontVal = dominoes[i];
        // int[] Val = dominoes[i - 1];
        // if (frontVal[0] == Val[0] && frontVal[1] == Val[1]) {
        // count++;
        // }
        // }
        System.out.println("**answer below**");
        return Integer.valueOf(max);
    }

    public static void main(String[] args) {
        NumberOfEquivalentDominoPairs n = new NumberOfEquivalentDominoPairs();
        int[][] par = { { 1, 2 }, { 1, 2 }, { 1, 1 }, { 1, 2 }, { 2, 2 } };
        System.out.println(n.doStuff(par)); // this should be 3
    }
}