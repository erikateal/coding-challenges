//OBJECTIVE
// Number of Islands

//LINK
// https://leetcode.com/problems/number-of-islands/

// INSTRUCTIONS
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

// MY SOLUTION

const getAdjacentCells = (i,j,grid,visited) => {
    const adjacentCells = []

    if(i > 0  && !visited[i - 1][j]) adjacentCells.push([i - 1, j])
    if(i < grid.length - 1  && !visited[i + 1][j]) adjacentCells.push([i + 1, j])

    if(j > 0  && !visited[i][j - 1]) adjacentCells.push([i, j - 1])
    if(j < grid[0].length - 1  && !visited[i][j + 1]) adjacentCells.push([i, j + 1])

    return adjacentCells
}

const depthFirstSearch = (i,j,grid,visited) => {
    const stack = [[i,j]]
    let islandSize = 0;

    while(stack.length){
        let currentNode = stack.pop()

        let [i,j] = currentNode;

        //check to see if the particular cell is visited at i and j
        if(visited[i][j]) continue 
            visited[i][j] = true

        //check if cell is part of an island ('1')
        if(grid[i][j] === '0') continue
        islandSize++
        
        let adjacentCells = getAdjacentCells(i,j,grid,visited)

        stack.push(...adjacentCells)
    }
    return islandSize > 0 ? true : false
}

var numIslands = function(grid) {
    const visited = grid.map(row => row.map(cell => false))
    //counts number of times we're traversing through each grid
    let islandCount = 0;

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(depthFirstSearch(i,j,grid,visited)){
                islandCount++
            }
            // if(grid[i][j] === '1'){
            //     count++
            //     depthFirstSearch(i,j,grid)
            // }
        }
    }
    return islandCount;
};

// WHAT I LEARNED
// dFS and bFS 

// ALT SOLUTION
// function dfs(grid, r, c) {
//     if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0') {
//         // end operation if any conditional is met
//         return;
//     }
  
//     // redefine current search to "0" so we don't count this again
//     grid[r][c] = '0'
//     // call dfs function with all horizontal and vertical movements of +1
//     dfs(grid, r + 1, c)
//     dfs(grid, r - 1, c)
//     dfs(grid, r, c + 1)
//     dfs(grid, r, c - 1)
//   }
  
//   function numIslands(grid) {
//     let islandCount = 0
//     // loop through grid length (row)
//     for(let r = 0; r < grid.length; r++) {
//         // loop through grid subarray (element in row)
//         for(let c = 0; c < grid[0].length; c++) {
//             // if element is === '1'
//             if(grid[r][c] === '1') {
//                 // count an island
//                 count++
//                 // depth-first search
//                 dfs(grid, r, c)
//             }
//         }
//     }
//     return islandCount
//   }
  