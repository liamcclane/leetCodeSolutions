package JavaAlgos.easy;

/**
 * 1351. Count Negative Numbers in a Sorted Matrix Given a m * n matrix grid
 * which is sorted in non-increasing order both row-wise and column-wise.
 * 
 * Return the number of negative numbers in grid.
 * 
 * 
 * 
 * Example 1:
 * 
 * Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]] Output: 8
 * Explanation: There are 8 negatives number in the matrix. Example 2:
 * 
 * Input: grid = [[3,2],[1,0]] Output: 0 Example 3:
 * 
 * Input: grid = [[1,-1],[-1,-1]] Output: 3 Example 4:
 * 
 * Input: grid = [[-1]] Output: 1
 */
class CountNegativeNum {
    public static void main(String[] args) {
        CountNegativeNum n = new CountNegativeNum();
        int[][] whatever = { { 3, 2, -1 }, { 4, 2, -2 }, { -1, -3, -5 } };
        System.out.println(n.countNegatives(whatever));
    }

    public int countNegatives(int[][] grid) {

        int count = 0;

        for (int[] val : grid) {

            for (int i : val) {

                if (i < 0) {
                    count += 1;
                }

            }
        }

        return count;
    }
}
/**
 * Runtime: 1 ms, faster than 57.93% of Java online submissions for Count
 * Negative Numbers in a Sorted Matrix. Memory Usage: 47.1 MB, less than 5.23%
 * of Java online submissions for Count Negative Numbers in a Sorted
 */