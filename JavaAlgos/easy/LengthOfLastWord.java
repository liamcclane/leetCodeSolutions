package JavaAlgos.easy;

class LengthOfLastWord {

    public static void main(String[] args) {
        LengthOfLastWord classy = new LengthOfLastWord();
        System.out.println(classy.lengthOfLastWord("Hello World"));
        System.out.println(classy.lengthOfLastWord("a "));
        System.out.println(classy.lengthOfLastWord("    Hello   World    "));
    }

    /**Length of Last Word
     * Given a string s consists of upper/lower-case alphabets and 
     * empty space characters ' ', return the length of last word 
     * (last word means the last appearing word if we loop from left to right) 
     * in the string.
     * 
     * If the last word does not exist, return 0.
     * 
     * Note: A word is defined as a maximal substring consisting of non-space characters only.
     * 
     * Example:
     * Input: "Hello World"
     * Output: 5
     */
    public int lengthOfLastWord(String s) {
        s = s.trim();
        int i = 0;
        int nextSpace = 0;

        for (; i < s.length(); i++) {
            nextSpace = s.indexOf(" ", i);

            if (nextSpace != -1) {
                i = nextSpace;
            } else {
                break;
            }
        }
        return s.length() - i;
        /**
         * Runtime: 0 ms, faster than 100.00% of Java online submissions for Length of Last Word.
         * Memory Usage: 39.5 MB, less than 11.45% of Java online submissions for Length of Last Word.
         */
    }
}
/**tags for later look up
 * SeptemberChallenge
 */