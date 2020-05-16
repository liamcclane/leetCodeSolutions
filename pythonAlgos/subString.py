# LeetCode medium
# Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

# Example 1:

# Input: s1 = "ab" s2 = "eidbaooo"
# Output: True
# Explanation: s2 contains one permutation of s1 ("ba").
# Example 2:

# Input:s1= "ab" s2 = "eidboaoo"
# Output: False

def subbString(s1,s2):

    print("line 16: "+s1)
    print("line 17:"+s2)

    for i in range(len(s2)):
        
        print(s2[i])
        
        if s2[i] == s1[0]:
            print("s2[i] == s1[0]  " + s2[i] + s1[0])
            # flag for starting to check equalanvce
            for j in range(len(s1)):
                print("j " + j)
                if s1[i]==s2[j]:
                    i += 1
                elif j == len(s1)-1:
                    return True
                print ("line 28: j = " + j)

    return False

subbString("lia", "asdflialkj")
