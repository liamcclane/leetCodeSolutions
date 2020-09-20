package JavaAlgos.hard;

class PathSumIII {

    public static void main(String[] args) {
        int[][] exampleGrid = { { 1, 0, 0, 0 }, { 0, 0, 0, 0 }, { 0, 0, 2, -1 }, };
        int[][] exampleGrid2 = { { 1, 0, 0, 0 }, { 0, 0, 0, 0 }, { 0, 0, 0, 2 } };

        System.out.println(pathSumIII(exampleGrid) + " should be 2");
        // System.out.println(pathSumIII(exampleGrid2) + " should be 4");
    }
    static int TotalPath = 0;
    /**UniquePathsIII - 980
     * On a 2-dimensional grid, there are 4 types of squares:
     * 
     * 1 represents the starting square.  
     *  There is exactly one starting square.
     * 2 represents the ending square.  
     *  There is exactly one ending square.
     * 0 represents empty squares we can walk over.
     * -1 represents obstacles that we cannot walk over.
     * Return 
     * the number of 4-directional walks from the starting 
     * square to the ending square, that walk over every 
     * non-obstacle square exactly once.
     */ 
    /** 
     * Example 1:
     * 
     * Input: [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
     * Output: 2
     * Explanation: We have the following two paths: 
     * 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
     * 2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
     * Example 2:
     * 
     * Input: [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
     * Output: 4
     * Explanation: We have the following four paths: 
     * 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
     * 2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
     * 3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
     * 4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)
     * Example 3:
     * 
     * Input: [[0,1],[2,0]]
     * Output: 0
     * Explanation: 
     * There is no path that walks over every empty square exactly once.
     * Note that the starting and ending square can be anywhere in the grid.
     */
    /**
     * returns the amount of unique paths that can be walked from start, 1  to
     * finish, 2 while stepping on every single non-obstacle square
     * @param grid
     * @return
     */
    public static int pathSumIII(int[][] grid) {
        int TotalZero = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == 0) {
                    TotalZero++;
                }
            }
        }
        // System.out.println(TotalZero + " total zeros");
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == 1) {
                    // System.out.println(i + " i : " + j + " j => " + grid[i][j]);
                    dsf(grid, i, j, TotalZero);
                }
            }
        }
        return TotalPath;
        /**
         * Runtime: 0 ms
         * Memory Usage: 37 MB
         * Your runtime beats 100.00 % of java submissions.
         * Your memory usage beats 55.74 % of java submissions.
         */
    }

    public static void dsf(int[][] grid, int i, int j, int TotalZero) {
        // System.out.println(grid.length + " grid.length");
        // if we are out of bounds
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
            return;
        }
        // if we hit the start spot OR (we hit the end spot and have incremented
        // TotalZero)
        if (grid[i][j] == -1 || (grid[i][j] == 2 && TotalZero != 0) || grid[i][j] == 99) {
            return;
        }
        if (grid[i][j] == 2 && TotalZero == 0) {
            // System.out.println("***incrementing TotalPath**");
            TotalPath++;
        }
        if (grid[i][j] == 0) {
            TotalZero--;
        }
        int temp = grid[i][j];
        grid[i][j] = 99;
        // System.out.println("with grid[" + i + "][" + j + "] replaced");
        // printGrid(grid, i, j);
        // System.out.println("moving down");
        dsf(grid, i + 1, j, TotalZero); // moves down
        // System.out.println("moving up");
        dsf(grid, i - 1, j, TotalZero); // moves up
        // System.out.println("moving right");
        dsf(grid, i, j + 1, TotalZero); // moves right
        // System.out.println("moving left");
        dsf(grid, i, j - 1, TotalZero); // moves left
        grid[i][j] = temp;
        // System.out.println("end function return grid[" + i + "][" + j + "]");
    }
    /**tags for later look up
     * depthSearchFirst
     * SeptemberChallenge
     */

}