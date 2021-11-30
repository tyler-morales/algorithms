/**
NOTE: 015-3Sum
LINK: https://leetcode.com/problems/3sum/

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example: 
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2], [-1,0,1]]

Input: nums = []
Output: []

**/

const threeSum = (nums) => {
  let triplets = []

  // loop through every number and get the triplets that add to 0
  for (let i = 0; i < nums.length; i++) {
    let target = nums[i]

    for (let j = 1; j < nums.length; j++) {
      for (let k = 2; k < nums.length; k++) {
        if (i != j && (i != k) & (j != k)) {
          if (nums[j] + nums[k] + target == 0) {
            triplets.push([target, nums[j], nums[k]])
            break
          }
        }
      }
    }
  }
  // sort each nested array
  for (const subarr of triplets) {
    subarr.sort((a, b) => a - b)
  }

  // remove duplicate triplet arrays
  const m = {}
  let result = []

  for (let i = 0; i < triplets.length; i++) {
    const v = triplets[i]
    if (!m[v]) {
      result.push(v)
      m[v] = true
    }
  }

  return result
}

// Tests
console.log(threeSum([0]))
console.log(threeSum([3, 0, -2, -1, 1, 2]))
console.log(threeSum([1, -1, -1, 0]))
console.log(threeSum([-1, 0, 1, 0]))
console.log(threeSum([0, 0, 0, 0]))
console.log(threeSum([-2, 0, 1, 1, 2]))
console.log(threeSum([1, 2, -2, -1]))
console.log(threeSum([1, 0, -1]))
console.log(threeSum([-1, 0, 1, 2, -1, -4]))

/*
Thoughts

- use the compliment of each item to add to 0
- then find the double of that item

Input | Inverse Double | Inverse | isZero
------------------------------------------- 
-1            2             1         y     
 0            0             0         y
 1           -2            -1         n
 2           -4            -2         y
-1            2             1         n
-4            8             4         n

- Utilize twoSum
- let the first item be the target
- then find two numbers that equal the target

- -1, 0, 1
- 0, -1, 1
- 1,  

*/
