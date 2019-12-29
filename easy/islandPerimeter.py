def islandPerimeter(grid):
    """
    :type grid: List[List[int]]
    :rtype: int
    """
    perim = 0
    for i in range(len(grid)):

        for j in range(len(grid[i])):

            if grid[i][j] == 1:
                # print("increating perim by",  singlePerim(i, j, grid) )
                perim += singlePerim(i, j, grid)
                print(perim, "line 14")
    return perim

def singlePerim(arrIndex, index, island):

    sides = 0

    # check above and below
    if arrIndex - 1 >= 0 and arrIndex + 1 < len(island) :
        if island[arrIndex - 1][index] == 0:
            sides += 1
        if island[arrIndex + 1][index] == 0:
            sides += 1
    if arrIndex - 1 < 0:
        sides +=1
    if arrIndex + 1 >= len(island):
        sides += 1

    
    # check left and right
    if index - 1 >= 0 and index + 1 < len(island[arrIndex]) :
        if island[arrIndex][index - 1] == 0:
            sides += 1
        if island[arrIndex][index + 1] == 0:
            sides += 1
    if index - 1 < 0: 
        # print("index is 0")
        sides +=1
    if index + 1 >= len(island[arrIndex]):
        sides +=1

    
    return sides

print(islandPerimeter([[0, 1,0,0],
                        [1, 1,1,0],
                        [0, 1,0,0],
                        [1, 1,0,0]]))

# off by one...