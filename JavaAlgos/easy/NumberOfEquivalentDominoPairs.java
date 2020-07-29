package JavaAlgos.easy;

import java.util.ArrayList;
import java.util.HashMap;


public class NumberOfEquivalentDominoPairs {

    public int doStuff(int[][] dominoes) {
        int max = 0;
        HashMap<int[], int> dict = new HashMap<int[], int>();
        for (int[] val : dominoes) {
            if (val[0] < val[1]) {
                int temp = val[0];
                val[0] = val[1];
                val[1] = temp;
            }
        }
        for (int[] val : dominoes) {
            if (dict.containsKey(val)) {
                // Integer old = dict.get(val);
                // int w = old.intValue() + 1;
                // dict.replace(val, w);
                dict.get(val)++;
            } else {
                // Integer i = 1;
                // dict.put(val, i);
                dict.put(val, 1);
            }
        }
        // for (Integer i : dict.values()) {
        //     System.out.println(i);
        //     if (max < i.intValue()) {
        //         max = i.intValue();
        //     }
        // }
        for (int i : dict.values()) {
            System.out.println(i);
            if (max < i) {
                max = i;
            }
        }
        
        System.out.println("**answer below**");

        // for (int i = 1; i < dominoes.length; i++) {
        // int[] frontVal = dominoes[i];
        // int[] Val = dominoes[i - 1];
        // if (frontVal[0] == Val[0] && frontVal[1] == Val[1]) {
        // count++;
        // }
        // }
        return Integer.valueOf(max);
    }

    public static void main(String[] args) {
        NumberOfEquivalentDominoPairs n = new NumberOfEquivalentDominoPairs();
        int[][] par = { { 1, 2 }, { 1, 2 }, { 1, 1 }, { 1, 2 }, { 2, 2 } };
        System.out.println(n.doStuff(par));
    }
}