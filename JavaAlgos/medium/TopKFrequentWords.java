package JavaAlgos.medium;

import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.ArrayList;
import java.util.Collection;

public class TopKFrequentWords {
    public static void main(String[] args) {
        TopKFrequentWords classy = new TopKFrequentWords();
        String[] words = { "the", "the", "bird" };
        String[] words1 = { "i", "love", "leetcode", "i", "love", "coding" };
        String[] words2 = { "the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is" };
        System.out.println(classy.doStuff(words1, 2));
        System.out.println(classy.doStuff(words2, 4));
    }

    public static List<String> doStuff(String[] words, int k) {
        Map<String, Integer> map1 = new HashMap<>();
        Map<Integer, ArrayList<String>> map2 = new HashMap<>();
        List<String> foundWords = new ArrayList<>();
        int max = 0;
        for (String word : words) {
            if (map1.containsKey(word)) {
                map1.replace(word, map1.get(word) + 1);
            } else {
                map1.put(word, 1);
            }
        }
        for (Integer val : map1.values()) {
            if (max < val) {
                max = val;
            }
        }
        for (Map.Entry<String, Integer> entry : map1.entrySet()) {
            if (map2.containsKey(entry.getValue())) {
                ArrayList<String> arr = map2.get(entry.getValue());
                arr.add(entry.getKey());
                map2.replace(entry.getValue(), arr);
            } else {
                ArrayList<String> arr = new ArrayList<>();
                arr.add(entry.getKey());
                map2.put(entry.getValue(), arr);
            }
        }
        for (int i = max; foundWords.size() != k; i--) {
            for (String string : map2.get(i)) {
                foundWords.add(string);
                map2.remove(i);
            }
        }
        List<String> rtnString = new ArrayList<>();
        for (String string : words) {
            if(foundWords.contains(string)) {
                rtnString.add(string);
                foundWords.remove(string);
            }
        }
        return rtnString;
    }
}
