# Lia McClane

# Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# Example:

# Input: [0,1,0,3,12]
# Output: [1,3,12,0,0]
# Note:

# You must do this in-place without making a copy of the array.
# Minimize the total number of operations.

practiceArr = [12,0,13,0,0,14,15]

def moveZerosOn(arr):
    
    # we are creating a second pointer to replace all the zero spots
    index = 0

    # loop though the array one time 'counting' and overriding where zeros occur
    for i in range(len(arr)):

        # whenever a zero doesn't occur move the second pointer, index, along with you
        if arr[i] is not 0:
            arr[index] = arr[i]
            index += 1
    
    # add zeros to where the index left off
    for i in range(index,len(arr)):
        arr[i] = 0

    # lasdkjf
    return arr

print(moveZerosOn(practiceArr))