//OBJECTIVE
// 289. Game of Life

//LINK
// https://leetcode.com/problems/game-of-life/

// INSTRUCTIONS
// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

 

// Example 1:
// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

// Example 2:
// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]
 

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 25
// board[i][j] is 0 or 1.

// MY SOLUTION
/*
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var gameOfLife = function(board) {
    // if the board has no squares
    //return the board
    if(board[0].length === 0){
        return board
    }
    // iterate through the array from top left corner
    for(let row=0;row<board.length; row++){
        for(let col=0;col<board[0].length; col++){
             const tile = board[row][col]
             const liveNeighbors = liveNeighborCheck(row, col)
    // if the square is dead and has 3 live neighbors, return it live
             if((tile === 0 || tile === 'dead to live') && liveNeighbors === 3){
                 //change the number to 'live to dead'
                 // console.log(`${row}-${col} is a 0`)
                board[row][col] = 'dead to live'
             } else if ((tile === 1 || tile === 'live to dead') && (liveNeighbors > 3 || liveNeighbors < 2)) {
                // else (square is live) check number of live neighbors
                    // if it has more than 3 live neighbors or less than 2, make it a 0
                    //change to 'live to dead'
                 board[row][col] = 'live to dead'
                // else (2 or 3 live neighbors)
                    //do nothing
             }
        }
    }
    function liveNeighborCheck(row, col){
            let liveCount = 0
            
            //middle row check
            if(board?.[row]?.[col+1] === 1 || board?.[row]?.[col+1] === 'live to dead'){
                liveCount++
            } 
            if(board?.[row]?.[col-1] === 1 || board?.[row]?.[col-1] === 'live to dead'){
                liveCount++
            }
            
            // bottom row check
            if(board?.[row+1]?.[col] === 1 || board?.[row+1]?.[col] === 'live to dead'){
                liveCount++
            } 
            if(board?.[row+1]?.[col+1] === 1 || board?.[row+1]?.[col+1] === 'live to dead'){
                liveCount++
            }
            if(board?.[row+1]?.[col-1] === 1 || board?.[row+1]?.[col-1] === 'live to dead'){
                liveCount++
            }
            
            //top row check
            if(board?.[row-1]?.[col] === 1 || board?.[row-1]?.[col] === 'live to dead'){
                liveCount++
            } 
            if(board?.[row-1]?.[col+1] === 1 || board?.[row-1]?.[col+1] === 'live to dead'){
                liveCount++
            }
            if(board?.[row-1]?.[col-1] === 1 || board?.[row-1]?.[col-1] === 'live to dead'){
                liveCount++
            }
            return liveCount
    }
    
        for(let row=0;row<board.length; row++){
        for(let col=0;col<board[0].length; col++){
            let tile = board[row][col]
            //change 'live to dead' to 0 
            if(tile === 'live to dead'){
                board[row][col] = 0
            }
            //change 'dead to live to 1'
            if(tile === 'dead to live'){
                board[row][col] = 1
            }       
            }
        }

    //return the new board
    return board
};

// OPTIMIZED SOLUTION
// 

// WHAT I LEARNED
// 