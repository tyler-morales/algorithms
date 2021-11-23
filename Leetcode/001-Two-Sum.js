/**
NOTE: 001-Two-Sum
LINK: https://leetcode.com/problems/two-sum/
// LINK ./README.md

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example: 
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

Input: nums = [3,3], target = 6
Output: [0,1]

**/

const twoSum = (nums, target) => {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i != j)
                result.push([i, j])
        }

    }
    return result[0]
}

//
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
console.log(twoSum([2, 5, 5, 11], 10));