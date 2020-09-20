package JavaAlgos.medium;

import java.util.ArrayList;
import java.util.List;

class SequentialDigits {


    public static void main(String[] args) {

    }

    /**1291. Sequential Digits
     * An integer has sequential digits if and only if each 
     * digit in the number is one more than the previous digit.
     * 
     * Return a sorted list of all the integers in the range 
     * [low, high] inclusive that have sequential digits.
     * 
     * Example 1:
     * 
     * Input: low = 100, high = 300
     * Output: [123,234]
     * 
     * Example 2:
     * Input: low = 1000, high = 13000
     * Output: [1234,2345,3456,4567,5678,6789,12345]
     * @param low
     * @param high
     * @return
     */
    public List<Integer> sequentialDigits(int low, int high) {
        List<Integer> ans = new ArrayList<Integer>();
        Integer[] allSequNums2 = { 12, 23, 34, 45, 56, 67, 78, 89 };
        Integer[] allSequNums3 = { 123, 234, 345, 456, 567, 678, 789 };
        Integer[] allSequNums4 = { 1234, 2345, 3456, 4567, 5678, 6789 };
        Integer[] allSequNums5 = { 12345, 23456, 34567, 45678, 56789 };
        Integer[] allSequNums6 = { 123456, 234567, 345678, 456789 };
        Integer[] allSequNums7 = { 1234567, 2345678, 3456789 };
        Integer[] allSequNums8 = { 12345678, 23456789 };
        Integer[] allSequNums9 = { 123456789 };
        Integer[][] allSeqNums = { allSequNums2, allSequNums3, allSequNums4, allSequNums5, allSequNums6, allSequNums7,
                allSequNums8, allSequNums9 };
        String lowStr = Integer.toString(low);
        int lowerNumLen = lowStr.length();
        // System.out.println(lowerNumLen);
        String highStr = Integer.toString(high);
        int highNumLen = highStr.length();
        // System.out.println(highNumLen);
        for (int i = (lowerNumLen - 2); (i <= (highNumLen - 2)) && i < 8; i++) {
            for (int j = 0; j < allSeqNums[i].length; j++) {
                // System.out.print(allSeqNums[i][j] + "|");
                if (allSeqNums[i][j] > high) {
                    break;
                }
                if (allSeqNums[i][j] >= low && allSeqNums[i][j] <= high) {
                    ans.add((Integer) allSeqNums[i][j]);
                }
            }
            // System.out.println();
        }
        return ans;
        /**
         * Runtime: 0 ms, faster than 100.00% of Java online submissions for Sequential Digits.
         * Memory Usage: 38.8 MB, less than 10.26% of Java online submissions for Sequential Digits.
         */
    }

}
/**tags for later look up
 * SeptemberChallenge
 */