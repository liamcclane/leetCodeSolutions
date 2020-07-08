public class Solution
{
    public int NumJewelsInStones(string J, string S)
    {
        int count = 0;

        foreach (char stone in S)
        {
            if (J.Contains(stone))
            {
                count++;
            }
        }

        return count;
    }
}
// Runtime: 108 ms, faster than 17.58% of C# online submissions for Jewels and Stones.
// Memory Usage: 23.1 MB, less than 92.44% of C# online submissions for Jewels and Stones.
