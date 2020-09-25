package JavaAlgos.easy;

import java.util.HashMap;

public class FindDifference {
    public static void main(String[] args) {

        System.out.println(findTheDifference("abc", "abcd"));
    }

    public static char findTheDifference(String s, String t) {

        HashMap<Character, Integer> dictT = new HashMap<Character, Integer>();

        for (int i = 0; i < t.length(); i++) {
            char c = t.charAt(i);
            if (dictT.containsKey(c)) {
                Integer x = dictT.get(c);
                x++;
                dictT.replace(c, x);
            } else {
                dictT.put(c, 1);
            }
        }
        for (int i = 0; i < s.length(); i++) {
            Integer x = dictT.get(s.charAt(i));
            x--;
            if (x == 0) {
                dictT.remove(s.charAt(i));
            }
        }
        System.out.println(dictT);
        // there, just having hard time taking key out and returning 
        //  correct data type
        return 's';
    }
}
/**
 * SeptemberChallenge
 */