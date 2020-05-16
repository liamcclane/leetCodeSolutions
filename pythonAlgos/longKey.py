def isLongPressedName(name, typed):
    """"
    :type name: str
    :type typed: str
    :rtype: bool
    """"
    j = 0
    for c in name:
        if j == len(typed):
            return False

        # If mismatch...
        if typed[j] != c:
            # If it's the first char of the block, ans is False.
            # OR if the previous of the typed not equal to the current one...
            # this takes into account doubles
            if (j == 0) or (typed[j-1] != typed[j]):
                return False

            # Discard all similar chars.
            # 
            cur = typed[j]
            while j < len(typed) and typed[j] == cur:
                j += 1

            # If next isn't a match, ans is False.
            if j == len(typed) or typed[j] != c:
                return False

        j += 1

    return True

print(isLongPressedName("lia","lllliiiia"))
# "lia" "lllliiiiaaa"
#     *         *

print('isLongPressedName("alex", "aaleex") ') # true
print('// true') # true
print(isLongPressedName("alex", "aaleex")) # true

print()
print('isLongPressedName("saeed", "ssaaedd")') # false
print('# false') # false
print(isLongPressedName("saeed", "ssaaedd")) # false

# print()
# print('isLongPressedName("bob", "bobo" )') # false
# print('# false') # false
# print(isLongPressedName("bob", "bobo")) # false

print()
print('isLongPressedName("bob", "boob")') # true
print('// true') # true
print(isLongPressedName("bob", "boob")) # true

print()
print('isLongPressedName("book", "boook")') # true
print('// true') # true
print(isLongPressedName("book", "boook")) # true

print()
print('isLongPressedName("vtkgn", "vttkgnn")')
print('// true')
print(isLongPressedName("vtkgn", "vttkgnn")) # true

print() # true
print('isLongPressedName("pyplrz", "ppyypllr")') # false
print('# false') # false
print(isLongPressedName("pyplrz", "ppyypllr")) # false
