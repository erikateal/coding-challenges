//OBJECTIVE
// 40. Combination Sum II

//LINK
// https://leetcode.com/problems/combination-sum-ii/

// INSTRUCTIONS
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]
 

// Constraints:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

// MY SOLUTION
/*
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    //global results
    const result = [];
    //sort input
    candidates = candidates.sort((a,b) => a-b)
    
    //dFS recursive case
    const dFS = (i, candidates, target, slate) => {
        //backtracking case
        if(target < 0) return
        
        //base case
        if(target === 0){
            result.push(slate.slice())
            return
        }
        
        //dFS recursive case
        for(let j=i; j<candidates.length; j++){
                
            if(i!==j && candidates[j] == candidates[j-1]) continue
            slate.push(candidates[j])
            dFS(j+1, candidates, target - candidates[j], slate)
            slate.pop()
        }
    }
    dFS(0, candidates, target, [])
    return result
};

// WHAT I LEARNED
// backtracking template

