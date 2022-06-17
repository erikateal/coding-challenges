//OBJECTIVE
// 1. Two Sum - Easy

//LINK
// https://leetcode.com/problems/two-sum/

// INSTRUCTIONS
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// MY SOLUTION
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let targetArr = [];
    
    // loop through each element in the array to find possible pairs that add to equal the target (brute force - not the most efficient)
    for(let i=0; i < nums.length; i++){
        for(let j=0; j < nums.length; j++){
            // if num[i] + num[j] === target and [i] is not equal to [j]
            if(i !== j && nums[i] + nums[j] === target){
                // push these indices to the new array if they meet the requirements above
                targetArr.push(i,j);
            }
        }
    }
    // return the array while filtering out duplicates by storing only unique values 
    return [...new Set(targetArr)];
};

// OPTIMIZED SOLUTION
// function twoSum(nums, target) {
//     const hashMap = {}
//     for (let i = 0; i < nums.length; i++) {
//         const num1 = nums[i]
//         const num2 = target - num1
//         if (hashMap[num2] !== undefined) {
//             return [hashMap[num2], i]
//         }
//         hashMap[num1] = i
//     }
// }

// WHAT I LEARNED
// Hashmap concept