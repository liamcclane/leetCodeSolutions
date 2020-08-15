package JavaAlgos.easy;

class CheckIfWordOccurs {
    /**1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
     * Given a sentence that consists of some words separated by a single space, and a searchWord.
     * 
     * You have to check if searchWord is a prefix of any word in sentence.
     * 
     * Return the index of the word in sentence where searchWord is a prefix of this word (1-indexed).
     * 
     * If searchWord is a prefix of more than one word, return the index of the 
     * first word (minimum index). If there is no such word return -1.
     * 
     * A prefix of a string S is any leading contiguous substring of S.
     * @param sentence
     * @param searchWord
     * @return the index of the word found in the sentence (base 1)
     */
    public int isPrefixOfWord(String sentence, String searchWord) {
        String[] arrOfWords = sentence.split(" ");
        for(int i = 0; i < arrOfWords.length; i++) {
            String word = arrOfWords[i];
            if(word.length() < searchWord.length()) {
                continue;
            }
            if(word.substring(0, searchWord.length()).equals(searchWord)){
                return (i + 1);
            }
        }
        return -1;
        /**
         * Runtime: 0 ms, faster than 100.00% of Java online submissions for Check If a Word Occurs As a Prefix of Any Word in a Sentence.
         * Memory Usage: 38.9 MB, less than 24.12% of Java online submissions for Check If a Word Occurs As a Prefix of Any Word in a Sentence.
         */
    }
    public static void main(String[] args) {
        CheckIfWordOccurs check = new CheckIfWordOccurs();
        System.out.println(check.isPrefixOfWord("hello world", "water"));
        System.out.println(check.isPrefixOfWord("i will find water", "water"));
        System.out.println(check.isPrefixOfWord("the waterfall has lots of water", "water"));
        System.out.println(check.isPrefixOfWord("the water falls to lots of waterfalls", "water"));
    }
}