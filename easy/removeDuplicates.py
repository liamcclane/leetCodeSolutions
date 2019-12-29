# Libraries Included:
# Numpy, Scipy, Scikit, Pandas
# Given a sorted array nums, remove the duplicates in-place such that 
# each element appear only once and return the new # length.

# Do not allocate extra space for another array, 
# you must do this by modifying the input array in-place with O(1) extra # memory.


# examples
    # remvoeDuplicates([0,0,1,2,3,3,3,4]) returns 5
    # and should alter the array to be [0,1,2,3,4,whatever,whatever,whatever])

def removeDuplicates(nums):
    
    count = 1
    index = 1
    replaceIndex = 1
    N = len(nums)
    
    while index < N:
        
        if nums[index] !=  nums[index-1]:
            nums[replaceIndex] = nums[index]
            print("nums after swap",nums)
            replaceIndex += 1
            count += 1
        
        # always increase the index 
        index += 1
    
    print(nums)
    return count

# r = removeDuplicates([1,1,2])
r = removeDuplicates([0,0,1,1,1,1,1,1,2,2,3,4,5])
print(r)

# leetcodes answer
def leetCodeRemoveDuplicates(nums):
    if len(nums) == 0: 
        return 0
    i = 0
    for j in range(len(nums)):
        if nums[j] != nums[i]:
            i+=1
            nums[i] = nums[j]

    return i+1
