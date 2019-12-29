# Given a sorted array nums, remove the duplicates in-place such that 
# duplicates appeared at most twice and return the new length.

# Do not allocate extra space for another array, you must do this by 
# modifying the input array in-place with O(1) extra memory.

# Example 1:

    # Given nums = [1,1,1,2,2,3],

    # Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.

    # It doesn't matter what you leave beyond the returned length.
# Example 2:

    # Given nums = [0,0,1,1,1,1,2,3,3],

    # Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.

    # It doesn't matter what values are set beyond the returned length.

def removeThriceRepeated(nums):
    """
    :type nums: List[int]
    :rtype: int
    """

    if len(nums) == 0:
        return 0

    if len(nums)<3:
        return len(nums)

    i = 0 # this is the index that will be using to swap at
    for j in range(1,len(nums)):

        if nums[i] == nums[j]:
            if i == 0:
                i += 1
            elif nums[i] is not nums[i-1]:
                i+=1
                nums[i] = nums[j]
        else:
            i+=1
            nums[i] = nums[j]
    
    print(nums,"end of function")
    return i+1

print(removeThriceRepeated([0,0,0,1,2,3,4,4,4,5]))
# print(removeThriceRepeated([0,0,1,2,3,4,5]))


