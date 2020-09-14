package JavaAlgos.easy;

class HouseRobber {
    public static void main(String[] args) {
        HouseRobber classy = new HouseRobber();
        int[] emptyExample = new int[] {};
        int[] singleHouse = new int[] { 1 };
        int[] twoHouses = new int[] { 12, 20 };
        int[] threeHouses = new int[] { 12, 20, 2 };
        int[] threeHouses2 = new int[] { 12, 0, 2 };
        int[] givenExample1 = new int[] { 1, 2, 3, 1 };
        int[] givenExample2 = new int[] { 2, 7, 9, 3, 1 };

        System.out.println(classy.rob(emptyExample));
        System.out.println(classy.rob(singleHouse));
        System.out.println(classy.rob(twoHouses));
        System.out.println(classy.rob(threeHouses));
        System.out.println(classy.rob(threeHouses2));
        System.out.println(classy.rob(givenExample1));
        System.out.println(classy.rob(givenExample2));
    }

    public int rob(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        } else if (nums.length == 1) {
            return nums[0];
        } else if (nums.length == 2) {
            return Math.max(nums[0], nums[1]);
        } else if (nums.length == 3) {
            return Math.max((nums[0] + nums[2]), nums[1]);
        }

        int len = nums.length;
        int[] moneyBag = new int[len];
        moneyBag[0] = nums[0];
        moneyBag[1] = Math.max(nums[0], nums[1]);

        for (int i = 2; i < len; i++) {
            moneyBag[i] = Math.max(nums[i] + moneyBag[i - 2], moneyBag[i - 1]);
        }

        return moneyBag[len - 1];
        /**
         * Runtime: 0 ms, faster than 100.00% of Java online submissions for House Robber.
         * Memory Usage: 37 MB, less than 54.52% of Java online submissions for House Robber.
         */
    }
    /**tags for later look up 
     * dynamicProgramming 
     * SeptemberChallenge
     */
}